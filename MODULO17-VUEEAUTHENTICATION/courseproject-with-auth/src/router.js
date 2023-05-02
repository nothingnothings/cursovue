import { createRouter, createWebHistory } from 'vue-router';

import CoachesListPage from './pages/CoachesListPage.vue';
import RequestsListPage from './pages/RequestsListPage.vue';
import AuthPage from './pages/UserAuth.vue';
import CoachDetail from './pages/CoachDetail/CoachDetail.vue';
import ContactCoach from './pages/CoachDetail/ContactCoach/ContactCoach.vue';
import NotFound from './pages/NotFound.vue';
import RegisterCoach from './pages/RegisterCoach.vue';

const routes = [
  {
    path: '/',
    redirect: '/coaches',
  },
  {
    path: '/coaches',
    component: CoachesListPage,
  },
  {
    beforeEnter: (from, to, next) => {
      next(true);
    },
    path: '/auth',
    name: 'auth',
    component: AuthPage,
  },
  {
    name: 'coach-detail',
    path: '/coaches/:id',
    component: CoachDetail,
    props: true, /// isso vai passar 'id', o value da url, COMO PROP, para dentro desse component 'Detail' (e isso é usado, mais tarde, para CARREGAR A DATA DE CADA COACH, dinamicamente)...
    children: [
      {
        name: 'contact-coach',
        path: 'contact',
        component: ContactCoach,
      },
    ],
  },
  {
    path: '/register',
    name: 'register-coach',
    component: RegisterCoach,
  },
  {
    path: '/requests',
    component: RequestsListPage,
  },
  {
    path: '/notFound(.*)',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
