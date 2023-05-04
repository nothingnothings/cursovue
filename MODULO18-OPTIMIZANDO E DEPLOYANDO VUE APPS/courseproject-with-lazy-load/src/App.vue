<template>
  <div>
    <TheHeader></TheHeader>
    <router-view v-slot="slotProps">
      <transition name="router" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
import { mapActions, mapGetters } from "vuex";
import TheHeader from "./components/layout/TheHeader/TheHeader.vue";
export default {
  name: "App",

  created() {
    this.tryAutoLogin(); //é o 'autoAuthAttempt' que já escrevi no react, praticamente...
  },
  components: {
    TheHeader,
  },

  watch: {
    //usamos  watch, aqui, para REDIRECIONAR O USER EM CASOS DE 'O TEMPO DA AUTH TOKEN ACABOU, REDIRECIONANDO PARA PAGE SEM RESTRIÇAÕ DE ACESSO'...

    didAutoLogout(newValue, oldValue) {
      if (newValue && newValue !== oldValue) {
        // se o newValue for 'true', e se o value de 'newValue' não for igual a 'oldValue', ocorreu o autoLogout...

        this.$router.replace("/coaches");
      }
    },
  },

  // mounted() {
  //   this.loadCoaches();
  // },
  methods: {
    // ...mapActions(["loadCoaches"]),
    ...mapActions(["tryAutoLogin"]),
  },

  computed: {
    ...mapGetters(["didAutoLogout"]),
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Roboto", sans-serif;
}

body {
  margin: 0;
}

.router-enter-active,
.router-leave-active {
  transition: all 0.3s ease-out;
}

.router-enter-from,
.router-leave-to {
  opacity: 0;
}

.router-enter-to,
.router-leave-from {
  opacity: 1;
}
</style>
