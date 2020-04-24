<template>
    <div class="programs">
    <div class="program-container">
      <h1 class ="program-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Our Programs</h1>
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

<style lang="scss">

    .program-container{
    margin: 2rem;
    z-index: 0;
    height: 35rem;
    background-image: url('https://rootstowingspictures.s3-us-west-1.amazonaws.com/TeamMeetingErnsos.jpg');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    }

    .program-title{
        color: white;
    }

    .program-title.display-4{
        margin-left: 5rem;
    }

    .program-title.display-2{
        font-size: 40pt;
    }

</style>