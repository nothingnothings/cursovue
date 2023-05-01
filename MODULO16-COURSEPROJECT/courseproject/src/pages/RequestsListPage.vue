<template>
  <RequestsList :requests="requests"></RequestsList>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import RequestsList from "../components/RequestsList/RequestsList.vue";
export default {
  components: {
    RequestsList,
  },

  data() {
    return {
      requests: [],
    };
  },

  mounted() {
    this.loadRequests();
    const requests = this.$store.getters["requests"];

    this.requests = requests;
  },

  methods: {
    ...mapActions(["loadRequests"]),
  },

  computed: {
    ...mapGetters("requests"),
  },
};
</script>
<style scoped>
</style>