import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: () => import('@/components/pages/Home.vue'),
    },
    {
      path: '/about',
      component: () => import('@/components/pages/About.vue'),
    },
  ],
});
