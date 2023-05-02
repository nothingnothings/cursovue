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
import TheHeader from "./components/layout/TheHeader/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },

  // mounted() {
  //   this.loadCoaches();
  // },
  methods: {
    // ...mapActions(["loadCoaches"]),
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
