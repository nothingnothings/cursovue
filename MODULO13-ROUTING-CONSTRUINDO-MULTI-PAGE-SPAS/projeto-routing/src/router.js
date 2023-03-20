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
      meta: {
        ///podemos definir QUALQUER DATA QUE DESEJARMOS, DENTRO DESSa propriedade 'meta'...
        needsAuth: true, /// os values definidos dentro de 'meta' podem ser acessados com o object de 'this.$route.xxxx'... (dentro de seus components e dentro dos objects 'to' e 'from', nos seus HOOKS)
      }, //// META É CRUCIAL, PQ PODE SER USADO PARA SETTAR 1 GLOBAL NAVIGATION GUARD QUE FAZ DIFERENTES COISAS, A DEPENDER DA 'METADATA' QUE VC ANEXOU A 1 ROUTE...

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

      //beforeEach(()=>{}) -> beforeEnter(()=>{}) -> beforeRouteEnter(()=>{})

      // (GLOBAL)      (ROUTE-SPECIFIC)   (COMPONENT-LEVEL)
      beforeEnter(to, from, next) {
        ////é exatamente a mesma coisa que 'beforeEach', mas COM ESSA ROUTE ESPECÍIFCA (acesso do user a essa route vai ser BLOQUEADO/PERMITIDO, A DEPENDER DE SUA SITUAÇÃO NO APP)...
        ///a alternativa a rodar os CHECKS de auth guards no ROUTER __ É __ RODAR ESSAS COISAS DIRETAMENTE NOS COMPONENTS, como em 'UsersList', dentro dos lifecycle methods... (com o lifecycle hook de 'beforeRouteEnter()'...)
        console.log(to, from);

        next();
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

  scrollBehavior(to, from, savedPosition) {
    ///usamos isso para 'SCROLLAR PARA CIMA', quando existir ALGUMA TROCA DE ROTA, AUTOMATICAMENTE...

    //'to' e 'from' são ROUTE OBJECTS... (basicamente a mesma coisa que vc recebe com 'this.$route')...
    /// 'savedPosition' será a POSIÇÃO QUE O USER TEVE, ANTES DE CLICAR NO BUTTON DE 'back', no browser (é um object tipo '{left: 212, top: 21}' )

    if (savedPosition) {
      ///com esse if check, VOLTAMOS PRECISAMENTE AO LOCAL EM QUE O USER ESTAVA, ANTES DE ELE TROCAR DE PÁGINA...( melhor dos 2 mundos)...
      return savedPosition;
    }

    return {
      ///scrollBehavior DEVE SEMPRE RETORNAR 1 OBJECT COM 'top' e 'left'...
      //com isso, definimos que QUEREMOS QUE O APP SCROLLE PARA O TOPO, SEMPRE QUE A PAGE FOR ALTERADA...
      top: 0,
      left: 0,
    };
  },
});

router.beforeEach(
  //já se seu intuito é colocar 1 NAV GUARD EM 1 ROUTE ESPECÍFICA, USE a propriedade 'beforeEnter', na route específica.... (como visto em '/users')...
  ///usado com AUTH GUARDS E NAV GUARDS.... --> a function passada a esse method é chamada TODA VEZ QUE ALGUMA NAVIGATION ACTION OCORRE, NO NOSSO APP...
  (to, from, next) => {
    console.log('GLOBAL FOR EACH');
    console.log(to, from, 'SÃO ROUTE OBJECTS');
    console.log(
      'NEXT É A FUNCTION QUE DEVEMOS CHAMAR PARA OU CONFIRMAR, OU CANCELAR ESSA NAVIGATION ACTION '
    );

    if (to.meta.needsAuth) {
      //exemplo de uso de 'metadata'...
      console.log(
        'CHECK IF USER IS AUTHENTICATED, THEN RETURN next(false) or next(true)'
      );
      // next(false)
    }

    next(); // ou 'next(true)' --> ambas as formas vão PERMITIR a navigation...
    // next(false); //NEXT(FALSE) VAI __ BLOQUEAR_ A NAVIGATION...

    /// next('pathComoString') ///ISSO VAI REDIRECIONAR O USER, SE VC DEIXAR ESSA STRING/URL como parâmetro de 'next'...

    /////next({name: 'team-members', params: { teamId: 't2' }}) /////ISSO TAMBÉM VAI REDIRECIONAR O USER, usar 1 'location object'...
  }
);

router.afterEach(
  ///ESSE HOOK SÓ É EXECUTADO __ aPÓS UMA 'NAVIGATION ACTION' ter sido confirmada (por isso não temos o parâmetro 'next()', justamente pq esse hook/guard não bloqueia nada, só modifica o 'pós-guard' da navigation)
  //// um bom uso para esse hook é o send de ANALYTICS DATA AO SEU PRÓPRIO SERVER, POR EXEMPLO.
  (to, from) => {
    console.log('global afterEach');
  }
);

export default router;

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
