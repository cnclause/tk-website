<template>
    <section class="donate-container" :class="[$vuetify.breakpoint.mdAndUp ? 'donatebox-large' : 'donatebox-small']">
        <iframe  allowpaymentrequest="" frameborder="0" 
        height="40rem" 
        name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/recurring-donation-34" style="max-width: 500px; min-width: 310px; max-height:none!important" width="100%"></iframe>

    </section>
</template>

<script>
export default {
    name: 'donate',
    data() {
        return {
            card: {
                number: '',
                cvc: '',
                exp: ''
            },
            amount: 0.00,
            errors: [],
            stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY || 'pk_test_6DyTSkJQYL6RZCfwis7Zwiuz',
            stripeCheck: false,
            e1: 1,
            steps: 3,
            altLabels: false,
            editable: false,
            vertical: false
        }
    },
    watch: {
    steps (val) {
      if (this.e1 > val) {
        this.e1 = val
      }
    },
    vertical () {
      this.e1 = 2
      requestAnimationFrame(() => this.e1 = 1) // Workarounds
    },
  },

    methods: {
        validate() {
            this.errors = [];
            let valid = true;
            if (!this.card.number) {
                valid = false;
                this.errors.push('Card Number is required');
            }
            if (!this.card.cvc) {
                valid = false;
                this.errors.push('CVC is required');
            }
            if (!this.card.exp) {
                valid = false;
                this.errors.push('Expiration date is required');
            }
            if (valid) {
                this.createToken();
            }
        },
        validateAmount(n){
            this.errors = [];
            if(this.amount === 0.00){
                this.errors.push('Please select amount')
            } else {
                this.nextStep(n)
            }
        },
        createToken() {
            let STRIPE_SERVER = `${process.env.STRIPE_SERVER_URL || 'http://localhost:3000'}/stripe/charge`
            this.stripeCheck = true;
            window.Stripe.setPublishableKey(this.stripePublishableKey);
            window.Stripe.createToken(this.card, (status, response) => {
            if (response.error) {
                this.stripeCheck = false;
                this.errors.push(response.error.message);
            } else {
                const payload = {
                    token: response.id,
                    amount: this.amount
                };
                fetch(STRIPE_SERVER, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(payload)
                })
            }
            });
        },
        onInput (val) {
            this.steps = parseInt(val)
        },
        nextStep (n) {
            if (n === this.steps) {
                this.e1 = 1
            } else {
                this.e1 = n + 1
            }
        },
        backStep(n){
            if(n === 1){
                null
            } else {
                this.e1 = n - 1
            }
        }
    }
}
</script>

<style>
.donate-container{
    margin: 2rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 50%;
}

.donate-container.donatebox-small{
    align-self: center;
}

.donate-form{
    display: flex;
    flex-flow: column;
}

.stepper-container{
    width: 100%;
}

.amount-group{
    margin-left: 2rem;
}

.card-info-container{
    display: flex;
    flex-flow: column;
}

.donate-button-container{
    margin-top: 1rem;
}

</style>