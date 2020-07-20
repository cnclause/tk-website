<template>
    <div class="programs">
    <div class="program-container">
      <h1 class ="page-title program" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Our Programs</h1>
    </div>
    <EducationProgramsContainer />
    <WellnessProgramsContainer />
    <EconomicProgramsContainer />
  </div>
</template>

<script>
import EducationProgramsContainer from './EducationProgramsContainer.vue'
import WellnessProgramsContainer from './WellnessProgramsContainer.vue'
import EconomicProgramsContainer from './EconomicProgramsContainer.vue'

export default {
    name: 'programs',
    components: {
        EducationProgramsContainer,
        WellnessProgramsContainer,
        EconomicProgramsContainer
    }
}
</script>

<style lang="scss" scope>

    .program-container{
    margin: 2rem;
    z-index: 0;
    height: 35rem;
    background-image: url('https://rootstowingspictures.s3-us-west-1.amazonaws.com/TeamMeetingErnsos.jpg');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    }

    .page-title.program.display-4{
        color: white !important;
    }

    .page-title.program.display-2{
        color: white !important;
    }

</style>