<template>
    <div class="plan-fundraiser">
    <div class="plan-fundraiser-container">
      <h1 class ="page-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Plan a Fundraiser</h1>
    </div>
    <PlanFundraiserSubHeader />
    <PlanFundraiserInfo />
  </div>
</template>

<script>
import PlanFundraiserSubHeader from './PlanFundraiserSubHeader'
import PlanFundraiserInfo from './PlanFundraiserInfo'

export default {
    name: 'plan',
    components: {
        PlanFundraiserSubHeader,
        PlanFundraiserInfo
    }
}

</script>

<style lang="scss">
  .plan-fundraiser-container{
    margin: 2rem;
    z-index: 0;
    height: 35rem;
    background-image: url('https://rootstowingspictures.s3-us-west-1.amazonaws.com/ArtShow-ChristysTable.jpg');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    display: flex;
    align-items: center;
    }

    // .plan-fundraiser-title{
    //     color: white;
    //     // text-align: center
    // }

    // .plan-fundraiser-title.display-4{
    //     margin-left: 5rem;
    //     padding-top: 3rem !important;
    // }

    // .plan-fundraiser-title.display-2{
    //     font-size: 40pt;
    // }
</style>