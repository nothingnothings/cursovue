<template>
  <RequestsList></RequestsList>
</template>
<script>
import { mapGetters } from "vuex";

import RequestsList from "../components/RequestsList/RequestsList.vue";
export default {
  components: {
    RequestsList,
  },
  computed: {
    ...mapGetters(["requests"]),
  },
};
</script>
<style scoped>
</style>