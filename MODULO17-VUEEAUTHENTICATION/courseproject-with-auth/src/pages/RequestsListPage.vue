<template>
  <section>
    <base-dialog
      :show="!!error"
      title="An error occurred!"
      @close="hideDialog()"
      ><p>{{ error }}</p></base-dialog
    >
    <base-card>
      <header>
        <h2>Requests Received</h2>
      </header>
      <loading-spinner v-if="requestsLoading"></loading-spinner>
      <RequestsList
        v-if="hasRequests && !requestsLoading"
        :requests="receivedRequests"
      ></RequestsList>
      <h3 v-if="!hasRequests && !requestsLoading">You haven't received any requests yet!</h3>
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
      error: null,
    };
  },

  mounted() {
    this.loadRequests()
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        this.error = err || "Something went wrong.";
      });
  },

  methods: {
    ...mapActions(["loadRequests"]),
    hideDialog() {
      this.error = null;
    },
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