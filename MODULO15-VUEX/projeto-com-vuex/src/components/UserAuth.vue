<template>
  <div>
    <button @click="login" v-if="!authenticated">Login</button>
    <button @click="logout" v-if="authenticated">Logout</button>
  </div>
</template>




<script>
import { mapActions, mapGetters } from "vuex";
export default {
  methods: {
    ...mapActions(["login", "logout"]),
  },

  computed: {
    ...mapGetters(["authenticated"]),
  },
};
</script>



<style scoped>
</style>