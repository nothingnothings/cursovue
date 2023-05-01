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

// import { mapGetters, mapActions } from "vuex";
export default {
  components: { RequestListItem },

  props: ["requests"],
};
</script>
<style>
</style>