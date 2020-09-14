<template>
    <div class="fivek">
        <h1 class="k-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Our Halloween 5K Fundraiser! </h1>
        <div class="fivek-info-container">
            <p class="fundraiser-info-paragraph k-paragraph" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> From <strong>October 30th-November 1st</strong>, you can walk or run at anytime, anywhere, at any pace you want. After completing the payment below, you will receive
            an email with further information and instructions. <br>
            </p>
            <p class="fundraiser-info-paragraph k-paragraph-thanks" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> Thank you for helping us change lives and communities - empowering individuals forever </p>
        </div>
        <div class="sign-up-donation" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <div class="sponsor-info-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class="sponsor-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Sponsor a Participant! </h1>
                <p class="fundraiser-info-paragraph sponsor-info" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> To sponsor a runner, fill in the amount you want to donate in the custom amount field. You will be asked the name of the participant you are sponsoring after clicking next. Thank you for supporting this participant and From Roots to Wings! </p>
            </div>
            <iframe allowpaymentrequest="" frameborder="0" height="900px" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/five-k" style="max-width: 500px; min-width: 250px; max-height:none!important" width="100%">
            </iframe>
        </div>
    </div>
</template>

<script>

export default {
  name: 'fivek',

}
</script>

<style lang="scss">

.fivek{
    display: flex;
    flex-flow: column;
    align-items: center;
}

.k-title{
    text-align: center;
    padding-top: 4rem;
    text-transform: uppercase;
}

.fivek-info-container{
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
    justify-content: center;
    padding-top: 4rem;

}

.sign-up-donation.small{
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 2rem;

}

.sponsor-info-container.large{
    width: 40%;
    padding-top: 2rem;
}

.sponsor-info-container.small{
    width: 80%;
    padding-bottom: 1.5rem;

}

.sponsor-info.body-1{
    color: black;
    padding-right: 3rem;
}

.sponsor-info.body-2{
    color: black;
    // width: 85%;
    text-align: center;
}

.sponsor-title.subtitle-2{
    text-align: center;
}

.sign-up-title{
    text-align: center;
}

</style>