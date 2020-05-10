<template>
    <div class="donation-info">
        <div :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']" class='join-us-subheader'> 
            What Your <strong>Impact</strong> Looks Like</div>
    </div>
</template>

<style lang="scss">
    // .donation-info{
    //     width: 50%;
    // }
    .donation-info-title.body-1{
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.3rem !important;
        font-size: 30pt !important;
        margin-top: 1.5rem;
    }

    .donation-info-title.body-2{
        text-align: center;
        font-size: 16pt !important;
        margin: 1rem;
    }
</style>