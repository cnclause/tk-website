<template>
    <div class="about-logo" :class="[$vuetify.breakpoint.mdAndUp ? 'about-logo-large' : 'about-logo-small']">
        <div class="logo-title-container">
            <h1 class="about-logo-title" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']"> About Our Logo </h1>
            <img class="about-logo-img" :class="[$vuetify.breakpoint.mdAndUp ? 'img-large' : 'img-small']" src="https://lh3.googleusercontent.com/53Maxh0CbxDjhtKZqhK1EVPlM2a4wI4loBQ7LOJZ_kySo1NpVKkIluqEx-lfDsI5fg6EMbZFNYzAsBRhTi-R5I9krOABvWxdPmMSaKSxh_diE1EfW1XBjABfd6NEk-G3AR7-j6gt89pmAuKvkWeMqc7xRrHpfpWkgF-rlDLVc6ALVJjPt69AX7_5ZmbwF17R7lwnOQPH7ysM1XbcexBvFo8vtY2Eg4gjZfd5vtscfi8laLdNRH2cEle9lbErCORM2IV51jnTQfFnD6cKzMM6N_a-cbxcMWQPAhSoTsCfY_DXwgsDUavHJloHW9e_oO9FpkqF5cSw3h5BHp2QYroNPkQRYMsA9ByvMRyJhabsIt14o9k2KcF8OMIpBrBGDmdFuQKGyLf9o53cXCkKYHKXYz4yFHROn_CMZ9W6h34RHn2pPbFWMDG-EhVhscTdeWKCtjB589CHyXP1825j4FBNi8FQnTnJgSpJUSygTigjduswty3qvH3pgncqxFZBOhPIilszztinCfiL4773HQWsMqGFGJDEvtUZMegLVQFR1JAXW9W4o07yJyfMe3CIquzdOImD2YiXJEZ8tCKoD4ulGyOm4NCXgsUL_gkWehVclV-MG87-x9gAclcDwhYVysVkn5tCAi5zTQdMlCvAg6V1Ncs7fi7tqXj7zqLU1okHReBxQXg_U0pXDfYv8tj_b_alYfOIYtQSO0GpbyjYa37pInnio5ZO4cSggTcNSC2e-t44HKRjhN1as0U=w802-h779-no" />
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