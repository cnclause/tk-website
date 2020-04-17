<template>
    <div class="meet-bird-container">
     <h1 class ="meet-birds-title" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">Meet the Birds</h1>
     <MeetBirdsGrid/>
    </div>
</template>

<script>
import MeetBirdsGrid from './MeetBirdsGrid'
export default {
    name: 'birds',
    components: {
        MeetBirdsGrid
    }
}
</script>

<style>
    .meet-birds-title{
        text-align: center;
    }

    .meet-birds-title.display-2{
        font-size: 40pt !important;
        margin-left: 7rem;
    }

    .meet-bird-container{
        display: flex;
        flex-flow: column;
        align-items: center;
    }
</style>