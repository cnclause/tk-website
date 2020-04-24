<template>
    <div class="about-logo" :class="[$vuetify.breakpoint.mdAndUp ? 'about-logo-large' : 'about-logo-small']">
        <div class="logo-title-container">
            <h1 class="about-logo-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> About Our Logo </h1>
            <img class="about-logo-img" :class="[$vuetify.breakpoint.mdAndUp ? 'img-large' : 'img-small']" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/TK-logo-2.0+copy+2+(1).jpg" />
        </div>
        <div class="logo-info-container" >
            <p class="logo-info" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">
                Our logo was designed by Veronica Musser. The design was inspired by the Haitian Proverb “Little by little, the bird builds its nest”. 
            </p>
            <p class="logo-info" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">
                From the artist: “The bird is made up of a root system in order to represent the creation and building of a new life while staying grounded in ourselves. The color spectrum represents inclusiveness and the notion that every human is unique in their own way”
            </p>
        </div>
    </div>
</template>

<style lang="scss">

    .about-logo.about-logo-large{
        display: flex;
        width: 70%;
        margin-top: 5rem;
    }

    .about-logo.about-logo-small{
        display: flex;
        width: 90%;
        margin-top: 5rem;
    }

    .logo-title-container{
        width: 50%;
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .logo-info-container{
        width: 50%;
    }

    .about-logo-title.subtitle-2{
        font-size: 15pt !important;
        font-weight: 400;
        margin-right: 1.5rem;
        text-align: center;
    }

    .about-logo-img.img-large{
        width: 12rem;
        margin-top: 1rem;
    }

    .about-logo-img.img-small{
        width: 8rem;
        margin-top: 1rem;
        justify-self: center;
    }

    .body-1.logo-info{
        font-size: 15pt !important;
        color: rgba(0, 0, 0, 0.6);
    }
    .body-2.logo-info{
        font-size: 11pt !important;
        font-weight: 300;
        color: rgba(0, 0, 0, 0.6);
    }


</style>