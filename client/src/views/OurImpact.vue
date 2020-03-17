<template>
     <div class="our-impact">
    <div class="our-impact-container">
      <h1 class ="our-impact-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Our Impact</h1>
    </div>
  </div>
</template>

<script>
export default {
    name: 'impact'
}
</script>

<style lang="scss">
 .our-impact-container{
    margin: 2rem;
    z-index: 0;
    height: 35rem;
    background-image: url('https://lh3.googleusercontent.com/Q7VtXgyf2ALKSc72VMr_JbzF5Gw7SI-gkmRA8Z7HZZ1eoxMUjfvgloPIGei7a_yNwILXOd2l2aTgaqjZU_i_rkJivMYH6kUep2_-gNhgXVBRAbHYJxvHalAEs-hUJXQdE3DL9_8pLjT9zVhSWh8Yec4kirpv-i4HAEhtt0Rwmyg2Vi9IYQ5Rr9S4VUwIvtKTuhi42aidFNHzwvIT0Np9sjfQAEoApy4s0P9RVD2gT_nqllMXJ8S_pfW1K17MT3npWIy9Jr9b_FGRh7qOe2hVMGpjELNg_ALT-6AxjIPMpZueWqh5LtZzA17StEcP33LzKDxRsTfOSedXZ_1KytBo8bP1ZU5lGLOddsvTcRgJHIgvwJCHabn3w2SoebqnOJYtlYbO4B9Wpp2KXwWLzQQz4wgk3QH9YL8d6Q564ZuLkaDGEiv3SN2_zbYx_FP55CgA8_bSZvacf72ZkfOvy9u68Cc6l3CU17afPEiEeh7fnrw0vgAhAY5rWX7ABNN2J7YtGIChW-wI8KSmrLCin7NlSLJJ6uyG14_CCdvAx9k6hMsGDZNK8VSbNRACWPnPUj9Hvb_mvmPeCUeAO1tjUwFt_yF7Whp4HGcV2QgXXy984DMCNrOCJJz1Ci2TdpghoRZgM8b9JDWWslMWJw30t0WuERs39_aYiQPJHPiPBtpWr8subgiavePLdwptdtrm8Q=w476-h317-no');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }

  .our-impact-title.display-4{
    margin-left: 5rem;
    // padding-top: 0px;
    color: white;
  }
</style>