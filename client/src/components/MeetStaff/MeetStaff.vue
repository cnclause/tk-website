<template>
  <div class="meet-staff">
    <div class="meet-staff-title-container">
            <div class="meet-staff-title-txt-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <h1 class ="page-title meet-staff-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Meet the Staff</h1>
            </div>
            <div class="meet-staff-title-img-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-img class="meet-staff-title-img" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/TK+Logo+Transparent+Background+no+words-01+(1).png"
                    max-height="40rem"
                    contain
                ></v-img>
            </div>
        </div>
        <StaffContainer />
  </div>
</template>

<script>
import StaffContainer from './StaffContainer.vue'

export default {
  name: 'staff',
  components: {
    StaffContainer
  }
}
</script>

<style lang="scss">

   .page-title.meet-staff-title{
    color: black !important;
    }

    .page-title.meet-staff-title.display-2{
        color: black !important;
    } 
  .meet-staff-title.display-4{
        text-align: right;
        letter-spacing: 0.75rem !important;
        width: 100%;
        align-self: center;
        padding: 0pt;
    }


    .meet-staff-title.display-2{
        text-align: center;
    }

    .meet-staff{
        display: flex;
        flex-flow: column;
        align-items: center;
    }

    .meet-staff-title-txt-container.large{
        display: flex;
        width: 70%;
    }

    .meet-staff-title-txt-container.small{
        display: flex;
        width: 60%;
    }

    .meet-staff-title-img-container.large{
        display: flex;
        width: 30%;
        justify-items: left;
        margin-right: 4rem;
    }

    .meet-staff-title-img-container.small{
        display: flex;
        width: 40%;
        justify-items: left;
   
    }

    .meet-staff-title-container{
        display: flex;
        justify-items: center;
        width: 100%;
    }

</style>
