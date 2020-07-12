<template>
    <div class="join-us">
    <div class="join-us-container">
      <h1 class ="page-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Join Us</h1>
    </div>
    <JoinUsSubHeader />
  </div>
</template>

<script>
import JoinUsSubHeader from './JoinUsSubHeader.vue'

export default {
    name: 'JoinUs',
    components: {
        JoinUsSubHeader
    }
}

</script>

<style lang="scss">
  .join-us-container{
    margin: 2rem;
    z-index: 0;
    height: 35rem;
    background-image: url('https://rootstowingspictures.s3-us-west-1.amazonaws.com/Staff-minusKenny.JPG');
    // background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
    }

    .page-title.display-2{
        color: white !important;
    }
</style>