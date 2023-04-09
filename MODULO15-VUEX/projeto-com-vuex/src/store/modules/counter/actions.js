export default {
  delayedIncrement(context) {
    //TODO ---  ACTIONS SÃO CAPAZES DE RODAR CÓDIGO ASYNC
    setTimeout(
      () => {
        context.commit('increment');

        // context.dispatch --> para dispatchar OUTRAS ACTIONS, de dentro de sua action
        // context.getters ---> para GANHAR ACESSO AOS DERIVED VALUES DE OUTROS GETTERS
        // context.state --> PARA GANHAR ACESSO AO VALUE DE SEU STATE (sem o mutar diretamente)...
      },

      2000
    );
  },

  increment(context) {
    // ! PODEMOS USAR O MESMO NOME PARA 1 PAR 'MUTATION-ACTION' (como visto com 'increment')...

    //o parâmetro de 'context' contém várias coisas essenciais, como o method de 'commit()', usado para COMMITAR MUTATIONS...

    context.commit('increment'); //commita 1 mutation...
  },

  incrementCustom(context, payload, rootState, rootGetters) {
    // ? rootState e rootGetters são usados QUANDO QUEREMOS GANHAR ACESSO A 1 STATE QUE EXISTE EM OUTRO MODULE de nossa store (mesma coisa com o 'rootGetters')....
    // context.commit('incrementCustom', 25); //25 seria o PAYLOAD da mutation, NESSE CASO...
    context.commit('incrementCustom', payload); //25 seria o PAYLOAD da mutation, NESSE CASO...
  },
};
