<template>
  <div id="app">
    <div id="nav">
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/about">About</router-link>
      <router-link class="nav-link" to="/donate">Donate</router-link>
      <router-link class="nav-link" to="/projects">Projects</router-link>
    </div>
    <router-view/>
    <footer id="footer">
      <Footer />
    </footer>
  </div>
</template>

<script>
import Footer from '@/views/Footer.vue';

export default {
  components:{
    Footer
  }
    
}
</script>

<style lang="scss">
@import './styles/global.scss';


#nav{
  display: flex;
  justify-content: space-evenly;
}

.nav-link{
  text-decoration: none;
  font-family: $body-font;
  font-size: 15pt;
  color: $light-blue;
  cursor: pointer;
}

.router-link-exact-active{
  border-top: 2px solid currentColor;
}

.dropdown {
  float: left;
  overflow: hidden;
  display:none;
}
.dropdown:hover{
  display:block;
}
#nav a:hover, .dropdown:hover {
  background-color: red;
}

</style>
