<template>
  <ul>
    <RequestListItem
      v-for="request in requests"
      :key="request.id"
      :request="request"
    >
    </RequestListItem>
  </ul>
</template>
<script>
import RequestListItem from "./RequestListItem/RequestListItem.vue";

import { mapGetters, mapActions } from "vuex";
export default {
  components: { RequestListItem },

  mounted() {
    this.loadRequests();
  },

  methods: {
    ...mapActions(["loadRequests"]),
  },

  computed: {
    ...mapGetters("requests"),
  },
};
</script>
<style>
</style>