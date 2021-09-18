import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegistrationPage from '../pages/RegistrationPage.vue';

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/register',
      component: RegistrationPage
    },
    {
      path: '/login',
      component: LoginPage
    }
  ]
})

export default router
