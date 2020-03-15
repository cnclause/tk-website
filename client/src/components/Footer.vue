<template>
<v-footer padless class="footer">
    <v-card
        flat
        tile
        class="footer-card text-center"
    >
      <v-img
        max-height="15rem"
        class="white--text align-end"
        gradient="to top, rgba(255,255,255,0), rgba(255,255,255,1)"
        src='https://lh3.googleusercontent.com/l-yCwAcLEpRvQ9AgGNkDU63Ca-YXab4inguHVVdPHqRdrgu3ohkT6GJDQaUvS8ipoLoLFmA3KT8jviG6LcqVGQJUq9NdZUpNXSOqQ6ZClhRoOnjueJq3a7S6e2k7aW5yKmNnMyV5nRGgTajrEmi3iZIRl8OF1rMenUoTAgJ9QZ-8zN_YHhu7wlaZ5o6i1Mk6yW-x1Cd0TxnYZEWefzUVLBtG7KNszz1FAhGGBhlb18-_BOY_NnAXpSnAIvoHGsuIlf167Jk3TPoVYMjjoBY-6FJo_nLGZ5TB-p4noDQrBSfHjTIXg1tetKIC5v3dyTYUoMQYhccn43sd6t5HnCeblXrrWgdUb1bAw_xlaoq0ycC67iGC2dC6Hfi-CeXy2hqVBXNpcvfBU5GHW1LAuMzSSfOCG9YMAaYzde2TcgjWxxXPf97OGPiPoM8XwXhGHUVpqvwAle-_G9MbrnYdWcnbn0nMjk7pN4wIPURYCY8aDfx08t8Rlp3c_K8vD6eRFaDO0MRmpK5_5fj6Rrz_8pL0H-RqQYvTsS-p4K2wLpPzgjjgXSGt4J8I02xbj7Q7kooGtWMFJIFGFutmW71AIekTh37hfjiJJNSVnQUKHcv0ewjw4TJ3Pn3s4ByScYeYLEFls346vy4e-eO6QY-HWGm9ibJOb2Hn4iKCmcFGpCUy4laEe926XKhrT8qI_fdHvA=w2160-h1440-no'
      >
            <v-card-text>
                <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4 footer-btn"
                    icon
                >
                    <v-icon size="24px">{{ icon }}</v-icon>
                </v-btn>
                <v-btn>
                    Donate
                </v-btn>
            </v-card-text>
            <v-card-text class="pt-0">
            Phasellus feugiat arcu sapien, et iaculis ipsum elementum sit amet. Mauris cursus commodo interdum. Praesent ut risus eget metus luctus accumsan id ultrices nunc. Sed at orci sed massa consectetur dignissim a sit amet dui. Duis commodo vitae velit et faucibus. Morbi vehicula lacinia malesuada. Nulla placerat augue vel ipsum ultrices, cursus iaculis dui sollicitudin. Vestibulum eu ipsum vel diam elementum tempor vel ut orci. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
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
}


</style>