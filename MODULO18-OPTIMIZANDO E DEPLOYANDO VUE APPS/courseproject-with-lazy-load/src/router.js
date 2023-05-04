import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import CoachesListPage from './pages/CoachesListPage.vue';

///EXEMPLO DE ASYNC COMPONENTS COM ROUTING (mais efetivo, lazy loading)
// import RequestsListPage from './pages/RequestsListPage.vue';
const RequestsListPage = defineAsyncComponent(() =>
  import('./pages/RequestsListPage.vue')
);
// import AuthPage from './pages/UserAuth.vue';
const AuthPage = defineAsyncComponent(() => import('./pages/UserAuth.vue'));

const CoachDetail = defineAsyncComponent(() =>
  import('./pages/CoachDetail/CoachDetail.vue')
);

const ContactCoach = defineAsyncComponent(() =>
  import('./pages/CoachDetail/ContactCoach/ContactCoach.vue')
);

const RegisterCoach = defineAsyncComponent(() =>
  import('./pages/RegisterCoach.vue')
);

// import CoachDetail from './pages/CoachDetail/CoachDetail.vue';
// import ContactCoach from './pages/CoachDetail/ContactCoach/ContactCoach.vue';
// import RegisterCoach from './pages/RegisterCoach.vue';
import NotFound from './pages/NotFound.vue';

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
    meta: {
      needsAuth: true,
    },
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
  let isCoach = store.getters.isCoach;
  if (to.meta.authBlock && to.path === '/auth') {
    if (isAuthenticated) {
      return next('/coaches');
    } else {
      return next(true);
    }
  }

  if (to.meta.needsAuth && to.path === '/register') {
    if (isAuthenticated && !isCoach) {
      console.log(isAuthenticated, isCoach, 'PARAMS DOS GURI');
      return next(true);
    } else {
      return next('/auth');
    }
  }

  if (to.meta.needsAuth && to.path === '/requests') {
    if (isAuthenticated) {
      return next(true);
    } else {
      return next('/coaches');
    }
  }

  next(true);
});
export default router;
