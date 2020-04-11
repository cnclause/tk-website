<template>
   <div id="bird-card">
          <div id=img-div>
            <img :src='bird.thumbnail'>
        </div>
            <div id="text-div">
            <h1>{{bird.name}}</h1>
            <p>{{bird.bio}}</p>
            </div>
    </div>
</template>

<script>
    export default {
         name: "Bird",
        props: ["bird"]
    }
</script>


<style lang="scss" scoped>
    #bird-card{
        padding: 50px;
        display: flex;
        
        #text-div{
            float: left;
            padding: 30px;
        }
        #img-div{
            display: flex;
            justify-content: center;
            width: 50%;
            height: 80%;
            img{
                width: 80%;
                padding: 10px;
            }
        }
    }
</style>