<template>
    <div class="get-involved">
      <div class="get-involved-container">
      <h1 class ="page-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Get Involved</h1>
    </div>
    <GetInvolvedSubHeaderContainer />
    <GetInvolvedOptions />
  </div>
</template>

<script>
import GetInvolvedSubHeaderContainer from '../components/GetInvolved/GetInvolvedSubHeaderContainer.vue'
import GetInvolvedOptions from '../components/GetInvolved/GetInvolvedOptions'

export default {
    name: 'involved',
    components: {
      GetInvolvedSubHeaderContainer,
      GetInvolvedOptions
    }
}
</script>

<style lang="scss">

 .get-involved-container{
    margin: 2rem;
    z-index: 0;
    height: 35rem;
    background-image: url('https://rootstowingspictures.s3-us-west-1.amazonaws.com/JonasAndVolunteer-GetInvolvedTitle-large.jpg');
    background-position: center; /* Center the image */
    background-repeat: no-repeat; /* Do not repeat the image */
    background-size: cover;
  }

  .page-title.display-4{
    margin-left: 5rem;
    color: white;
  }

  </style>