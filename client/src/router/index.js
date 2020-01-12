import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Donate from '../views/Donate.vue'
import Projects from '../views/Projects.vue'
import Staff from '../components/StaffContainer.vue'
import Kids from '../components/KidsContainer.vue'

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
    component: About,
    children:[
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
    ]
  },
  {
    path: '/donate',
    name: 'donate',
    component: Donate
  },
  {
    path: '/projects',
    name: 'projects',
    component: Projects
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
