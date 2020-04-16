<template>
   <div id="bird-card">
       <div id='name-div'>
           <h1>{{bird.name}}</h1>
       </div>
       <div id="pic-div">
            <img :src='bird.thumbnail' onload="this.width/=2;this.onload=null" />
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
        padding: 20px;
        display: flex;
        justify-content: center;
        #name-div{
            width: 100%;
        }
        #pic-div{
            width: 100%;
        }
    }
</style>