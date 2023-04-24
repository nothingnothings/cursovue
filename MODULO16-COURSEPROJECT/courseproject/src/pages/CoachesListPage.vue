<template>
  <div>
    <section id="coaches-filter">FILTER</section>
    <base-card>
      <section id="coaches-control">
        <div class="controls">
          <base-button :mode="'outline'">Refresh</base-button>
          <base-button link :to="'/register'"
            >Register as Coach</base-button
          >
        </div>
      </section>
      <section id="coaches">
        <CoachesList></CoachesList>
      </section>
    </base-card>
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
<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
</style>
