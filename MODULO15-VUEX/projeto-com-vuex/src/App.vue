<template>
  <base-container title="Vuex">
    <!-- EXEMPLO DE UTILIZAÇÃO DO GLOBAL STORE DO VUEX... -->
    <!-- <h3>{{ $store.state.counter }}</h3> -->
    <TheCounter></TheCounter>
    <FavoriteValue></FavoriteValue>
    <button @click="addTwentyFive">Add 25</button>
    <ChangeCounter></ChangeCounter>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
  },

  methods: {
    addTwentyFive() {
      ///MANEIRA ERRADA/IMPRÓPRIA DE ATUALIZAR O STATE DO VUEX (sem mutations/actions)...
      // $store.state.counter + 11; ///example of a possible mistype/mistake on updating the state..

      //atualize seu state ASSIM:
      this.$store.commit("incrementCustom", 25); ///exemplo de USO DE MUTATION... (COM PAYLOAD, SEGUNDO PARÂMETRO)....
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>