import AnnouncementPage from '../pages/AnnouncementPage.vue';
import HomePage from '../pages/HomePage.vue';
import LoginPage from '../pages/LoginPage.vue';
import RegistrationPage from '../pages/RegistrationPage.vue';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: [
    {
      name: 'HomePageRoute',
      path: '/',
      component: HomePage
    },
    {
      name: 'RegistrationPageRoute',
      path: '/register',
      component: RegistrationPage
    },
    {
      name: 'LoginPageRoute',
      path: '/login',
      component: LoginPage
    },
    {
      name: 'AnnouncementPageRoute',
      path: '/announcements/:announcementId',
      component: AnnouncementPage,
      props: true
    }
  ]
})

export default router
