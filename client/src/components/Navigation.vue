<template>
    <v-app-bar elevate-on-scroll="4" app fixed max-height=5rem short color='white'>
      <v-toolbar-items right class="hidden-sm-and-down">
        <v-btn text to='/' exact>
          <v-img src='https://lh3.googleusercontent.com/9F-lVBcZLWSgH_VPa0qZl_UtcYHfo3WNyT1oKXxqEjXN8YLvfIveStG2Sf_uwWvvjMJtwklUs6tuByRhoPxMrIDNLX6bXEbR_oauR7enF55TIjeBvnwLpfkCwJzfC8JN7j18op4pAgqkNMjpLnks84rUFM54ex5RkZjD6xedKt0RbLg8m9Azzr1lQlDLi8HvgztJYUSCz1tnopty5EHASjISzUxZ9OnukjW_CN3xOLyhL0dV88oNe6KnxRGnRyDRpF7pnSx4Pl9lEHAxXBCBeC7uUdglQIhxhfpoaxt2Id-3JHPMZ_3HOhul4Gsl1NBy2XQSLkDvcT0QcOvuwVQREZlZncFn3bgwF7rKnVWg9x2e-tg1_JikJ3swwdAtuJSQ7NNx8M0Hw3H6ZubKqYk3ULx5NG-iuxLHm47pvSYYd8uEQ-N-B8rdbaq0mEqm-j2-Apa7FjEdLZK49EWB1N4ow1ROGg8qiFe23FbSf3pkA_WAydBVy9Y30iuj4L_bOQHyXSITWGZOSOm5m1tYqcGwYHQY4cBxGOGfaqvneWu_LQigTzJdvW0dOiinHKO97lvatWTI6pvLbur0z2NxR-4NUVnhwzqfvdp4JGtoveww4zJu9pQvf28-gUj6No2VljpMnvA-wKkPy50TqpBtrA3R5NmdiEUoUzX3KW6xNz8icuS_u_54XsfcrI7VRD82GQ=w2160-h1216-no' width='7.5rem' height='3rem'> </v-img>
        </v-btn>
      <v-menu open-on-hover offset-x>
        <template v-slot:activator="{ on }">
          <v-btn
            to='/about'
            v-on="on"
            text
          >
          About Us
          <v-icon class='nav-icon'>fa fa-caret-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/meet-the-birds">
            Meet the Birds
          </v-list-item>
          <v-list-item to="/staff">
            Meet the Staff
          </v-list-item>
          <v-list-item to="/about">
            Our Story
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu open-on-hover offset-x>
        <template v-slot:activator="{ on }">
          <v-btn
            to='/our-impact'
            v-on="on"
            text
          >
          Our Impact
          <v-icon class='nav-icon' >fa fa-caret-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/projects">
            Projects
          </v-list-item>
          <v-list-item to="/programs">
            Programs
          </v-list-item>
        </v-list>
      </v-menu>
      <v-menu open-on-hover offset-x>
        <template v-slot:activator="{ on }">
          <v-btn
            to='/get-involved'
            v-on="on"
            text
          >
          Get Involved
          <v-icon class='nav-icon'>fa fa-caret-down</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item to="/join-us">
            Join Us
          </v-list-item>
          <v-list-item to="/plan-a-fundraiser">
            Plan a Fundraiser
          </v-list-item>
          <v-list-item to="/contact-us">
            Contact Us
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn class="yellow darken-4" text to="/donate"> Donate </v-btn>
      <v-btn class="k-btn" color="pink" text to="/fivek"> 5k </v-btn>
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
            <v-list-item to='/fivek'>
              5k
            </v-list-item>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-menu>
 </v-app-bar>
</template>

<style lang="scss">
@import '@/styles/global.scss';

.nav-icon{
  margin-left: 0.5rem;
}

.k-btn{
  font-size: 16pt !important;
}
</style>