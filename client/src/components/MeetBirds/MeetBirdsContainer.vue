<template>
    <div class="meet-bird-container">
        <div class="meet-birds-title-container">
            <div class="meet-birds-title-txt-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class ="meet-birds-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Meet the Birds</h1>
            </div>
            <div class="meet-birds-title-img-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-img class="meet-birds-title-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/TK+Logo+Transparent+Background+no+words-01+(1).png"
                    max-height="40rem"
                    contain
                ></v-img>
            </div>
        </div>
        <MeetBirdsGrid/>
    </div>
</template>

<script>
import MeetBirdsGrid from './MeetBirdsGrid'
export default {
    name: 'birds',
    components: {
        MeetBirdsGrid
    }
}
</script>

<style>
    .meet-birds-title.display-4{
        text-align: right;
        letter-spacing: 0.75rem !important;
        width: 100%;
        align-self: center;
        padding: 0pt;
    }


    .meet-birds-title.display-2{
        font-size: 30pt !important;
        text-align: right;
    }

    .meet-bird-container{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .meet-birds-title-txt-container.large{
        display: flex;
        width: 70%;
    }

    .meet-birds-title-txt-container.small{
        display: flex;
        width: 60%;
    }

    .meet-birds-title-img-container.large{
        display: flex;
        width: 30%;
        justify-items: left;
        margin-right: 4rem;
    }

    .meet-birds-title-img-container.small{
        display: flex;
        width: 40%;
        justify-items: left;
   
    }

    .meet-birds-title-container{
        display: flex;
        justify-items: center;
        width: 100%;
    }
</style>