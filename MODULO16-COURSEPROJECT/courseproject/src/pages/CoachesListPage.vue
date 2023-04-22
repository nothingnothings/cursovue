<template>
  <div>
    <section id="coaches-filter">FILTER</section>
    <section id="coaches-control">
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as Coach</router-link>
      </div>
    </section>
    <section id="coaches">
      <CoachesList
        :coaches="coaches"
        :coachDetailLink="coachDetailLink"
      ></CoachesList>
    </section>
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
