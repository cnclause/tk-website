<template>
    <div class="projects">
        <div class="project-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <h1 class ="page-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Our Projects</h1>
        </div>
        <CoronaProjectContainer />
        <CommunityCenterProjectContainer />
  </div>
</template>

<script>
import CoronaProjectContainer from './CoronaProjectContainer'
import CommunityCenterProjectContainer from './CommunityCenterProjectContainer'


export default {
    name: 'projects',
    components: {
        CoronaProjectContainer,
        CommunityCenterProjectContainer
    }
}
</script>

<style lang="scss" scope>

    .project-container{
        margin: 2rem;
        z-index: 0;
        height: 35rem;
        background-image: url('https://rootstowingspictures.s3-us-west-1.amazonaws.com/EsdrasLookingOverCitifeke-widelook.jpg');
        background-repeat: no-repeat; /* Do not repeat the image */
        background-size: cover;
    }

    .project-container.large{
        background-position: center; /* Center the image */
    }

    .project-container.small{
        background-position: right; /* Center the image */
    }


    .page-title{
        color: white;
    }

    .page-title.display-4{
        margin-left: 5rem;
    }

    .page-title.display-2{
        color: black !important;
    }


</style>