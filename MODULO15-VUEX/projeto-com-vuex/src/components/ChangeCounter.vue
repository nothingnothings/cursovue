<template>
  <button @click="addOne">Add 1</button>
</template>


<script>
export default {
  methods: {
    addOne() {
      //não atualize o store de seu vuex assim... use MUTATIONS, COM 'this.$store.commit('mutationName')'
      //   this.$store.state.counter++;

      //   this.$store.commit("increment"); ///exemplo de USO DE MUTATION... (É QUASE A MANEIRA CORRETA...)

      //A MANEIRA MAIS CORRETA DE ATUALIZAR O STATE É __ CHAMAR 1 ACTION/DISPARAR UMA ACTION, QUE ENTÃO FAZ COM QUE 1 COMMIT SEJA EXECUTADO, QUE ENTÃO DISPARA A MUTATION E FAZ O STATE SER ALTERADO...

      this.$store.dispatch("delayedIncrement");

      //   this.$store.commit({ //maneira ALTERNATIVA DE COMMITAR/CHAMAR 1 MUTATION...
      //     type: "incrementCustom",
      //     payload: 25,
      //   });
    },
  },
};
</script>
