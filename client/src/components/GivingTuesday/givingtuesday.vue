<template>
    <div class="giving-tues">
        <h1 class="page-title" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'subtitle-1']"> Giving Tuesday </h1>
        <div class="giving-info-container">
            <p class="fundraiser-info-paragraph k-paragraph" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> It's Giving Tuesday! This year we want to try and secure <strong>50 monthly donors</strong>. Recurring donations give us the opportunity to have stable donations during a time of instability.<br> <br><strong>We can no longer rely on fundraisers due to the COVID-19 pandemic.</strong><br><br> While we adjust and get more creative, this is a time where you can help ensure the stability of our programs.
            </p>
            <p class="fundraiser-info-paragraph k-paragraph-thanks" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> <strong> Thank you for helping us change lives and communities - empowering individuals forever </strong></p>
        </div>
        <div class="sign-up-donation" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <v-img 
                class="giving-pic" 
                :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" 
                max-width="600" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/kidsmasks.jpg" 
                eager
            >
            </v-img>
           <iframe class="donorbox" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" allowpaymentrequest="" frameborder="0" height="900px" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/giving-tuesday-70" style="max-width: 500px; min-width: 250px; max-height:none!important" width="100%">
           </iframe>
        </div>
    </div>
</template>

<script>

export default {
  name: 'givingtuesday',

}
</script>

<style lang="scss">

.giving-tues{
    display: flex;
    flex-flow: column;
    align-items: center;
}

.page-title{
    color: black !important;
}
.page-title.large{
    padding-top: 6rem !important;
    text-transform: uppercase;
    color: black !important;
    font-size: 40pt;
    letter-spacing: 0.3rem;
    font-weight: 300;
}

.giving-info-container{
    width: 70%;

}

.k-paragraph{
    padding-top: 2rem;
    text-align: center;
    color: black !important;
}


.k-paragraph-thanks{
    padding-bottom: 2rem;
    text-align: center;
    color: black !important;
}

.sign-up-donation.large{
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 1rem;

}

.sign-up-donation.small{
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 2rem;

}

.sign-up-title{
    text-align: center;
}

.donorbox.large{
    padding-top: 2rem;
    margin-top: 3rem;
    margin-left: 4rem;
}

.donorbox.small{
    padding-top: 2rem;
    max-width: 300px !important;
}

.giving-pic.small{
    max-width: 400px !important;
}

// .tabs.donation-wiget{
//     margin: 0rem !important;
// }

</style>