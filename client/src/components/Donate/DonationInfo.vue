<template>
    <div class="donation-info">
        <div :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"           class='donation-info-text'>
            You can change lives and communities - empowering individuals forever
        </div>
        <v-img 
            src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/CharmaDonatePic-outsideSchool.jpg"
            class="donate-img"
        >
        </v-img>
    </div>
</template>

<style>
    .donation-info-text.body-1{
        text-align: center;
        margin-top: 1rem;
        font-size: 15pt !important;
    }

  .donation-info-text.body-2{
    text-align: center;
    margin-top: 0.5rem;
  }

  .donate-img{
      margin-left: 4rem;
      margin-top: 4rem;
  }

</style>