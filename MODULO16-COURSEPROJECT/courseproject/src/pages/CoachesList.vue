<template>
  <div>
    <li v-for="coach in coaches" :key="coach.id">
      <h1>{{ coach.name }}</h1>
      <p>{{ coach.email }}</p>
      <router-link :to="coachDetailLink">View Coach</router-link>
    </li>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  mounted() {
    this.loadCoaches();
  },
  computed: {
    ...mapGetters(["coaches"]),
    coachDetailLink() {
      return {
        name: "coach-detail",
        params: {
          id: this.team.id,
        },
      };
    },
  },

  methods: {
    ...mapActions(["loadCoaches"]),
  },
};
</script>
<style></style>
