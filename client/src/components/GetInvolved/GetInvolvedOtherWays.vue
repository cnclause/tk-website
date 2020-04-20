<template>
    <div class="get-involved-other" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
        <v-card outlined class="get-involved-other-card" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" flat>
            <div class="get-involved-other-title-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" >
                <v-img class="get-involved-other-icon-img" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" src="https://lh3.googleusercontent.com/MNUC5OWfDmzlacBju9l-esHWhoaU9vXOgR4pJ2Siz3Ul7E7eVpRfIIelH75yqqBs1O59HmMsVIO20eoS36nDo88FL_WBDLgNI7t6ljbzhAIiTK4cukUTDi5LhXdKDqPWsK7ZhAD3lRwGHWjsjWcNxZ-A0lQs5WH7Q-XYSt1pCnRAPFwNei5yc6MYSegsLL3XDAhtjSdRuLoQzm1Mhwmkcstx4atFIVui0T2bSrYmtTPP1CQc6zE2CQDOd-WUt0PhT1e-jBZxU3eL05bdnsmPS4JWd0q1K6CwbpruNlsIxpF-bZL7BKJllwIxkS40Y5ey5mHi8NExn7-Iq47PMq8dl0nbNbabKjEIbWBOPTXE0mV0asD6d7fmkMwdPpvV9TegjIQhhQ7T6rF4qUq6lLdJY26G8uE9jngL3eA5ZcmLeEPoHZ7CY600ktw0Rx2jDHNrmizZyHGYo7D8gpIvINkeYF7vv8TxhapgE2NniiaVbnyMfOJk21OpPbtWtnLPYFJjHaJ2utAhNjn0DlxHE3yQHlqICcRMAQPpvkdLbL21uGZI91QW85SMUPLAJUnado8cj4kFjmuO8n9A7QURkJG2245pgZXtdBir6_P2KIx1XXlkvMY2M2xsU25jMgaTMxmSykpO9C91xsiSDuBaCyrw2b2yQzmRMO3gPYA9qRyFKrrfAOwmbEoEAssMywsQZA_y9x-cibRNnjdZg2iPhKqMP1VyVKbNMVaIdP-hON_yP1dhWLcgwqz537Y=s128-no"></v-img> 
                <h1 class="get-involved-other-title" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Other Ways to Give</h1>
            </div>
            <div class="get-involved-other-info">
                <p class="get-involved-other-info-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <!-- <v-btn class="get-involved-other-btn"> other With Us </v-btn> -->
            </div>
        </v-card>
    </div>
</template>

<style>
    .get-involved-other.large{
        width: 50%;
        display: flex;
        justify-content: flex-start;
        margin: 0pt;
        margin-top: 3rem;
        margin-left: 1rem;
    }

    .get-involved-other.small{
        display: flex;
        justify-items: center;
        margin: 1rem;
        margin-top: 3rem;
        
    }

    .get-involved-other-card.large{
        width: 60%;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-other-card.small{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .get-involved-other-title-container{
        display: flex;
    }

    .get-involved-other-title-container.small{
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }

    .get-involved-other-title.body-1{
        text-transform: uppercase;
        /* margin-right: 5rem; */
        margin-top: 2.5rem;
        font-size: 25pt !important;
        letter-spacing: 0.5rem !important;
        line-height: 2.5rem !important;
    }

     .get-involved-other-title.body-2{
        text-transform: uppercase;
        margin-top: 2rem;
        margin-right: 1rem;
        font-size: 18pt !important;
        letter-spacing: 0.5rem !important;
    }

    .get-involved-other-icon-img.large{
        width: 7rem;
        height: 7rem;
        margin: 1rem;
    }

    .get-involved-other-icon-img.small{
        width: 3rem;
        height: 3rem;
        margin: 1rem;
    }

    .get-involved-other-info{
        display: flex;
        flex-flow: column;
        align-items: center;
        width: 90%;
    }

    .get-involved-other-info-description{
        color: rgba(0, 0, 0, 0.6);
    }

    .get-involved-other-btn{
        margin-bottom: 1rem;
    }
</style>