import { createRouter, createWebHistory } from 'vue-router';

import CoachesListPage from './pages/CoachesListPage.vue';
import RequestsListPage from './pages/RequestsListPage.vue';
import AuthPage from './pages/UserAuth.vue';
import CoachDetail from './pages/CoachDetail/CoachDetail.vue';
import ContactCoach from './pages/CoachDetail/ContactCoach/ContactCoach.vue';
import NotFound from './pages/NotFound.vue';
import RegisterCoach from './pages/RegisterCoach.vue';
import store from './store/store';

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
    meta: {
      authBlock: true,
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
    meta: {
      needsAuth: true,
    },
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

router.beforeEach((to, from, next) => {
  console.log(to);
  let isAuthenticated = store.getters.token;
  if (to.meta.authBlock) {
    if (isAuthenticated) {
      return next('/coaches');
    } else {
      console.log('ENTROU DOS GURI 2');
      return next(true);
    }
  }

  if (to.meta.needsAuth && to.path === '/requests') {
    console.log('ENTROU DOS GURi');
    if (isAuthenticated) {
      return next(true);
    } else {
      return next('/coaches');
    }
  }

  next(true);
});
export default router;
