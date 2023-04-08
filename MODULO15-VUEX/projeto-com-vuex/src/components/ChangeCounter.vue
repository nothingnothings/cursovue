<template>
  <div>
    <button @click="increment">Add 1</button>
    <button @click="incrementCustom(25)">Add 25</button>
  </div>
</template>


<script>
import { mapActions } from "vuex";
export default {
  methods: {
    // addOne() {
    //não atualize o store de seu vuex assim... use MUTATIONS, COM 'this.$store.commit('mutationName')'
    //   this.$store.state.counter++;

    //   this.$store.commit("increment"); ///exemplo de USO DE MUTATION... (É QUASE A MANEIRA CORRETA...)

    //A MANEIRA MAIS CORRETA DE ATUALIZAR O STATE É __ CHAMAR 1 ACTION/DISPARAR UMA ACTION, QUE ENTÃO FAZ COM QUE 1 COMMIT SEJA EXECUTADO, QUE ENTÃO DISPARA A MUTATION E FAZ O STATE SER ALTERADO...

    //   PARA ABREVIAR/TER O ATALHO PARA ESSE METHOD, use 'mapActions'
    //   this.$store.dispatch("delayedIncrement");

    //   this.$store.commit({ //maneira ALTERNATIVA DE COMMITAR/CHAMAR 1 MUTATION...
    //     type: "incrementCustom",
    //     payload: 25,
    //   });
    // },

    ...mapActions(["increment", "incrementCustom"]), //shortcut ao call de ACTIONS manualmente, com 'mapActions':
  },
};
</script>
