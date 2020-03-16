<template>
  <v-app>
  <Navigation />
    <v-content>
      <router-view></router-view> 
    </v-content>
    <Footer />
  </v-app>
</template>

<script>
import Navigation from './components/Navigation'
import Footer from './components/Footer'


export default {

  name: 'App',

  components: {
    Navigation,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
