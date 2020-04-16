<template>
   <div :class="[$vuetify.breakpoint.mdAndUp ? 'bird-card-large' : 'bird-card-small']">
       <div id='inner-div'>
            <div id='name-div'>
                <h1>{{bird.name}}</h1>
            </div>
            <div id="pic-div">
                <img :src='bird.thumbnail' :onload="[$vuetify.breakpoint.mdAndUp ? 'this.width/=1.3' : 'this.width/=1.5']"/>
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

<style lang="scss" scoped>
    .bird-card-large{
        padding: 20px;
        display: flex;
        justify-content: center;
        #inner-div{
            justify-content: block;
             #name-div{
            display: flex;
            justify-content: center;
            width: 100%;
            padding: 5px;
            h1{
                font-size: 20pt ;
                font-weight: 400;
                margin-right: 1.5rem;
                text-align: center;
                padding-bottom: 10px;
            }
            }
            #pic-div{
                background-color: #f2f2f2;
  
                img{
                      padding: 20px;
                }
            }
        }
       
    }
     .bird-card-small{
        padding: 20px;
        display: flex;
        justify-content: center;
        padding-bottom: 5px;
        #inner-div{
            justify-content: block;
             #name-div{
            display: flex;
            justify-content: center;
            padding: 5px;
            h1{
                font-size: 20pt ;
                font-weight: 400;
                margin-right: 1.5rem;
                text-align: center;
            }
            }
            #pic-div{
                img{
                      padding: 20px;
                }
            }
        }
       
    }
</style>