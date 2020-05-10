<template>
    <div class='donate-page' :class="[$vuetify.breakpoint.mdAndUp ? 'donate-large' : 'donate-small']">
        <!-- <div class="donate-form-image-container"> -->
        <!-- <div class="donate-title-container" :class="[$vuetify.breakpoint.mdAndUp ? 'title-large' : 'title-small']" >
            <h1 class="donate-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']"> YOU Can Make a Difference </h1>
        </div> -->
        <div class="donation-info-container">
            <DonateInfo />
        </div>
            <DonateContainer />
        <!-- </div> -->
        <!-- <DonateInfo /> -->
    </div>

</template>

<script>
import DonateContainer from '../components/Donate/donateContainer'
import DonateInfo from '../components/Donate/DonationInfo'

export default {
    name: 'donate',
    components: {
        DonateContainer,
        DonateInfo
    }
}
</script>

<style>
.donate-page.donate-large{
    display: flex;
    justify-content: center;
    /* flex-flow: column; */
}

.donate-page.donate-small{
    display: flex;
    flex-flow: column;
}

/* .donate-form-image-container{
    display: flex;
} */

.donation-info-container{
    width: 50%;
    margin-top: 2rem;

}

.donate-title-container{
    width: 50%;
    margin: 2rem;
    z-index: 0;
    /* height: 40rem; */
    background-image: url('https://rootstowingspictures.s3-us-west-1.amazonaws.com/CharmaSmile-inSchool.jpg');
    background-position: center; 
    background-repeat: no-repeat; 
    background-size: cover;
}

.donate-title-container.title-small{
    width: 90%;
    align-self: center;
    height: 25rem;
}

.donate-title{
    width: 33%;
    margin-left: 1rem;
    text-align: center;
    color: #ffffff;
    text-shadow: 1.5px 1.5px #000000;
}

.donate-title.display-4{
    padding-top: 1rem;
}

.donate-title.display-2{
    width: 40%;
    font-size: 30pt;
}

</style>