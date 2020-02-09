import stripe
import json
import os
import random

from flask import Flask, jsonify, request
from dotenv import load_dotenv, find_dotenv
from flask_cors import CORS

load_dotenv(find_dotenv())
stripe.api_key = os.getenv('STRIPE_SECRET_KEY')
stripe.api_version = os.getenv('STRIPE_API_VERSION')

static_dir = str(os.path.abspath(os.path.join(
    __file__, "..", os.getenv("STATIC_DIR"))))

app = Flask(__name__, static_folder=static_dir,
            static_url_path="", template_folder=static_dir)

CORS(app, resources={r'/*': {'origins': '*'}})


@app.route('/charge', methods=['POST'])
def create_charge():
    post_data = request.get_json()
    amount = round(float(post_data.get('amount')) * 100)
    stripe.api_key = os.environ.get('STRIPE_SECRET_KEY')
    charge = stripe.Charge.create(
        amount=amount,
        currency='usd',
        card=post_data.get('token'),
    )
    response_object = {
        'status': 'success',
        'charge': charge
    }
    return jsonify(response_object), 200


@app.route('/charge/<charge_id>')
def get_charge(charge_id):
    print('is this even a thing????')
    stripe.api_key = os.environ.get('STRIPE_SECRET_KEY')
    response_object = {
        'status': 'success',
        'charge': stripe.Charge.retrieve(charge_id)
    }
    return jsonify(response_object), 200


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
