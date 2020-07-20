<template>
  <div class="home">
    <div class='title-header-container'>
      <h1 :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']" class="title header">From Roots to Wings </h1>
      <h3 :class="[$vuetify.breakpoint.mdAndUp ? 'display-3' : 'display-1']" class="title slogan">"little by little the bird builds its nest"</h3>
    </div>
    <HomeBody />
  </div>
</template>

<script>
import HomeBody from '@/components/HomePage/HomeBody'

export default {
  name: 'home',

  components: {
    HomeBody
  }
}
</script>

<style lang="scss">
@import '../styles/global.scss';

.title-header-container{
  margin: 2rem;
  z-index: 0;
  height: 35rem;
  background-image: url('https://rootstowingspictures.s3-us-west-1.amazonaws.com/HomeTitlePic-large.jpg');
  background-position: center center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  // background-size: auto;
  background-size: cover;
}

.title-header-container h1{
    z-index: 2;
    font-weight: bold;
}

.title.display-4{
  padding-top: 100px;
  text-align: center;
  z-index: -1;
  
}

.title.display-2{
  padding: 30px;
  text-align: center;
}


.title-header-container h3{
    padding-bottom: 75px;
    z-index: 2;
}

.slogan.display-3 {
  font-size: 30pt;
  text-align: center;
  line-height: 5rem !important;
}

.title.slogan.display-1 {
  font-size: 25pt !important;
  text-align: center;
}

</style>
