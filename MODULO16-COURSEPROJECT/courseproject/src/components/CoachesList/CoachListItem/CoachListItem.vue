<template>
  <li>
    <h1>{{ coach.firstName }}</h1>
    <p>{{ coach.description }}</p>
    <router-link :to="coachDetailLink">View Coach</router-link>
  </li>
</template>
    <script>
export default {
  props: ["coach"],

  computed: {
    coachDetailLink() {
      return {
        name: "coach-detail",
        params: {
          id: this.coach.id
        },
      };
    },
  },
};
</script>
    <style>
</style>