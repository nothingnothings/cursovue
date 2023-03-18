import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';
import NotFound from './components/nav/NotFound.vue';

const router = createRouter({
  // linkActiveClass: 'active', ///com essas 2 options, podemos mudar o NOME DA CSS CLASS DE 'active' QUE APARECE NAS NOSSAS ANCHOR TAGS, quando estamos em 1 determinado link (routing, etc)...
  // linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/',
      redirect: '/teams', //exemplo de redirect clássico....
    },
    // {
    //   path: '/teams',
    //   // alias: '/',   ////alternativa ao uso de REDIRECT...
    //   component: TeamsList,
    // },
    // {
    //   path: '/teams',
    //   name: 'teams', ////é assim que atribuímos NOMES a nossas routes, que se tornam especialmente úteis quando precisamos construir LINKS a essas routes, com 'router-link''...
    //   component: TeamsList,
    //   children: [ ////exemplo de como escrever 'NESTED ROUTES'.
    //     {
    //       name: 'team-members', //opcional, mas recomendado.
    //       path: ':teamId',
    //       component: TeamMembers,
    //     },
    //   ],
    // },

    {
      path: '/teams',
      name: 'teams', ////é assim que atribuímos NOMES a nossas routes, que se tornam especialmente úteis quando precisamos construir LINKS a essas routes, com 'router-link''...
      components: {
        //usamos 'components' quando queremos carregar MÚLTIPLOS COMPONENTS POR 'page' DO VUE...
        main: TeamsList,
        footer: TeamsFooter,
      },
      children: [
        ////exemplo de como escrever 'NESTED ROUTES'.
        {
          name: 'team-members', //opcional, mas recomendado.
          path: ':teamId',
          component: TeamMembers,
        },
      ],
    },

    {
      path: '/users',
      // component: UsersList,
      components: {
        main: UsersList,
        footer: UsersFooter,
      },
    },
    // {
    //   path: '/teams/new', //routes específicas, se existirem, devem sempre serem carregadas ANTES DAS ROUTES DINÂMICAS (como ':teamId')...
    //   component: Xxxx,
    // },

    // {
    //   name: 'TeamMembers',
    //   path: '/teams/:teamId',
    //   component: TeamMembers,
    //   // props: true //// em vez de usar isso com sua page dinâmica, use 'this.$router.params'...
    //   //apenas use 'props:true' SE VC QUER DEIXAR SEU COMPONENT MAIS 'REUSABLE' (usável tanto POR MEIO DE ROUTING (pages) COMO POR MEIO DO USO COMO COMPONENT NORMAL (que recebe props, etc))
    // },

    {
      path: '/:catchAll(.*)', ///ROUTE UTILIZADA PARA FAZER 'CATCH ALL'; pegar/capturar todas as urls inputtadas por seu user que NÃO FORAM CONTEMPLADAS PELAS DEMAIS ROUTES...
      components: {
        main: NotFound,
        // footer: UsersFooter,
      },
      // component: "" ///ao ser capturada essa route/catch-all, podemos OU RENDERIZAR 1 COMPONENT DE PÁGINA 404/500, OU ENTÃO REDIRECIONAR PARA A HOME PAGE, ETC...
      // redirect: ""
    },
  ], /////OPTION MAIS IMPORTANTE, SÃO AS DIFERENTES ROUTES QUE VC VAI QUERER TER NO SEU APP...

  history: createWebHistory(), /////'createWebHistory()' É O METHOD/OPÇÃO MAIS COMUM PARA __ SPAs....
  ///com isso, permitimos que seja usado o COMPORTAMENTO DEFAULT DE HISTORY DO BROWSER...
});

const app = createApp(App);

app.use(router);

app.mount('#app');

// A SEGUNDA PARTE IMPORTANTE

// É

// A KEY

// DE

// 2) 'HISTORY' -> ESSA KEY BASICAMENTE

// COMUNICA AO VUE ROUTER __

// A __ MANEIRA __ PELA QUAL ELE DEVERÁ HANDLAR A 'ROUTING HISTORY'

// NESSE APP (

//     quando 1 user

//     clica em algo,

// vai para outra page,

// ESSA PAGE
// NOVA

// É ADICIONADA

// À BROWSER HISTORY --> E, SE O USER CLICA NO BOTÃO DE 'BACK',

// A HISTORY VAI GARANTIR

// QUE

// O BROWSER

// VAI __ SACAr_ _'QUAL ERA A PAGE ANTERIOR' -->

// )

// HÁ DOIS TIPOS DE 'HISTORY'

// QUE VC PODE TER....

// --> NÓS QUEREMOS, NESSE CASO,

// IMPORTAR OUTRA FUNCTION

// LÁ DO VUE-ROUTER, QUE

// É

// 'createWebHistory'...

// O PROFESSOR EXPLICA:

// HISTORICAMENTE,
// O

// JAVASCRIPT NEM SEMPRE

// ERA CAPAZ DE MANIPULAR A MEMÓRIA

// DE 'EM QUE PAGE O USER ESTÁ, E DE ONDE ELE VEIO''' ---> PORTANTO,

// HISTORICAMENTE,

// O

// ROUTER TINHA QUE EMULAR ESSE _ BEHAVIOR,

// E __ POR ISSO NÃO USÁVAMOS

// O 'BUILT-IN BROWSER HISTORY' ------> MAS __ DE ALGUNS ANOS PARA CÁ,

// ISSO DEIXOU DE SER UM PROBLEMA,

// E É EXAMENTE POR ISSO QUE DEIXAMOS ESSA OPTION DE 'createWebHistory',

// PARA DIZER 'HEY, APENAS USE O MECANISMO BUILT-IN DE HISTORY

// DO BROWSER PARA SE LEMBRAR DE ONDE O USER VEIO E ETC'....

/////////////////

// --> OK...

// E É CLARO QUE A ORDEM

// __ IMPORTA_... -->

// SE VC

// TIVER ALGUMA

// ROUTE

// ESPECÍFICA,

// como

// '/teams/new',

// VC DEVE COLOCAR ESSA ROUTE ANTES DE '/:teamId',

// PQ

// SE VC N FIZER ISSO,

// O INPUT DE '/new',

// nessa parte aí,

// SERÁ TRATADO

// COMO 1 ':teamId'

// QUALQUER...

//////////EX:

// A ESCRITA DE 'alias'

// FAZ BASICAMENTE A MESMA COISA QUE

// O WRITE DE 1 ROUTE COM 'component',

// MAS A DIFERENÇA É QUE

// SUA OPTION É ESCRITA DENTRO DA PRÓPRIA ROUTE, TIPO ASSIM:

// --> DEVEMOS ESCREVER ASSIM:

// {
//      path:  '/teams', component: TeamsList, alias: '/'
// }

// ISSO SIGNIFICA QUE __ TANTO __ '/teams' como '/'

// __ VÃO ___ REDIRECIONAR A ESSE COMPONENT/PAGE....
