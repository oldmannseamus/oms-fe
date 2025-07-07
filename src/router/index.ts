import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { mainNav: true }
    },
    {
      path: '/profile',
      name: 'profile',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProfileView.vue'),
      meta: { mainNav: true }
    },
    {
      path: '/projects',
      name: 'projects',
      // route level code-splitting
      component: () => import('../views/ProjectsView.vue'),
      meta: { mainNav: true }
    },
    {
      path: '/contact',
      name: 'contact',
      // route level code-splitting
      component: () => import('../views/ContactView.vue'),
      meta: { mainNav: true }
    },
  ],
});

export default router;
