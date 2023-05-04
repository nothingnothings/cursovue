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
<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  padding: 0;
  max-width: 30rem;
}
</style>