<template>
  <h3>{{ counter }}</h3>
</template>


<script>
export default {
  computed: {
    counter() {
      return $store.state.counter;
    },
  },
};
</script>


<style scoped>
</style>