import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '@/views/MainPage.vue';
import CalendarPage from '@/views/CalendarPage.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage,
  },
  {
    path: '/calendar',
    name: 'Calendar',
    component: CalendarPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
