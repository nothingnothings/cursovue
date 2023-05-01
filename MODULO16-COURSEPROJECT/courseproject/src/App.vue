<template>
  <div>
    <TheHeader></TheHeader>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import TheHeader from "./components/layout/TheHeader/TheHeader.vue";
export default {
  name: "App",
  components: {
    TheHeader,
  },

  mounted() {
    this.loadCoaches();
  },
  methods: {
    ...mapActions(["loadCoaches"]),
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
</style>
