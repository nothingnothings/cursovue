<template>
  <div>
    <h1>{{ loadedCoach.firstName }}</h1>
    <p>{{ loadedCoach.email }}</p>
    <p>{{ loadedCoach.expertise }}</p>
    <router-link :to="contactCoachLink">Contact Coach</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";

export default {
  data() {},

  created() {},

  methods: {
    ...mapActions(["loadCoach"]),
  },

  mounted() {
    this.loadCoach(this.loadedCoach.id);
  },
  computed: {
    ...mapGetters(["loadedCoach"]),

    contactCoachLink() {
      return {
        name: "contact-coach",
      };
    },
  },
};
</script>
<style lang="">
</style>