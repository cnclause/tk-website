<template>
   <div :class="[$vuetify.breakpoint.mdAndUp ? 'bird-card-large' : 'bird-card-small']">
       <div class="inner-div">
            <div id=img-div>
            <img :src='bird.thumbnail' :onload="bird.lawerence ? 'this.width*=2' : 'this.width/=1.3'" />
        </div>
            <div id="text-div">
            <div id="h1-div">
            <h1>{{bird.name}}</h1>
            </div>
            <p>{{bird.bio}}</p>
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

        .inner-div{
            display: flex;
            align-items: center;

            #text-div{
            float: left;
            padding-right: 50px;
            padding-left: 50px;
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
       
    }

    .bird-card-small{
        padding: 20px;
        display: flex; 
        justify-content: center;
        padding-bottom: 5px;

        .inner-div{
            display: block;

        #text-div{
            #h1-div{
                display: flex;
                justify-content: center;
                h1{
                     font-size: 20pt ;
                    font-weight: 400;
                    margin-right: 1.5rem;
                    text-align: center;
                    padding-bottom: 10px;
                }
                }
                p{
                    color: #666;
                    text-align: center;
                }
        }
        #img-div{
            display: flex;
            justify-content: center;

            img{
                padding: 20px;
            }
        }
    }
    }
    



</style>