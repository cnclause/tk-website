<template>
     <div class="get-involved">
    <div class="get-involved-container">
      <h1 class ="get-involved-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Get Involved</h1>
    </div>
  </div>
</template>

<script>
export default {
    name: 'involved'
}
</script>

<style lang="scss">

 .get-involved-container{
    margin: 2rem;
    z-index: 0;
    height: 35rem;
    background-image: url('https://lh3.googleusercontent.com/FTL4Y7OOYouyPfPDYpt1ip5x6fWMPIBTQA8GKbovdYtzh8Or3-d8sHbeC-2ZMqlKjjOpnvK1lM65L41X1bQjJa_GD8LNF_A0w_uVIkwJDdwOSe7enAyAAgmSnDseMqiJ6fmgjmbvSllGO-m62GJchg3Urpf-yLoX-qIbDocz4Py06qbD6MJP9gpfR8G8PQNNzEyFwpkRBnGVCIsEPrcBS5tXGPd0c94wlAYA7Dg2Xf2laETzVMEtQG-5e7pYkXmpA9sA8EBfyaZj85pySTFk2QsFquKABtWGqy8RFjXVnJ4DImFW97FRdUnuAkxqYmgtA6_oMpwSdgLX7B8m7we-FEL8dF5aFLubg4jzJ8xjbYJpwDm6Y4Zi2gsMo8ePFosHvkwKmxESbyRUq9rTMJrB4ozO3YdFWx-T0lYd4vYSVRBW1wPkAyBH2tFrwzbPsHV8u5rG_ayuMtdsJwPOZlKbtOAjXAkAmaTUPYy9HrdNgK_usr_fhBKh0jAc_235FCTMeZ1-IRExe-aMBGec9oonZ3QmHOqtssw60B3_YcEQVcwB6KD-xGseiBGpSHwqGiO6N5OSdIICMOGKWIplJ-2oJLz0DdRVEf1FVWiACFeXZcnFY03EIh6SkaOqM0zGCD_HLT_LfojJxeTKXvKzx0P614i6GGXbDbO85fOVm5ml-VoWlSJz-8fzBGTmmMyQ5Q=w2222-h1480-no');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }

  .get-involved-title.display-4{
    margin-left: 5rem;
    // padding-top: 0px;
    color: white;
  }

  </style>