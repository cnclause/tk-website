<template>
  <div class="about">
    <div class="about-container">
      <h1 class ="about-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">About Us</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about'
}
</script>

<style lang="scss">

  .about-container{
    margin: 2rem;
    z-index: 0;
    height: 35rem;
    background-image: url('https://lh3.googleusercontent.com/S22GrPYTfz22gr4aQklbY2cJSBZdIA_QaCFRcM4tb6AkPFuaV35YSw4Qe2MTt7M_Hi3dnGbD9EAx2fvMSgsYThpW1iglzJYgUQrEkqvjhxxooqfpJ_SdwutoRQcP-tSNpdcyUlkgTaiGatb_oWV8sWMQ9Exf9DBFlQV3wa7J2excZ5p4YXmfco0S3LHpnx-3y-SU2ycASRizaFbz8BJ87v-90EgAbKkcdfJ6lpSqqILb_CnZInDm5InywoMWcmF5mq-u__WbJKIMJ3BIhuIGSr_ZtEy9u-qnfPc3riHVOinlUes7iK9MPyM5aW1p3ROCOxIxzzawWayXfm3-xwdvvvBLhIzt87A0tQoYkwVOcSYMuvW31uipYFwPLoS2FWf_-FL7UO1iA0l9E3Rs5liLF51eb2KVMJJ0MR8Tpc6tmuJnhRR61af3gps1SWtA-bwb3HqYxGw0CzMV-6MJsfUIyD7Qp7P3swUZWrZh299iv499fNYGA9oHY2Qng2s2JjeqCftYhmjL8jZmObhb8vwRGlTKmX7sz6IfZJtcxOaxStN87bE0V6mVhYZv7XYcpGAfZjwXEZpWhZDmS2eMQZnoFrkf_nay2qIqBIt_XXXJezTQ0Ncn-ewazAQEky3Pi-y37busTj93Ttaw_Ss-l90KaEEjKLktMjRHKHgknffvwcp6nktIU_Pp0VJCpEFgJw=w2222-h1480-no');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }

  .about-title.display-4{
    margin-left: 5rem;
  }
</style>
