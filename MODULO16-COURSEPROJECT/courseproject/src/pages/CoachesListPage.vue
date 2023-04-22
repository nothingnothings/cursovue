<template>
  <div>
    <section class="coaches-filter">FILTER</section>
    <section class="coaches">
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
