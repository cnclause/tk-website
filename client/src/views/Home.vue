<template>
  <div class="home">
    <div class='title-header-container'>
      <h1 :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']" class="title header">From Roots to Wings </h1>
      <h3 :class="[$vuetify.breakpoint.mdAndUp ? 'display-3' : 'display-1']" class="title slogan">"little by little the bird builds its nest"</h3>
      <img src='https://lh3.googleusercontent.com/eeLdk6639Pg6kqaPXANoVE0YNyqxpPEjcKb27C4_isW5Do1GBIeq7ozti4leYLU3ukFmptIWMnsF2V7dSslf5LPP_CdY_QDx89hHOSLHRd-4z0SebIk7BrNmJnH0nv_q4ixQI5mU8IbSTedEEmF6UXXUo2Mo1dpu75En6ZTDYSzqxn4GKlhoKJbuyDbSN03VmxPajluh5iWZ21E8B7Ld_UmWcm3j0ccEViXiGDIl0lm4UZEAdQRN5y4l1J6fwWo_dgZhe5sA1w0qJ8ajjOslnAmrF_WIV99vL7T1a-nE19WUQZASg5vTkjzp19vV2NYRmPEybnmfoRsWhZtvKmf-wb2nHzsUx4OkpQamfl3Js1Bf927WpMGu74dkiR23uq3kLKO2G6ExaeMg1TebUPXibvoyuPs_qrQK8br6QEKQPZBFqd_pdR7AsR4yMSlUYKipVK5WNoegpz55axpsHZuJgKEG8OIRjQT0ddLXRPQVlLcdLLCusPgMlt0v7eIaaqg1-WfHYDLYh3aYLk1uusqOkLe0NmvAFWKR8WMfwRjycXMsI7JmWg8cWJdodFY62ij1S4-8uO8jW7h_eyri3L40f-YNaPOVbIJSUepZksWY83MusrW7wTHYiGoaiT9OEHYUsgU8Qh8kd8BqaYsIwbC3PGMxzlyKg_f4qqA8SfqoiKRShcAOBX6ZUKE=w2160-h1440-no'>
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
  position: relative;
  overflow: hidden;
}

.title-header-container h1{
    // padding: 100px;
    position: relative;
    z-index: 2;
    // text-shadow: 1px 1px 1px #ffffff;
    // font-size: 80pt;
    font-weight: bold;
}

.display-4{
  padding: 100px;
  
}

.display-2{
  padding: 30px;
  font-size: 30pt;
}


.title-header-container h3{
    padding-bottom: 75px;
    position: relative;
    z-index: 2;
}

.title-header-container img {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: auto;
}

.title{
  font-family: $title-font;
  text-align: center;
  z-index: -1;
}

// .header{
//   font-size: 80pt;
//   font-weight: bold;
// }

//  @media #{map-get($grid-breakpoints, 'md') - 1}{
//     .header{
//       font-size: 15pt;
//     }
//   }

//   @media #{map-get($grid-breakpoints, 'md')}{
//     .header{
//       font-size: 80pt;
//     }
//   }

.slogan {
  font-size: 30pt;
}

</style>
