<template>
  <v-app>
    <div>
      <Navigation />
    </div>
  <v-content>
    <router-view></router-view>
  </v-content>
  </v-app>
</template>

<script>
// import Home from './views/Home';
import Navigation from './components/Navigation';

export default {
  name: 'App',

  components: {
    // Home,
    Navigation
  }
};
</script>
