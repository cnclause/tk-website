<template>
  <div class="about">
    <div class="about-container">
      <h1 class ="about-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">About Us</h1>
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

<style lang="scss">
  .about-container{
    margin: 2rem;
    z-index: 0;
    height: 35rem;
    background-image: url('https://rootstowingspictures.s3-us-west-1.amazonaws.com/JonasWearingTKShirt-AboutUsTitle-large.jpg');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }

  .about-title.display-4{
    margin-left: 5rem;
  }
</style>
