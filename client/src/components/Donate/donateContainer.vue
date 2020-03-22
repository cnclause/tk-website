<template>
    <section class="donate-container" :class="[$vuetify.breakpoint.mdAndUp ? 'donatebox-large' : 'donatebox-small']">
        <iframe  allowpaymentrequest="" frameborder="0" height="40rem" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/recurring-donation-34" style="max-width: 500px; min-width: 310px; max-height:none!important" width="100%"></iframe>
        <!-- <v-stepper
        v-model="e1"
        :alt-labels="altLabels"
        :vertical="vertical"
        class="stepper-container"
        >   
            <v-stepper-step
              :complete="e1 > 1"
              :step="1"
              :editable="editable"
            >
                Step 1
            </v-stepper-step>
            <v-stepper-content
              :step="1"
            >
                <div v-if="errors.length > 0">
                    <v-alert
                        outlined
                        type="error"
                        prominent
                        border="left"
                    >
                        <ol>
                            <li v-for="(error, index) in errors" :key="index">
                                {{error}}
                            </li>
                        </ol>
                    </v-alert>
                </div>
                    <label :class="[$vuetify.breakpoint.mdAndUp ? 'headline font-weight-light mb-4' : 'body-2 font-weight-light mb-4']" for="amount">Gift Amount (USD)</label>
                        <v-radio-group class="amount-group" v-model="amount">
                            <v-radio
                                :label="'$15'"
                                :value='15.00'
                                name="amount"
                            ></v-radio>
                            <v-radio
                                :label="'$25'"
                                :value='25.00'
                                name="amount"
                            ></v-radio>
                            <v-radio
                                :label="'$50'"
                                :value='50.00'
                                name="amount"
                            ></v-radio>
                            <v-radio
                                :label="'$100'"
                                :value='100.00'
                                name="amount"
                            ></v-radio>
                    </v-radio-group>
                <v-btn
                    color="primary"
                    @click="validateAmount(1)"
                >
                    Continue
                </v-btn>
            </v-stepper-content>
            <v-stepper-header>
                <v-stepper-step
                    :complete="e1 > 2"
                    :step="2"
                    :editable="editable"
                >
                    Step 2
                </v-stepper-step>
                <v-divider
                    v-if="2 !== steps"
                    :key="2"
                ></v-divider>
            </v-stepper-header>
            <v-stepper-content
                class="card-info-container"
                :step="2"
            >
                <div class="card-info-container">
                    <div v-if="errors.length > 0">
                        <v-alert
                            outlined
                            type="error"
                            prominent
                            border="left"
                        >
                            <ol>
                                <li v-for="(error, index) in errors" :key="index">
                                    {{error}}
                                </li>
                            </ol>
                        </v-alert>
                    </div>
                <label :class="[$vuetify.breakpoint.mdAndUp ? 'headline font-weight-light mb-4' : 'body-2 font-weight-light mb-4']" for="CardNum">Credit Card Number</label>
                    <input 
                        type="text"
                        v-model="card.number"
                        placeholder="XXXXXXXXXXXXXXX"
                        name="CardNum"
                        required
                    >
                <label :class="[$vuetify.breakpoint.mdAndUp ? 'headline font-weight-light mb-4' : 'body-2 font-weight-light mb-4']" for="CVC">CVC</label>
                    <input 
                        type="text"
                        v-model="card.cvc"
                        placeholder="XXX"
                        name="CVC"
                        required
                    >
                <label :class="[$vuetify.breakpoint.mdAndUp ? 'headline font-weight-light mb-4' : 'body-2 font-weight-light mb-4']" for="ExpDate">Card Expiration Date</label>
                    <input 
                        type="text"
                        v-model="card.exp"
                        placeholder="MM/YY"
                        name="ExpDate"
                        required
                    >
                </div>
            <div class="donate-button-container">
                <v-btn
                    @click.prevent="validate"
                    :disabled="stripeCheck"
                    outlined
                    color="blue darken-2"
                >
                Submit
                </v-btn>
                <v-btn @click="backStep(2)" text>Cancel</v-btn>
            </div>
            </v-stepper-content>
         </v-stepper> -->
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
            console.log("stripekey", this.stripePublishableKey)
            console.log("stripeserver", STRIPE_SERVER)
            this.stripeCheck = true;
            window.Stripe.setPublishableKey(this.stripePublishableKey);
            window.Stripe.createToken(this.card, (status, response) => {
            if (response.error) {
                this.stripeCheck = false;
                this.errors.push(response.error.message);
                console.error('response', response);
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
                    .then( resp => console.log('resp after stripe fetch', resp))
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