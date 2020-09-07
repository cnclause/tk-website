<template>
    <div class="fivek">
        <h1 class="k-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> Sign Up for our 5K ! </h1>
        <div class="fivek-info-container">
            <p class="fundraiser-info-paragraph k-paragraph" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> After completing the payment below, you will receive
            an email with further information and instructions. Thank you for participating! </p>
        </div>
        <iframe allowpaymentrequest="" frameborder="0" height="900px" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/five-k" style="max-width: 500px; min-width: 250px; max-height:none!important" width="100%">
        </iframe>
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
    width: 50%;

}

.k-paragraph{
    padding-bottom: 3rem;
    padding-top: 2rem;
}

</style>