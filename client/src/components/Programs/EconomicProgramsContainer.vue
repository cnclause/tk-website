<template>
    <div class="programs-container">
        <h1 class=" economic-heading programs-heading" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']"> Economic Programs </h1>
        <div class="each-program-container" :class="[$vuetify.breakpoint.mdAndUp ? 'each-program-container-large' : 'each-program-container-small']">
            <div class="program-info">
                <h1 class="each-program-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Microloans </h1>
                <p class="program-description" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> orem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div class="program-img-container">
                <v-img clas="program-img" src="https://lh3.googleusercontent.com/aFbsmCxGcHnRFwYbpnsqY6D0O96YjjaHRML-Oa7ks4s9DVmcRZ1QJv4ph5Mckc5Df9fF5BEE3lxzh6B_WBkra6JyJSnoNJsSRGqrK_OjrYtdS_pYfZ4HOw3AYKGjAMCmiHK6Btbfdp-WmUu_xMCdlQ_c6YGmkJhIgFDM6rhMF9jq5GGdM_I5wJGqGnCuSQJrBSyLLTtG3onunbKAmSpc5tQ5eSAQiZ539lfgzXla8n_4O2QyOOxpm6kYi-fpO4oNA1ciT35Y-pi3UStSn3vC6Dr3H2IzZ_-ZMdzxtdszNzQTksm4-kUfg-Hs_3erDQWTpnF0gh76DfqgE-vS-GllpxGDXbUtxeB-9SotuHCtRFo2XeurPJ1VpFaGfpUPLro2Rj_u23edbzIMN8-ouI1bSbCoPosQnke21Pvw_EEIeGTnGJ5-uP9luzdYo1wQNzzNr6VtXn60RYKI9zTTSKR1Bm1T14Pwn268bPKOpLR78BtsLz16WLn4dCFTcHIYYx5B6r8oQ6-gp5EllswfvmMyQWTl3bvO_Xv8ptAjDvbs3-FpjsQTjw1HPWYugcLrq4gV8m1hMl9UiEpm4FeVU6pY85LcXTXOaYh7KcG0koFN3W5EhtmypGXnK7ZpcuVSTUPUlfykSdhqfH7RXwXfYakp_haLXIGzvaPdFLrneHECvxWt6jdPzgSyEE8z0iIYOQTXc_znTUUGkpXQb1hlORWfvv2ZID9sqHu0qO-hD8Pi23MyYTAZn9JFRcs=w1856-h1236-no">
                </v-img>
            </div>
        </div>
    </div>
</template>

<style>

.programs-container{
    margin-top: 2rem;
    display: flex;
    flex-flow: column;
    align-items: center;
}

.each-program-container-large.each-program-container{
    display: flex;
    width: 80%;
    margin-top: 3rem;
    margin-bottom: 3rem;
}

.each-program-container-small.each-program-container{
    display: flex;
    flex-flow: column;
    width: 90%;
    margin-top: 3rem;
    margin-bottom: 3rem;
    align-items: center;
}

.program-info{
    width: 50%;
    align-content: center;
    margin: 2rem;
}

.program-img-container{
    width: 50%;
}

.program-description{
    margin-top: 2rem;
    color: rgba(0, 0, 0, 0.6);
}

.program-divider{
    background-color: rgba(0, 0, 0, 0.12);
    margin: 1rem;
    width: 80%;
}

.each-program-title.subtitle-2{
    font-size: 18pt !important;
    text-align: center;
    line-height: 2rem !important;
}

.programs-heading.display-4{
    font-size: 50pt !important;
    padding-top: 0rem;
}

.programs-heading{
    padding: 0rem;
}

.economic-heading{
    color: #4CAF50;
}

</style>