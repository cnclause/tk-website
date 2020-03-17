<template>
  <div class="home">
    <div class='title-header-container'>
      <h1 :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']" class="title header">From Roots to Wings </h1>
      <h3 :class="[$vuetify.breakpoint.mdAndUp ? 'display-3' : 'display-1']" class="title slogan">"little by little the bird builds its nest"</h3>
      <!-- <img src='https://lh3.googleusercontent.com/569a8jibDuLQgkgPeYA6ENze80gLofvID36UEBeiAtJUNe-1kTUZLinsqgE3_gViicgBS6jWwedgzkAdv09v2J-Glctn65AfwNRc79lWW6C-rAhcm8WYWAidYDfEyQHQzQ0TXpnD0VyiMp1T7jIqwPwf0Ie3xwoN3XuhQjUEtiLebefNTU7EEjtf_h6WKTQEZJxGP-6HucL5PgT_gFaPyHJAdokALksAm5-j6SUcVVEvxvUIu6RalTP9zPA0StSemNHG1XORIar7cRfXD_D2f4TzlnF6SYoIqZ8puthV3QXjIYCnkjKgJWlaZ5VGhNRIQuRkpnxqbsr59onsEKCaGOzBJaYpyCYt9OGY9djL35CaCXs0W4VfT8YJmfpF0BcuqubInEk_R4ZvYBm9O9Mg12JbghztQLpSm3sn-XlEPbehtd7w4oeWkJ28Nj0jjSGGP9vVmV1pioYLA-I-NQddDC39B3EBM8Pnd5SG1TavVZbpJxq9OcXo1QQpb2RH6Ru2WK76Vux5f5lyitOGsORI0FYRZsttflP5OoV4BIibr75FfvdL3VuIDGZA5oAT5BYLwNXBCkj611Qnq-GtOjQIxaYwMK_euHtlpGUQbdRyMlCcMw95wNbEEZZ6iVMMmctm5iZCaH3tU9mukUTm84kIgF6eIlOKwNaBs6UIOMO8soJ_sYMUI2kU57sm2ykg4g=w2160-h1216-no'> -->
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
  mounted () {
    console.log(this.$vuetify.breakpoint)
  },
}
</script>

<style lang="scss">
@import '../styles/global.scss';
// @import '~vuetify/src/styles/settings/variables.scss';

.title-header-container{
  margin-top: 2rem;
  // position: relative;
  // overflow: hidden;
  z-index: 0;
  height: 30rem;
  background-image: url('https://lh3.googleusercontent.com/vS5RCXNtEYTZEpIXedVRbY8eLaKB0S4pv2H-RD8hGsOOSdr1tyIi3f4CX5wHBIxnVCYX9XC4Sy2twl_GbcccWR01LAXLcLTpvO-lXb5jNczuDsgGM5jWJSMlRIDn3eVD5XsF1ez31nEUo1sI79SCP4RToheLKIOdIvfh_n8ZDIRBBY21zQx2IAAEV0KnowJaS3YJIgEefh6i9U8IbiJY00a8L2NExw27hgxewfmoU8OjTQy0qwTF-3oN1kJJyaSwSLzpEqKT7zT1p-nNiFYzBfxmc_XfcDyqPR00MK-ORXvHMEb7V0GbLpG5c8gC6vVZExm_XICrbBUT3kiI9U9RjJ4fgfrB-g66-gSTVrZCxrlBl2mBMlQ1xQ6UYp5oOjq1h7KCDhMDt7jy4KHiiP9AZH0DmNGSrc3gDPSryhO_g2lv9ITREhVR5PMbyXK6KjbyT11509ouDfLZ1JhDfyjuDikSnpeN3lPwIdMzQLhq4HJ9Agby5hZYOuz7xJJrVq9HOtSeqrIIYezIIOM4Rlmo_nXJBz6pjLB6TkM_7TIbQEL-bf5aNfbtLpqTMuT0aEuVXMNHiVUtRBXx7fUqrQWo4sdd6x-81lUl2DWYT0grd_yXScPlT0Z_HDwuXG_cDxlcYkwOCHNqMLKP8hsQlHin7396Kslbmml7kaukOuX-089Rfj4xWD4MELxbfrWNgg=w1280-h853-no');
  background-position: center; /* Center the image */
  background-repeat: no-repeat; /* Do not repeat the image */
  background-size: auto;
  // background-size: contain;
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
