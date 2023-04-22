<template>
  <div>
    <!-- <ul>
    <li v-for="coach in coaches" :key="coach.id">
      <h1>{{ coach.name }}</h1>
      <p>{{ coach.email }}</p>
      <router-link :to="coachDetailLink">View Coach</router-link>
    </li>
</ul> -->
    <CoachesList
      :coaches="coaches"
      :coachDetailLink="coachDetailLink"
    ></CoachesList>
  </div>
</template>
<script>
import CoachesList from "../components/CoachesList/CoachesList.vue";
export default {
  components: {
    CoachesList,
  },
};
</script>
<style></style>
