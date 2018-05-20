import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/layouts/Main.vue';
import DashboardPage from '@/pages/DashboardPage.vue';
import NotFoundPage from '@/pages/NotFoundPage.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Main,
    meta: { label: 'Home' },
    children: [
      {
        path: '/',
        component: DashboardPage,
        meta: { label: 'Главная' },
      },
      {
        path: '404',
        component: NotFoundPage,
      },
    ],
  },
  { path: '*', redirect: '/404' },
];

export default new VueRouter({
  mode: 'history',
  routes,
});
