<template>
    <div class="join-us-subheader-container">
        <div :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']" class='join-us-subheader'> 
            <strong>THIS </strong> is how you can make an impact</div>
        <div :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"       class='join-us-subheader-info'>
            From Roots to Wings was built by volunteers, and we still greatly depend on volunteer support.  Volunteers do outreach in their communities, raise funds, and provide other assistance for From Roots to Wings. As a volunteer, you’ll have opportunities to learn more about our work. We are always looking for new volunteers to help us advance<v-btn class="link-mission-btn pink--text" to="/" text> our mission</v-btn>.
        </div>
        <v-btn color="pink white--text" depressed rounded class="join-us-subheader-btn" to="/contact-us"> Contact Us</v-btn>
    </div>
</template>

<style>
  .join-us-subheader-container{
    display: flex;
    flex-flow: column;
    align-items: center;
  }

  .join-us-subheader{
    margin-top: 3rem;
  }

  .join-us-subheader.body-1{
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 0.3rem !important;
    font-size: 20pt !important;
  }

  .join-us-subheader.body-2{
    text-align: center;
    font-size: 16pt !important;
    margin: 1rem;
  }


  .join-us-subheader-info.body-1{
    width: 60%;
    text-align: center;
    margin-top: 1rem;
    font-size: 15pt !important;
  }

  .join-us-subheader-info.body-2{
    text-align: center;
    margin-top: 0.5rem;
  }

  .join-us-subheader-btn{
    letter-spacing: 0.4rem;
    font-size: 15pt !important;
    margin-top: 2rem;
    font-weight: 400;
  }

  .link-mission-btn{
        font-size: 12pt !important;
    }

</style>