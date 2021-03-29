import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Donate from '../views/Donate.vue'
import Impact from '../views/OurImpact.vue'
import GetInvolved from '../views/GetInvolved.vue'
import Programs from '../components/Programs/Programs.vue'
import Projects from '../components/Projects/Projects.vue'
import Birds from '../components/MeetBirds/MeetBirdsContainer.vue'
import Staff from '../components/MeetStaff/MeetStaff.vue'
import JoinUs from '../components/JoinUs/JoinUs.vue'
import PlanFundraiser from '../components/PlanFundraiser/PlanFundraiser.vue'
import ContactUs from '../views/ContactUs.vue'
import Trivia from '../components/TriviaNight/trivia.vue'


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
    path:'/meet-the-birds',
    name:'birds',
    component: Birds
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
    path: '/join-us',
    name: 'JoinUs',
    component: JoinUs
  },
  {
    path: '/plan-a-fundraiser',
    name: 'plan',
    component: PlanFundraiser
  },
  {
    path: '/contact-us',
    name: 'contact',
    component: ContactUs
  },
  {
    path: '/trivia-night',
    name: 'trivia',
    component: Trivia
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
