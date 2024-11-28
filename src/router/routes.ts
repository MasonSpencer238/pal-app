import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      {

        path: '/',

        component: () => import('pages/DashboardPage.vue'),

      },
      {

        path: 'Vehicle-checks',

        component: () => import('pages/Vehicle-checks.vue'),

      },
      {

        path: 'Interaction-report',

        component: () => import('pages/Interaction-report.vue'),

      },
      {

        path: 'Plant-assets',

        component: () => import('pages/Plant-assets.vue'),

      },
      {

        path: 'Induction-report',

        component: () => import('pages/Induction-report.vue'),

      },
      {

        path: 'help',

        component: () => import('pages/HelpPage.vue'),

      },

    ],

  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
