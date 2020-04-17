<template>
   <div id="bird-card">
            <div id="text-div">
            <h1>{{bird.name}}</h1>
            <p>{{bird.bio}}</p>
            </div>
          <div id=img-div>
            <img :src='bird.thumbnail' onload="this.width/=1.3">
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
        align-items: center;
        
        #text-div{
            
            float: left;
            padding: 50px;
            h1{
                 font-size: 20pt ;
                font-weight: 400;
                margin-right: 1.5rem;
                padding-bottom: 30px;
            }
            p{
                color: #666;

            }
        }
        #img-div{
            display: flex;
            justify-content: center;
             background-color: #f2f2f2;

            img{
                padding: 20px;
            }
        }
    }
</style>