<template>
    <v-app-bar app fixed max-height=5rem short color='white'>
      <v-toolbar-items right class="hidden-sm-and-down">
        <v-btn text to='/' exact exact-active-class="none">
          <v-img src='https://lh3.googleusercontent.com/9F-lVBcZLWSgH_VPa0qZl_UtcYHfo3WNyT1oKXxqEjXN8YLvfIveStG2Sf_uwWvvjMJtwklUs6tuByRhoPxMrIDNLX6bXEbR_oauR7enF55TIjeBvnwLpfkCwJzfC8JN7j18op4pAgqkNMjpLnks84rUFM54ex5RkZjD6xedKt0RbLg8m9Azzr1lQlDLi8HvgztJYUSCz1tnopty5EHASjISzUxZ9OnukjW_CN3xOLyhL0dV88oNe6KnxRGnRyDRpF7pnSx4Pl9lEHAxXBCBeC7uUdglQIhxhfpoaxt2Id-3JHPMZ_3HOhul4Gsl1NBy2XQSLkDvcT0QcOvuwVQREZlZncFn3bgwF7rKnVWg9x2e-tg1_JikJ3swwdAtuJSQ7NNx8M0Hw3H6ZubKqYk3ULx5NG-iuxLHm47pvSYYd8uEQ-N-B8rdbaq0mEqm-j2-Apa7FjEdLZK49EWB1N4ow1ROGg8qiFe23FbSf3pkA_WAydBVy9Y30iuj4L_bOQHyXSITWGZOSOm5m1tYqcGwYHQY4cBxGOGfaqvneWu_LQigTzJdvW0dOiinHKO97lvatWTI6pvLbur0z2NxR-4NUVnhwzqfvdp4JGtoveww4zJu9pQvf28-gUj6No2VljpMnvA-wKkPy50TqpBtrA3R5NmdiEUoUzX3KW6xNz8icuS_u_54XsfcrI7VRD82GQ=w2160-h1216-no' width='7.5rem' height='3rem'> </v-img>
        </v-btn>
        <div class="dropdown"> 
          <v-btn text to="/about"> About Us
            <v-icon right>fa fa-caret-down</v-icon>
         </v-btn>
        <div class="dropdown-content">
          <router-link class="nav-link" to="/meet-the-kids">Meet the Birds</router-link>
          <router-link class="nav-link" to="/staff">Meet the Staff</router-link>
          <router-link class="nav-link" to="/about">Our Story</router-link>
        </div>
      </div>
        <div class="dropdown"> 
          <v-btn text to="/our-impact"> Our Impact
            <v-icon right>fa fa-caret-down</v-icon>
          </v-btn>
        <div class="dropdown-content">
          <router-link class="nav-link" to="/projects">Projects</router-link>
          <router-link class="nav-link" to="/programs">Programs</router-link>
        </div>
      </div> 
      <div class="dropdown"> 
        <v-btn text to="/get-involved"> Get Involved
          <v-icon right>fa fa-caret-down</v-icon>
        </v-btn>
        <div class="dropdown-content">
          <router-link class="nav-link" to="/positions-available">Positions Available</router-link>
          <router-link class="nav-link" to="/volunteer">Volunteer</router-link>
          <router-link class="nav-link" to="/plan-a-fundraiser">Plan a Fundraiser</router-link>
          <router-link class="nav-link" to="/contact-us">Contact Us</router-link>
        </div>
      </div> 
      <v-btn class="yellow darken-4" text to="/donate"> Donate </v-btn>
    </v-toolbar-items>
    <v-menu class="hidden-md-and-up">
      <template v-slot:activator="{ on }" >
        <v-app-bar-nav-icon class="hidden-md-and-up" v-on="on"></v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item to='/' exact>
              Home
            </v-list-item>
            <v-list-item to='/about'>
              About Us
            </v-list-item>
            <v-list-item to='/our-impact'>
              Our Impact
            </v-list-item>
            <v-list-item to='/get-involved'>
              Get Involved
            </v-list-item>
            <v-list-item to='/donate'>
              Donate
            </v-list-item>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar >
</template>

<style lang="scss">
@import '@/styles/global.scss';


.nav-link{
  text-decoration: none;
  font-family: $body-font;
  font-size: 13pt;
  color: $light-blue;
  cursor: pointer;
  background-color: #ffffff;
  margin: 0.25rem;
  z-index: 999;
}

// .nav-link:hover{
//   color: #000;
// }

// .router-link-exact-active{
//   background-color: #ffffff;
// }


.donate{
  color: #FC6600;
}

// .router-link-exact-active{
//   border-top: 2px solid currentColor;
// }


/* Dropdown button */
.dropdown {
  display:flex;
  flex-flow: column;
  align-items: center;
  justify-content: center;
  font-size: 13pt;
  border: none;
  outline: none;
  background-color: inherit;
  font-family: inherit; /* Important for vertical align on mobile phones */
  margin: 0; /* Important for vertical align on mobile phones */
}


/* Dropdown content (hidden by default) */
.dropdown-content {
  display: none;
  position: absolute;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  background-color: #ffffff;
  z-index: 999;
  margin-top: 2rem;
  // padding-top: 1rem;
}

/* Links inside the dropdown */
.dropdown-content a{
  float: none;
  padding: 6px 8px;
  font-size: 12pt;
  text-decoration: none;
  display: block;
  text-align: left;
  font-weight: 400;
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

// .fa{
//     color: $light-blue;
//     padding-left: 1pt;
// }

// .fa:hover{
//   color: #000;
// }

</style>