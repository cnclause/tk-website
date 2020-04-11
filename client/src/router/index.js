import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Donate from '../views/Donate.vue'
import Impact from '../views/OurImpact.vue'
import GetInvolved from '../views/GetInvolved.vue'
import Staff from '../components/StaffContainer.vue'
import Kids from '../components/KidsContainer.vue'
import Projects from '../components/Projects.vue'
import Programs from '../components/Programs/Programs.vue'
import Volunteer from '../components/Volunteer.vue'
import PlanAFundraiser from '../components/PlanFundraiser.vue'
import PositionsAvailable from '../components/Positions.vue'
import ContactUs from '../views/ContactUs.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About
  },
  {
    path:'/staff',
    name:'staff',
    component: Staff
  },
  {
    path:'/meet-the-kids',
    name:'kids',
    component: Kids
  },
  {
    path: '/donate',
    name: 'donate',
    component: Donate
  },
  {
    path: '/our-impact',
    name: 'impact',
    component: Impact
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
  {
    path: '/programs',
    name: 'programs',
    component: Programs
  },
  {
    path: '/get-involved',
    name: 'involved',
    component: GetInvolved
  },
  {
    path: '/positions-available',
    name: 'positions',
    component: PositionsAvailable
  },
  {
    path: '/volunteer',
    name: 'volunteer',
    component: Volunteer
  },
  {
    path: '/plan-a-fundraiser',
    name: 'fundraiser',
    component: PlanAFundraiser
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: ContactUs
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
