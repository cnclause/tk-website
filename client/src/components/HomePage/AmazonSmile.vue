<template>
    <div class="amazon-smile-container">
        <h2 class='amazon-smile-title' :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">Shop Using Amazon Smile to Support From Roots to Wings</h2>
        <img :class="[$vuetify.breakpoint.mdAndUp ? 'amazon-banner-large' : 'amazon-banner-small']" src='https://rootstowingspictures.s3-us-west-1.amazonaws.com/AmazonSmile_screen_no_tagline.png' />
        <v-btn href="https://smile.amazon.com/ch/82-2250118"> Go to smile.amazon.com </v-btn>
    </div>
</template>

<style lang="scss">

.amazon-smile-container{
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: 3rem;
}

.amazon-smile-title.body-2{
    font-size: 14pt !important;
    text-align: center;
}

.amazon-banner-large{
    width: 15rem;
    margin: 1rem;
}

.amazon-banner-small{
    width: 10rem;
    margin: 1rem;
}


</style>



