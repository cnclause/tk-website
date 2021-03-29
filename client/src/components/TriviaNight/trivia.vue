<template>
    <div class="giving-tues">
        <h1 class="page-title" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'subtitle-1']"> Virtual Trivia Night Fundraiser</h1>
        <div class="giving-info-container">
            <p class="fundraiser-info-paragraph k-paragraph" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> 
                 Join us for our Virtual Trivia Night Fundraiser! All proceeds will benefit our educational, economic and health and wellness programs. To register, donate any amount of your choosing and we will send you the link to the event. Winner(s) will have a choice between receiving a From Roots to Wings merch item or a piece of Haitian art. <br><br> <strong>Event details:</strong> <br><br> Thursday, April 15th <br> 7:30 PM EST <br>
            </p>
            <p class="fundraiser-info-paragraph k-paragraph-thanks" :class="[$vuetify.breakpoint.mdAndUp ? 'body-1' : 'body-2']"> <strong> Thank you for helping us change lives and communities - empowering individuals forever </strong></p>
        </div>
        <div class="sign-up-donation" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
            <!-- <v-img 
                class="giving-pic" 
                :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" 
                max-width="600" src="https://rootstowingspictures.s3-us-west-1.amazonaws.com/art_pottery.jpg" 
                eager
            >
            </v-img> -->
            <v-carousel class ='img-carousel' :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <v-carousel-item
                    v-for="(item,i) in items"
                    :key="i"
                    :src="item.src"
                    reverse-transition="fade-transition"
                    transition="fade-transition"
                ></v-carousel-item>
            </v-carousel>
            
           <!-- <iframe class="donorbox" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']" allowpaymentrequest="" frameborder="0" height="900px" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/giving-tuesday-70" style="max-width: 500px; min-width: 250px; max-height:none!important" width="100%">
           </iframe> -->
           <div class="donorbox-container" :class="[$vuetify.breakpoint.mdAndUp ? 'large' : 'small']">
                <iframe allowpaymentrequest="" frameborder="0" height="900px" name="donorbox" scrolling="no" seamless="seamless" src="https://donorbox.org/embed/trivia-1" style="max-width: 500px; min-width: 250px; max-height:none!important" width="100%"></iframe>
           </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'trivia',
   data () {
      return {
        items: [
          {
            src: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/other/art/art_painting_red_white.jpeg',
          },
          {
            src: 'https://rootstowingspictures.s3-us-west-1.amazonaws.com/other/art/art_pottery.jpeg',
          },
        ],
      }
    },
}
</script>

<style lang="scss">

.img-carousel.large{
    height: 500px !important;
}

.giving-tues{
    display: flex;
    flex-flow: column;
    align-items: center;
}

.page-title{
    color: black !important;
}
.page-title.large{
    padding-top: 6rem !important;
    text-transform: uppercase;
    color: black !important;
    font-size: 40pt;
    letter-spacing: 0.3rem;
    font-weight: 300;
}

.page-title.subtitle-1{
    text-align: center !important;
    line-height: 2.5rem !important;
}

.giving-info-container{
    width: 70%;

}

.k-paragraph{
    padding-top: 2rem;
    text-align: center;
    color: black !important;
}


.k-paragraph-thanks{
    padding-bottom: 2rem;
    text-align: center;
    color: black !important;
}

.sign-up-donation.large{
    display: flex;
    // flex-flow: column;
    justify-items: space-between;
    padding-top: 1rem;
    width: 80%;

}

.sign-up-donation.small{
    display: flex;
    flex-flow: column;
    align-items: center;
    padding-top: 2rem;
    width: 80%;

}

.sign-up-title{
    text-align: center;
}

.donorbox-container.large{
    display: flex;
    justify-content: space-evenly;
    width: 70%;
    padding-top: 4rem;
    // margin-top: 3rem;

}

.donorbox-container.small{
    display: flex;
    flex-flow: column;
    width: 70%;
    padding-top: 4rem;
    // margin-top: 3rem;

}

// .domationbox.large{
//     margin-left: 2rem;
// }

.donorbox.small{
    padding-top: 2rem;
    max-width: 300px !important;
}

.giving-pic.small{
    max-width: 400px !important;
    width: 80% !important;
}

</style>