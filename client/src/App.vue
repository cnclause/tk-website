<template>
  <v-app>
     <v-toolbar app absolute max-height=7rem flat>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/about"> About Us </v-btn>
        <v-btn text to="/our-impact"> Our Impact </v-btn>
        <v-btn text to="/get-involved"> Get Involved </v-btn>
        <v-btn text to="/donate"> Donate </v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <template v-slot:activator="{ on }" >
        <v-app-bar-nav-icon class="hidden-md-and-up" v-on="on"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              About Us
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
    <v-content>
      <router-view></router-view> 
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
};
</script>
