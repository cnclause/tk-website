<template>
    <div class='about-us-container'>
       <OurStory />
       <AboutLogo />
    </div>
</template>

<script>
import OurStory from './OurStory.vue'
import AboutLogo from './AboutLogo.vue'

export default {
    components:{
        OurStory,
        AboutLogo
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