<template>
   <div :class="[$vuetify.breakpoint.mdAndUp ? 'family-card-large' : 'family-card-small']">
        <div class='family-name-container' :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <h1 class="family-name" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']">{{bird.name}}</h1>
        </div>
        <div class='family-img-container' :class="[$vuetify.breakpoint.mdAndUp ? 'family-img-container-large' : 'family-img-container-small']">
            <v-img eager :src='bird.thumbnail' :class="[$vuetify.breakpoint.mdAndUp ? 'family-img-large' : 'family-img-small']" contain max-height="500px"></v-img>
        </div>
    </div> 
</template>

<script>
    export default {
         name: "Bird",
        props: ["bird"]
    }
</script>

<style lang="scss">
    .family-card-large{
        display: flex;
        flex-flow: column;
        align-items: center;
        margin-top: 8rem;
        margin-bottom: 5rem;
       
    }

    .family-name-container.large{
        margin: 2rem !important;
    }

     .family-card-small{
        display: flex;
        flex-flow: column;
        align-items: center; 
    }

    .family-img-container-small{
        width: 45%;
        display: flex;
        justify-content: center;
    }

    .family-img-small{
        margin-bottom: 3rem;

    }

    .family-name-container.small{
        width: 100%;
        display: flex;
        justify-content: center;
    }
</style>