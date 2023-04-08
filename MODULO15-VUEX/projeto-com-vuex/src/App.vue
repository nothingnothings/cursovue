<template>
  <div>
    <base-container v-if="authenticated" title="Vuex">
      <!-- EXEMPLO DE UTILIZAÇÃO DO GLOBAL STORE DO VUEX... -->
      <!-- <h3>{{ $store.state.counter }}</h3> -->
      <TheCounter></TheCounter>
      <FavoriteValue></FavoriteValue>
      <button @click="addTwentyFive">Add 25</button>
      <ChangeCounter></ChangeCounter>
    </base-container>
    <base-container title="Auth">
      <UserAuth></UserAuth>
    </base-container>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";
import ChangeCounter from "./components/ChangeCounter.vue";
import FavoriteValue from "./components/FavoriteValue.vue";
import UserAuth from "./components/UserAuth.vue";

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavoriteValue,
    UserAuth,
  },

  methods: {
    addTwentyFive() {
      ///MANEIRA ERRADA/IMPRÓPRIA DE ATUALIZAR O STATE DO VUEX (sem mutations/actions)...
      // $store.state.counter + 11; ///example of a possible mistype/mistake on updating the state..

      //MANEIRA __ QUASE_ APROPRIADA DE ATUALIZAR O STATE:
      // this.$store.commit("incrementCustom", 25); ///exemplo de USO DE MUTATION... (COM PAYLOAD, SEGUNDO PARÂMETRO)....

      //TODO --- MANEIRA MAIS CORRETA DE ATUALIZAR SEU STATE (com o uso DO DISPATCH DE ACTIONS)...
      this.$store.dispatch("incrementCustom", 25);
    },
  },

  computed: {
    ...mapGetters(['authenticated']),
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