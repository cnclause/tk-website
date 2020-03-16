<template>
<v-footer padless class="footer">
    <v-card
        flat
        tile
        class="footer-card text-center"
    >
      <v-img
        max-height="17rem"
        class="white--text align-end"
        gradient="to top, rgba(255,255,255,0), rgba(255,255,255,1)"
        src='https://lh3.googleusercontent.com/l-yCwAcLEpRvQ9AgGNkDU63Ca-YXab4inguHVVdPHqRdrgu3ohkT6GJDQaUvS8ipoLoLFmA3KT8jviG6LcqVGQJUq9NdZUpNXSOqQ6ZClhRoOnjueJq3a7S6e2k7aW5yKmNnMyV5nRGgTajrEmi3iZIRl8OF1rMenUoTAgJ9QZ-8zN_YHhu7wlaZ5o6i1Mk6yW-x1Cd0TxnYZEWefzUVLBtG7KNszz1FAhGGBhlb18-_BOY_NnAXpSnAIvoHGsuIlf167Jk3TPoVYMjjoBY-6FJo_nLGZ5TB-p4noDQrBSfHjTIXg1tetKIC5v3dyTYUoMQYhccn43sd6t5HnCeblXrrWgdUb1bAw_xlaoq0ycC67iGC2dC6Hfi-CeXy2hqVBXNpcvfBU5GHW1LAuMzSSfOCG9YMAaYzde2TcgjWxxXPf97OGPiPoM8XwXhGHUVpqvwAle-_G9MbrnYdWcnbn0nMjk7pN4wIPURYCY8aDfx08t8Rlp3c_K8vD6eRFaDO0MRmpK5_5fj6Rrz_8pL0H-RqQYvTsS-p4K2wLpPzgjjgXSGt4J8I02xbj7Q7kooGtWMFJIFGFutmW71AIekTh37hfjiJJNSVnQUKHcv0ewjw4TJ3Pn3s4ByScYeYLEFls346vy4e-eO6QY-HWGm9ibJOb2Hn4iKCmcFGpCUy4laEe926XKhrT8qI_fdHvA=w2160-h1440-no'
      >
            <v-card-text class="footer-card-top">
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 footer-btn"
                    icon
                    color='grey darken-4'
                >
                    <v-icon size="24px">{{ icon }}</v-icon>
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
          'fa fa-facebook',
          'fa fa-linkedin',
          'fa fa-instagram',
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
    padding-bottom: 4rem !important;
}

.footer-card-slogan{
    text-align: left;
}

</style>