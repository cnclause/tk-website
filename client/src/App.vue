<template>
  <div id="app">
    <header class="nav-container">
      <Navigation />
      <router-view/>
    </header>
    <footer id="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Footer from '@/views/Footer.vue';
// import Home from '@/views/Home.vue';


export default {
  components:{
    Footer,
    Navigation,
    // Home
  }
    
}
</script>

<style lang="scss">


#footer{
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
}


</style>
