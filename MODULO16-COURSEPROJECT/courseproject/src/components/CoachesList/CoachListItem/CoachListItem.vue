<template>
  <li>
    <h1>{{ coach.name }}</h1>
    <p>{{ coach.email }}</p>
    <router-link :to="coachDetailLink">View Coach</router-link>
  </li>
</template>
    <script>
export default {
  props: ["coach", "coachDetailLink"],
};
</script>
    <style>
</style>