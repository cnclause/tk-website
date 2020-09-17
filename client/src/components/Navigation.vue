<template>
    <v-app-bar elevate-on-scroll="4" app fixed max-height=5rem short color='white'>
      <v-toolbar-items right class="hidden-sm-and-down">
        <v-btn text to='/' exact>
          <v-img src='https://rootstowingspictures.s3-us-west-1.amazonaws.com/TK-logo-2.0+copy+2+(1).jpg' width='7.5rem' height='3rem' contain> </v-img>
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
            <v-list-item to='/meet-the-birds'>
              Meet the Birds
            </v-list-item>
            <v-list-item to='/staff'>
              Meet the Staff
            </v-list-item>
            <v-list-item to='/our-impact'>
              Our Impact
            </v-list-item>
            <v-list-item to='/projects'>
              Projects
            </v-list-item>
            <v-list-item to='/programs'>
              Programs
            </v-list-item>
            <v-list-item to='/get-involved'>
              Get Involved
            </v-list-item>
            <v-list-item to="/join-us">
            Join Us
            </v-list-item>
            <v-list-item to="/plan-a-fundraiser">
              Plan a Fundraiser
            </v-list-item>
            <v-list-item to="/contact-us">
              Contact Us
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