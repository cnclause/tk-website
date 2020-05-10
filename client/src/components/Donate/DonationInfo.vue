<template>
    <div class="donation-info">
        <div :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"           class='donation-info-text'>
            You can change lives and communities - empowering individuals forever
        </div>
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

</style>