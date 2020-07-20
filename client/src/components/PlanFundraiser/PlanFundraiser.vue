<template>
    <div class="plan-fundraiser">
    <div class="plan-fundraiser-container">
      <h1 class ="page-title fundraise" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Plan a Fundraiser</h1>
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

    .page-title.fundraise.display-4{
      color: white !important;
    }

    .page-title.fundraise.display-2{
      color: white !important;
    }

</style>