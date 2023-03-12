import { createApp } from 'vue';

import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import TeamsList from './components/teams/TeamsList.vue';
import UsersList from './components/users/UsersList.vue';

const router = createRouter({
  linkActiveClass: 'active',  ///com essas 2 options, podemos mudar o NOME DA CSS CLASS DE 'active' QUE APARECE NAS NOSSAS ANCHOR TAGS, quando estamos em 1 determinado link (routing, etc)...
  linkExactActiveClass: 'exact-active',
  routes: [
    {
      path: '/teams',
      component: TeamsList,
    },

    {
      path: '/users',
      component: UsersList,
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
