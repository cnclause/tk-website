<template>
   <div :class="[$vuetify.breakpoint.mdAndUp ? 'bird-card-large' : 'bird-card-small']">
            <div class="meet-bird-img-containter">
                <v-img eager class="meet-bird-img"
                max-height="320px"
                contain
                :src='bird.thumbnail'></v-img>
            </div>
             <div class="meet-bird-info-containter">
                <div class="meet-bird-name-container">
                    <h1 class="meet-bird-kid-name" :class="[$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'subtitle-2']">{{bird.name}}</h1>
                    <p class="meet-bird-bio" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']">{{bird.bio}}</p>
                </div>
            
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
    .bird-card-large{
        display: flex; 
        align-items: center;
        width: 75%;
        margin-top: 3rem;


        .meet-bird-img-containter{
            width: 45%;
        }

        .meet-bird-info-containter{
            width: 45%;
            margin-right: 3rem;
        }

    }

    .bird-card-small{
        display: flex; 
        flex-flow:column;
        align-items: center;
        padding-bottom: 5px;
        margin-top: 2rem;
        margin-bottom: 2rem;
        width: 100%;

         .meet-bird-img-containter{
            width: 90%;
        }

        .meet-bird-info-containter{
            width: 90%;
        }
    }

     .meet-bird-bio{
        margin-top: 1.5rem;
    }

</style>