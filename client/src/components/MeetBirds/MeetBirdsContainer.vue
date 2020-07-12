<template>
    <div class="meet-bird-container">
        <div class="meet-birds-title-container">
            <div class="meet-birds-title-txt-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class ="page-title meet-birds-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Meet the Birds</h1>
            </div>
            <div class="meet-birds-title-img-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-img class="meet-birds-title-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/logo.jpeg"
                    max-height="15rem"
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

.page-title.meet-birds-title{
    color: black !important;
}

.page-title.meet-birds-title.display-2{
    color: black !important;
}

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
    color: black !important;
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
    width: 70%;
    justify-items: left;
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