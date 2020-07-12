<template>
    <div class='home-body'>
        <div :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']" class='mission-statement'> <strong>From Roots to Wings</strong> exists to develop sustainable, community-based avenues towards empowerment.</div>
        <HomeTimeline />
        <AmazonSmile />
    </div>  
</template>

<script>
import HomeTimeline from './HomeTimeline.vue'
import AmazonSmile from './AmazonSmile.vue'

export default {
    components: {
        HomeTimeline,
        AmazonSmile
    }
}
</script>

<style>
.home-body {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.mission-statement.body-2{
    text-align: center;
    width: 90%;
    margin-top: 1rem;
    font-weight: 300;
    font-size: 16pt !important;
    line-height: 1.75rem !important;
}

.mission-statement.body-1{
    text-align: center;
    text-transform: uppercase;
    margin-top: 3rem;
    line-height: 2.5rem !important;
    text-align: center;
    width: 60%;
    /* letter-spacing: 0.25rem !important; */
}

/* .mission-statement{
    text-align: center;
    margin-top: 1rem;
    font-size: 15pt;
    width: 30%;
    font-weight: 300;
} */

.card-text{
    text-align: center;
    line-height: 2rem;
    color: #000000;
}


</style>