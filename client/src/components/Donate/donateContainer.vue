<template>
    <section class="donate-container">
        <v-stepper
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
                    <label :class="[$vuetify.breakpoint.mdAndUp ? 'headline font-weight-light mb-4' : 'body-2 font-weight-light mb-4']" for="amount">Gift Amount (USD)</label>
                        <!-- <input
                            type="number"
                            v-model="amount"
                            placehoulder="0.00"
                            name="amount"
                            required
                        > -->
                        <v-radio-group class="amount-group" v-model="amount">
                            <v-radio
                                :label="'$15'"
                                name="amount"
                            ></v-radio>
                            <v-radio
                                :label="'$25'"
                                name="amount"
                            ></v-radio>
                            <v-radio
                                :label="'$50'"
                                name="amount"
                            ></v-radio>
                            <v-radio
                                :label="'$100'"
                                name="amount"
                            ></v-radio>
                    </v-radio-group>
                <v-btn
                    color="primary"
                    @click="nextStep(1)"
                >
                    Continue
                </v-btn>
                 <v-btn text>Cancel</v-btn>
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
              :step="2"
            >
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
            <v-btn
                @click.prevent="validate"
                :disabled="stripeCheck"
            >
            Submit
            </v-btn>
  
            <v-btn text>Cancel</v-btn>
            </v-stepper-content>
        <!-- <form class="donate-form">
            <label :class="[$vuetify.breakpoint.mdAndUp ? 'headline font-weight-light mb-4' : 'body-2 font-weight-light mb-4']" for="amount">Gift Amount (USD)</label>
            <input
                type="number"
                v-model="amount"
                placehoulder="0.00"
                name="amount"
                required
            >
            <v-radio-group>
                <v-radio
                    :label="'$15'"
                    name="amount"
                    v-model="amount"
                ></v-radio>
                <v-radio
                    :label="'$25'"
                    name="amount"
                    v-model="amount"
                ></v-radio>
                <v-radio
                    :label="'$50'"
                    name="amount"
                    v-model="amount"
                ></v-radio>
                <v-radio
                    :label="'$100'"
                    name="amount"
                    v-model="amount"
                ></v-radio>
        </v-radio-group>
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
            <v-btn
                @click.prevent="validate"
                :disabled="stripeCheck"
            >
            Submit
            </v-btn>
        </form>
        <div v-show="errors">
            <ol>
                <li v-for="(error, index) in errors" :key="index">
                    {{error}}
                </li>
            </ol>
        </div> -->
        </v-stepper>
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
        createToken() {
            let STRIPE_SERVER = `${process.env.STRIPE_SERVER_URL || 'http://localhost:4242'}/charge`
            console.log("stripekey", this.stripePublishableKey)
            console.log("stripeserver", STRIPE_SERVER)
            this.stripeCheck = true;
            window.Stripe.setPublishableKey(this.stripePublishableKey);
            window.Stripe.createToken(this.card, (status, response) => {
            if (response.error) {
                this.stripeCheck = false;
                this.errors.push(response.error.message);
                console.error(response);
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
                    .then( resp => {console.log(resp.json())})
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


</style>