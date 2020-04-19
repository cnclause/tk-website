<template>
    <div class='home-body'>
        <div :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']" class='mission-statement'> From Roots to Wings exists to helps develop communities by following the lead of community members and leaders something something</div>
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
}

.mission-statement.body-1{
    text-align: center;
    width: 30%;
    margin-top: 2rem;
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