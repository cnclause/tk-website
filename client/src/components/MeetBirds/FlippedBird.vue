<template>
  <div :class="[$vuetify.breakpoint.mdAndUp ? 'bird-card-large' : 'bird-card-small']">
        <div class="meet-bird-info-containter">
            <div class="meet-bird-name-container">
                <h1 class="meet-bird-kid-name" :class="[$vuetify.breakpoint.mdAndUp ? 'display-4' : 'display-2']">{{bird.name}}</h1>
                </div>
            <p>{{bird.bio}}</p>
        </div>
        <div class="meet-bird-img-containter">
                <v-img class="meet-bird-img" 
                    :src='bird.thumbnail' 
                    :lazy-src="bird.thumbnail"
                    max-height="320px"
                    contain
                >
                    <template v-slot:placeholder>
                    <v-row
                        class="fill-height ma-0"
                        align="center"
                        justify="center"
                    >
            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
          </v-row>
        </template>
                </v-img>
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
            display: flex;
            justify-content: left;
        }

        .meet-bird-info-containter{
            width: 45%;
            margin-left: 3rem;
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

    .meet-bird-kid-name.display-4{
        color: #28abe2;
        padding: 0pt;
        font-size: 35pt !important;
        font-weight: 700 !important;
        letter-spacing: 0.75rem !important;
    }

    .meet-bird-kid-name.display-2{
        color: #28abe2;
        font-size: 30pt !important;
        font-weight: 700 !important;
        text-align: center;
    }
    

</style>