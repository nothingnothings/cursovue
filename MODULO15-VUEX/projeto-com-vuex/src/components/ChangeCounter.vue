<template>
  <button @click="addOne">Add 1</button>
</template>


<script>
export default {
  methods: {
    addOne() {
      //não atualize o store de seu vuex assim... use MUTATIONS, COM 'this.$store.commit('mutationName')'
      //   this.$store.state.counter++;

      this.$store.commit("increment"); ///exemplo de USO DE MUTATION...
    },
  },
};
</script>
