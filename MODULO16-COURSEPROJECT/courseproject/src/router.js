import { createRouter, createWebHistory } from 'vue-router';

import CoachesList from './pages/CoachesList.vue';
import RequestsList from './pages/RequestsList.vue';
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
    component: CoachesList,
  },
  {
    name: 'coach-detail',
    path: '/coaches/:id',
    component: CoachDetail,
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
    component: RegisterCoach,
  },
  {
    path: '/requests',
    component: RequestsList,
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
