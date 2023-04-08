<template>
  <base-container title="Vuex">
    <!-- EXEMPLO DE UTILIZAÇÃO DO GLOBAL STORE DO VUEX... -->
    <!-- <h3>{{ $store.state.counter }}</h3> -->
    <TheCounter></TheCounter>
    <button>Add 1</button>
  </base-container>
</template>

<script>
import BaseContainer from "./components/BaseContainer.vue";
import TheCounter from "./components/TheCounter.vue";

export default {
  components: {
    BaseContainer,
    TheCounter
  },

  methods: {
    addOne() {
      $store.state.counter++;
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