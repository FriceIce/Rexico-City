import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/views/MainPage.vue'
import CalendarPage from '@/views/CalendarPage.vue'
import TicketsPage from '@/views/TicketsPage.vue'
import TicketsNextPage from '@/views/TicketsNextPage.vue'
import SearchPage from '@/views/SearchPage.vue'
import Card2Page from '../views/Card2Page.vue'
import Card3Page from '../views/Card3Page.vue'
import Card4Page from '../views/Card4Page.vue'

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
  {
    path: '/tickets',
    name: 'Tickets',
    component: TicketsPage,
  },
  {
    path: '/tickets/:id',
    name: 'Card',
    component: TicketsNextPage,
  },
  {
    path: '/card2',
    name: 'Card2',
    component: Card2Page,
  },
  {
    path: '/card3',
    name: 'Card3',
    component: Card3Page,
  },
  {
    path: '/card4',
    name: 'Card4',
    component: Card4Page,
  },
  {
    path: '/search',
    name: 'Search',
    component: SearchPage,
    meta: { hideNavbar: true },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
