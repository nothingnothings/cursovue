<template>
  <section>
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <loading-spinner v-if="requestsLoading"></loading-spinner>
      <RequestsList
        v-if="hasRequests"
        :requests="receivedRequests"
      ></RequestsList>
      <h3 v-if="!hasRequests">You haven't received any requests yet!</h3>
    </base-card>
  </section>
</template>
<script>
// import { mapActions, mapGetters } from "vuex";

import { mapActions } from "vuex";
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
    // const requests = this.$store.getters["requests"];
    // this.requests = requests;
  },

  methods: {
    ...mapActions(["loadRequests"]),
  },

  computed: {
    receivedRequests() {
      return this.$store.getters["requests"];
    },

    hasRequests() {
      return this.$store.getters["hasRequests"];
    },

    requestsLoading() {
      return this.$store.getters["requestsLoading"];
    },
    // ...mapGetters("requests"),
  },
};
</script>
<style scoped>
header {
  text-align: center;
}

h3 {
  text-align: center;
}
</style>