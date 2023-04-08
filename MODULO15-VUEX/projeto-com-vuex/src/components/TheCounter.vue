<template>
  <!-- <h3>{{ counter }}</h3> -->
  <h3>{{ finalCounter }}</h3>
</template>


<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    // counter() {
    //sempre tente acessar seu store por meio de GETTERS, E NÃO DIRETAMENTE...
    //   return this.$store.state.counter;

    // SE DESEJAMOS ESCREVER MENOS CÓDIGO/TER UM SHORTCUT
    // AOS NOSSOS GETTERS, PODEMOS USAR
    // O METHOD DE 'mapGetters'...
    //   return this.$store.getters.finalCounter;

    // },

    ...mapGetters(["finalCounter"]), //shortcut ao call de getters manualmente, com 'mapGetters':
  },
};
</script>


<style scoped>
</style>