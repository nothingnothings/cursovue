export default {
    // ? ACTIONS, POR SUA VEZ, SÃO REALMENTE CAPAZES DE RODAR CÓDIGO ASYNC (ao contrário de MUTATIONS, QUE SÓ EXECUTAM CÓDIGO SYNC NO STATE, atualizam o state de forma SYNC)....

    // increment(context) {
    // ! PODEMOS USAR O MESMO NOME PARA 1 PAR 'MUTATION-ACTION' (como visto com 'increment')...

    //o parâmetro de 'context' contém várias coisas essenciais, como o method de 'commit()', usado para COMMITAR MUTATIONS...

    // context.commit('increment'); //commita 1 mutation...
    // },

    // incrementCustom(context, payload) {
    // context.commit('incrementCustom', 25); //25 seria o PAYLOAD da mutation, NESSE CASO...
    // context.commit('incrementCustom', payload); //25 seria o PAYLOAD da mutation, NESSE CASO...
    // },

    // delayedIncrement(context) {
    //TODO ---  ACTIONS SÃO CAPAZES DE RODAR CÓDIGO ASYNC
    // setTimeout(
    //   () => {
    //     context.commit('increment');

    // context.dispatch --> para dispatchar OUTRAS ACTIONS, de dentro de sua action
    // context.getters ---> para GANHAR ACESSO AOS DERIVED VALUES DE OUTROS GETTERS
    // context.state --> PARA GANHAR ACESSO AO VALUE DE SEU STATE (sem o mutar diretamente)...
    //     },

    //     2000
    //   );
    // },

    login(context) {
      context.commit('login');
    },

    logout(context) {
      context.commit('logout');
    },
  }