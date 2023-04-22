

<template>
  <div>
    <ul>
      <li v-for="request in requests" :key="request.id">
        <h1>{{ request.text }}</h1>
        <p>{{ request.email }}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["requests"]),
  },
};
</script>
<style scoped>
</style>