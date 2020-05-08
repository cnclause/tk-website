<template>
    <div class="plan-fundraiser-subheader-container">
        <div :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']" class='plan-fundraiser-subheader'> 
            Take a lead and change <strong>Everything</strong></div>
        <div :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"       class='plan-fundraiser-subheader-info'>
            Organized fundraisers are a primary way From Roots to Wings funds its programs and activities. We have teams that organize and execute fundraisers in many cities across the United States. You can lead a team. Contact us to learn how!
        </div>
        <v-btn color="green white--text" depressed rounded class="plan-fundraiser-subheader-btn" to="/donate"> Contact Us</v-btn>
    </div>
</template>

<style>
  .plan-fundraiser-subheader-container{
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .plan-fundraiser-subheader{
    margin-top: 3rem;
  }

  .plan-fundraiser-subheader.body-1{
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.3rem !important;
    font-size: 20pt !important;
  }

  .plan-fundraiser-subheader.body-2{
    text-align: center;
    font-size: 16pt !important;
    margin: 1rem;
  }


  .plan-fundraiser-subheader-info.body-1{
    width: 60%;
    text-align: center;
    margin-top: 1rem;
    font-size: 15pt !important;
  }

  .plan-fundraiser-subheader-info.body-2{
    text-align: center;
    margin-top: 0.5rem;
  }

  .plan-fundraiser-subheader-btn{
    letter-spacing: 0.4rem;
    font-size: 15pt !important;
    margin-top: 2rem;
    font-weight: 400;
  }

</style>