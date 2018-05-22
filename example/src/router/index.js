import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '@/layouts/Main.vue';
import Empty from '@/layouts/Empty.vue';
import DashboardPage from '@/pages/DashboardPage.vue';
import WidgetsPage from '@/pages/WidgetsPage.vue';
import UiGeneralPage from '@/pages/ui/UiGeneralPage.vue';
import UiIconsPage from '@/pages/ui/UiIconsPage.vue';
import UiButtonsPage from '@/pages/ui/UiButtonsPage.vue';
import LoginPage from '@/pages/pages/LoginPage.vue';
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
        meta: { label: 'Dashboard' },
      },
      {
        path: 'widgets',
        component: WidgetsPage,
        meta: { label: 'Widgets' },
      },
      {
        path: 'ui',
        component: Empty,
        meta: { label: 'UI Elements' },
        children: [
          {
            path: 'general',
            component: UiGeneralPage,
            meta: { label: 'General' },
          },
          {
            path: 'icons',
            component: UiIconsPage,
            meta: { label: 'Icons' },
          },
          {
            path: 'buttons',
            component: UiButtonsPage,
            meta: { label: 'Buttons' },
          },
        ],
      },
      {
        path: '404',
        component: NotFoundPage,
        meta: { label: '404 Error Page' },
      },
    ],
  },
  { path: '/pages/login', component: LoginPage },
  { path: '*', redirect: '/404' },
];

export default new VueRouter({
  mode: 'hash', // Use this app in github pages, so we need this
  routes,
});
