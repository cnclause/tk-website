<template>
    <div class='about-us-container'>
       <OurStory />
    </div>
</template>

<script>
import OurStory from './OurStory.vue'

export default {
    components:{
        OurStory
    }
    
}
</script>

<style>

.about-us-container{
    display: flex;
    flex-flow: column;
    align-items: center;
}


</style>