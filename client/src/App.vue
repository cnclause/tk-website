<template>
  <v-app>
    <div class="navbar-container">
      <Navigation />
    </div>
    <v-content>
      <Home/>
    </v-content>
  </v-app>
</template>

<script>
import Home from './views/Home';
import Navigation from './components/Navigation';

export default {
  name: 'App',

  components: {
    Home,
    Navigation
  }
};
</script>
