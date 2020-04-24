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
  }, 
  // mounted () {
  //   console.log(this.$vuetify.breakpoint)
  // },
}
</script>

<style lang="scss">
@import '../styles/global.scss';
// @import '~vuetify/src/styles/settings/variables.scss';

.title-header-container{
  margin: 2rem;
  // position: relative;
  // overflow: hidden;
  z-index: 0;
  height: 30rem;
  background-image: url('https://rootstowingspictures.s3-us-west-1.amazonaws.com/Yoga-Yellow-ShowdyLeading.jpg');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  // background-size: auto;
  background-size: cover;
}

.title-header-container h1{
    // padding: 100px;
    // position: relative;
    z-index: 2;
    // text-shadow: 1px 1px 1px #ffffff;
    // font-size: 80pt;
    font-weight: bold;
}

.display-4{
  padding-top: 100px;
  
}

.display-2{
  padding: 30px;
  font-size: 30pt;
}


.title-header-container h3{
    padding-bottom: 75px;
    // position: relative;
    z-index: 2;
}

// .title-header-container img {
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: auto;
// }

.title{
  font-family: $title-font;
  text-align: center;
  z-index: -1;
}

.slogan {
  font-size: 30pt;
}

</style>
