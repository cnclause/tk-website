<template>
    <div class="our-impact">
      <div class="our-impact-container">
        <h1 class ="page-title impact" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Our Impact</h1>
      </div>
      <OurImpactStatContainer />
      <ProgramImpact />
  </div>
</template>

<script>
import OurImpactStatContainer from '../components/OurImpact/OurImpactStatContainer.vue'
import ProgramImpact from '../components/OurImpact/ProgramImpact'

export default {
    name: 'impact',
    components: {
      OurImpactStatContainer,
      ProgramImpact
    }
}
</script>

<style lang="scss" scope>
 .our-impact-container{
    margin: 2rem;
    z-index: 0;
    height: 35rem;
    background-image: url('https://rootstowingspictures.s3-us-west-1.amazonaws.com/YogaMEditation-OurImpactTitle-large.jpg');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }

  .page-title.impact.display-4{
    margin-left: 5rem;
    padding-top: 3.5rem;
    color: white !important;
  }

  .page-title.impact.display-2{
    color: white !important;
    padding-top: 1rem;
  }
</style>