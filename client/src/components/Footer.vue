<template>
<v-footer padless class="footer">
    <v-card
        flat
        tile
        class="footer-card text-center"
    >
      <v-img
        max-height="32rem"
        class="white--text align-end footer-img"
        gradient="to top, rgba(255,255,255,0), rgba(255,255,255,1)"
        src='https://rootstowingspictures.s3-us-west-1.amazonaws.com/Footer-large.jpg'
      >
            <v-card-text class="footer-card-top">
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    :href="icon.link"
                    class="mx-4 footer-btn"
                    icon
                    color='grey darken-4'
                >
                    <v-icon size="24px">{{ icon.icon }}</v-icon>
                </v-btn>
            </v-card-text>
            <v-card-text class="footer-card-bottom">
                <v-btn text to="/" color="black"> Home </v-btn>
                <v-btn text to="/about" color="black"> About Us </v-btn>
                <v-btn text to="/our-impact"> Our Impact </v-btn>
                <v-btn text to="/get-involved"> Get Involved </v-btn>
                <v-btn class="yellow darken-4" text to="/donate"> Donate </v-btn>
            </v-card-text>
            <v-card-text class="pt-0 footer-card-slogan">
                "Little by little the bird builds its nest"
            </v-card-text>
            <v-divider></v-divider>
        </v-img>
      </v-card>
    </v-footer>
</template>

<script>
export default {
    data(){
        return {
        icons: [
          {
              icon: 'fa fa-facebook',
              link: 'https://www.facebook.com/TimounKontan'
          },
          {
              icon: 'fa fa-linkedin',
              link: 'https://www.linkedin.com/company/timoun-kontan/'
          },
          {
              icon: 'fa fa-instagram',
              link: 'https://www.instagram.com/timounkontan/'
          }
        ]
        }
    }
}
</script>

<style lang="scss">

.footer{
    margin-top: 1rem;
    display: flex;
    flex-flow: column;
    justify-items: flex-start;
}

// .footer-card{
//     display: flex;
//     flex-flow: column;
//     justify-items: flex-start;
// }

.footer-card-top{
    padding-bottom: 0px !important;
    padding-top: 0px !important
}

.footer-card-bottom{
    padding-bottom: 14rem !important;
}

.footer-card-slogan{
    text-align: left;
}

.footer-card{
    width: 100%;
}


</style>