<template>
    <div class="get-involved-subheader-container">
      <div :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']" class='get-involved-subheader'> 
        <strong>YOU </strong> can help the birds build their nests</div>
        <div :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']" class='get-involved-subheader-info'>
          You can change lives and communities - empowering individuals forever
        </div>
        <v-btn color="yellow darken-4" depressed rounded class="get-involved-subheader-btn" to="/donate"> Donate </v-btn>
    </div>
</template>

<style>
  .get-involved-subheader-container{
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .get-involved-subheader{
    margin-top: 5rem;
  }

  .get-involved-subheader.body-1{
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.3rem !important;
    font-size: 20pt !important;
  }

  .get-involved-subheader.body-2{
    text-align: center;
    font-size: 16pt !important;
    margin: 1rem;
  }

  strong{
    font-weight: 700 !important;
  }

  .get-involved-subheader-info.body-1{
    text-align: center;
    margin-top: 1rem;
  }

  .get-involved-subheader-info.body-2{
    text-align: center;
    margin-top: 0.5rem;
  }

  .get-involved-subheader-btn{
    letter-spacing: 0.4rem;
    font-size: 15pt !important;
    margin-top: 2rem;
    font-weight: 400;
  }

</style>