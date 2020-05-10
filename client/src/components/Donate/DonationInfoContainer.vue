<template>
    <div class="donation-info-container">
        <div :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']" class='join-us-subheader'> 
            What Your <strong>Impact</strong> Looks Like
        </div>
        <DonationInfo />
    </div>
</template>

<script>
import DonationInfo from './DonationInfo.vue'

export default {
    components: {
        DonationInfo
    }
    
}
</script>

<style lang="scss">
    .donation-info-container{
        width: 50%;
    }

    .donation-info-title.body-1{
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.3rem !important;
        font-size: 30pt !important;
        margin-top: 1.5rem;
    }

    .donation-info-title.body-2{
        text-align: center;
        font-size: 16pt !important;
        margin: 1rem;
    }
</style>