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
  background-image: url('https://lh3.googleusercontent.com/qt-G3tcCmLWw6L3BTPQyaDSIpw_BJVChV_5mwRpL6YpZ41SNg6YAyvGHxQsx-kE9aW80uBV6NhapGDfv2bdM5gXkr8sA4lx531gUUrJSnI57ylq-ZkNyWMSpItKo4SrKYfxu1eQPsgDZTrv0gpZfaCy4KbikIaxYrYpLf4jvnXXVa8RDXDUzspa9j22kn77ikbyYrfJLTtN0CMt3Qk2m9m44u33kTyQTCFp-Fc8-CpwmECnmpIxmK5UEZrM7GgTyvP6nDjoz35RwARqOcHl9bYSkLHOF-RZ5BPLzusK6EFMQYFMCcYCulP9WA1yk7Evn50UPfYvhwx1KEBN0jWZasGBcBCWaKleVL0TJvdlgsc2zA1K_vTBzS8hO-cTDYWIQU1NPcngSH0LuRhYExyXTUGEneG-Cz8wPrc_HmlkxMmD-JJzremXspEqgFR4CWWjIeFCujykM38wO-cpHR3LagJp-x0MavwoafypH-Cb2lKzaemj-_OWZ5y-a9wm6N3GiZQt67ThAcyU6dtgGEgUf5UgoahSSpVluW02TVeGITHiZWFKpBJgwu2QgSHn-pVH57didQQmSnr1fKOcdhNjHkdfbkrCjdf5gjUivNpjqdRSogvH01H6TSzFobEPGG5CoFs4NUNSqqheTt-lRMUzzQLMYuT0Xgxz2i4L7ryBGgRQY3rsYqp7zJpc1ubTyHi0Wk7tawY8pysOwNmGvSNNVJpsslKHuWh-QfNO0S2foRvCBMDFVHKtouxk=w487-h274-no');
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
