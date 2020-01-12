"""
server.py - Jan 10, 2020 JT
This server handles secure payment logic.
Requirements: >= Python3.6
See README.MD for more info.
"""

import stripe
import json
import os
import random

from flask import Flask, render_template, jsonify, request, send_from_directory
from dotenv import load_dotenv, find_dotenv

load_dotenv(find_dotenv())
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')
stripe.api_version = os.getenv('STRIPE_API_VERSION')

static_dir = str(os.path.abspath(os.path.join(
    __file__, "..", os.getenv("STATIC_DIR"))))

app = Flask(__name__, static_folder=static_dir,
            static_url_path="", template_folder=static_dir)

def calculate_order_amount(isDonating):
    return 1400 if isDonating else 1354 # TODO calculate order amount


@app.route('/create-payment-intent', methods=['POST'])
def create_payment():

    data = json.loads(request.data)

    transfer_group = "group_" + str(random.randint(0, 10000))

    intent = stripe.PaymentIntent.create(
        amount=calculate_order_amount(False),
        currency=data['currency'],
        transfer_group=transfer_group
    )

    try:
        return jsonify({'publicKey': os.getenv('STRIPE_PUBLISHABLE_KEY'), 'paymentIntent': intent})
    except Exception as e:
        return jsonify(str(e)), 403


@app.route('/update-payment-intent', methods=['POST'])
def update_payment():
    data = json.loads(request.data)

    intent = stripe.PaymentIntent.retrieve(data['id'])
    metadata = intent.metadata
    if data['isDonating']:
        metadata.update(
            {'donationAmount': 46, 'organizationAccountId': os.getenv("ORGANIZATION_ACCOUNT_ID")})
    else:
        metadata.update(
            {'donationAmount': 0, 'organizationAccountId': ''})

    updated_intent = stripe.PaymentIntent.modify(data['id'],
                                                 metadata=metadata,
                                                 amount=calculate_order_amount(data['isDonating']))

    try:
        return jsonify({'amount': updated_intent.amount})
    except Exception as e:
        return jsonify(str(e)), 403


@app.route('/webhook', methods=['POST'])
def webhook_received():
    webhook_secret = os.getenv('STRIPE_WEBHOOK_SECRET')
    request_data = json.loads(request.data)

    if webhook_secret:
        signature = request.headers.get('stripe-signature')
        try:
            event = stripe.Webhook.construct_event(
                payload=request.data, sig_header=signature, secret=webhook_secret)
            data = event['data']
        except Exception as e:
            return e
        event_type = event['type']
    else:
        data = request_data['data']
        event_type = request_data['type']
    data_object = data['object']

    if event_type == 'payment_intent.succeeded':
        # Customer made a donation
        # Use Stripe Connect to transfer funds to organization's Stripe account
        transfer = stripe.Transfer.create(
            amount=data_object['metadata']['donationAmount'],
            currency="usd",
            destination=data_object['metadata']['organizationAccountId'],
            transfer_group=data_object['transfer_group']
        )
    return jsonify({'status': 'success'})


if __name__ == '__main__':
    app.run()
