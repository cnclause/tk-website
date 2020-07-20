<template>
  <div class="about">
    <div class="about-container">
      <h1 class ="page-title about-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">About Us</h1>
    </div>
    <AboutUsContainer />
  </div>
</template>

<script>
import AboutUsContainer from '../components/AboutUs/AboutUsContainer'

export default {
  name: 'about',
  components: {
    AboutUsContainer
  }
}
</script>

<style lang="scss" scope>
  .about-container{
    margin: 2rem;
    z-index: 0;
    height: 35rem;
    background-image: url('https://rootstowingspictures.s3-us-west-1.amazonaws.com/JonasWearingTKShirt-AboutUsTitle-large.jpg');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }

  .page-title.display-4{
    margin-left: 5rem;
    padding-top: 2rem;
    color: black !important;
  }
  
  .page-title.about-title{
    color: black !important;
  }

  .page-title.display-2{
    margin-left: 1rem;
    padding-top: 1rem;
    color: black !important;
  }
</style>
