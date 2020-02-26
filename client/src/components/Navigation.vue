<template>
    <!-- <div id="nav">
      <router-link class="nav-link" to="/">Home</router-link>
      <div class="dropdown"> 
          <router-link class="nav-link" to="/about">
            About Us
          </router-link>
          <i class="fa fa-caret-down" aria-hidden="true"></i>
        <div class="dropdown-content">
          <router-link class="nav-link" to="/meet-the-kids">Meet the Birds</router-link>
          <router-link class="nav-link" to="/staff">Meet the Staff</router-link>
          <router-link class="nav-link" to="/about">Our Story</router-link>
        </div>
      </div>
      <div class="dropdown"> 
          <router-link class="nav-link" to="/our-impact">
            Our Impact
          </router-link>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        <div class="dropdown-content">
          <router-link class="nav-link" to="/projects">Projects</router-link>
          <router-link class="nav-link" to="/programs">Programs</router-link>
        </div>
      </div> 
      <div class="dropdown"> 
          <router-link class="nav-link" to="/get-involved">
            Get Involved
          </router-link>
            <i class="fa fa-caret-down" aria-hidden="true"></i>
        <div class="dropdown-content">
          <router-link class="nav-link" to="/donate">Donate</router-link>
          <router-link class="nav-link" to="/positions-available">Positions Available</router-link>
          <router-link class="nav-link" to="/volunteer">Volunteer</router-link>
          <router-link class="nav-link" to="/plan-a-fundraiser">Plan a Fundraiser</router-link>
          <router-link class="nav-link" to="/contact-us">Contact Us</router-link>
        </div>
      </div> 
      <router-link class="nav-link donate" to="/donate">Donate</router-link>
    </div> -->
    <v-app-bar app absolute max-height=7rem flat>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text to="/about"> About Us </v-btn>
        <v-btn text to="/our-impact"> Our Impact </v-btn>
        <v-btn text to="/get-involved"> Get Involved </v-btn>
        <v-btn class="yellow darken-4" text to="/donate"> Donate </v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <template v-slot:activator="{ on }" >
        <v-app-bar-nav-icon class="hidden-md-and-up" v-on="on"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>
              About Us
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar >
</template>

<style lang="scss">
@import '@/styles/global.scss';

#nav{
  display: flex;
  justify-content: space-evenly;
}

.nav-link{
  text-decoration: none;
  font-family: $body-font;
  font-size: 13pt;
  color: $light-blue;
  cursor: pointer;
  background-color: #ffffff;
}

.nav-link:hover{
  color: #000;
}

.donate{
  color: #FC6600;
}

.router-link-exact-active{
  border-top: 2px solid currentColor;
}

.dropdown {
  float: left;
  overflow: hidden;
}

/* Dropdown button */
.dropdown {
  font-size: 13pt;
  border: none;
  outline: none;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
// .navbar a:hover, .dropdown:hover {
//   color: #0000;
// }

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 999;
  // position: absolute;
}

/* Links inside the dropdown */
.dropdown-content a{
  float: none;
  padding: 6px 8px;
  font-size: 12pt;
  text-decoration: none;
  display: block;
  text-align: left;
  font-weight: 200;
   z-index: 999;
}

/* Add a grey background color to dropdown links on hover */
.dropdown-content a:hover {
  background-color: #ddd;
}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}

.fa{
    color: $light-blue;
    padding-left: 1pt;
}

.fa:hover{
  color: #000;
}

</style>