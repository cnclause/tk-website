<template>
    <div id="nav">
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
          <router-link class="nav-link" to="/plan-fundraiser">Plan a Fundraiser</router-link>
          <router-link class="nav-link" to="/contact-us">Contact Us</router-link>
        </div>
      </div> 
      <router-link class="nav-link" to="/donate">Donate</router-link>
    </div>
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
}

/* Dropdown button */
.dropdown {
  font-size: 15pt;
  border: none;
  outline: none;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}

/* Add a red background color to navbar links on hover */
.navbar a:hover, .dropdown:hover {
  font-weight: bold;
}

/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a{
  float: none;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
  font-weight: 300;
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

</style>