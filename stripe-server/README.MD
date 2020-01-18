# TK Stripe server

The TK Stripe sever is a lightweight flask server built to safely manage donations to TK in a way that adheres to legal and financial best practice.

 - Last updated Jan 10, 2020 - JT

## Docs

*These docs will walk through setting up the TK Stripe server for local development.*

### 1. Set up a python virtual environment.
*Requires Python3.x - pip3 - venv*

cd into the directory

`cd stripe-server`

Create a virtual environment called .venv

`python3 -m venv .venv`

Activate the virtual environment

`source .venv/bin/activate`

*Note: To exit use the command* `deactivate`

### 2. Install dependencies

`pip3 install -r requirements.txt`

### 3. Export and run the server

```
export FLASK_APP=server.py
python3 -m flask run --port=4242
```

## API

coming soon...
