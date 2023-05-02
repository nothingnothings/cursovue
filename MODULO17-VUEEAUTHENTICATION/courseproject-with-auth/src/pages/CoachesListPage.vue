<template>
  <div>
    <!-- <section id="coaches-filter">FILTER</section> -->
    <!-- SERÁ RENDERIZADO ESSE DIALOG EM CASOS DE ERROR NO FETCH DE COACHES... -->
    <base-dialog :show="!!error" title="An error occurred!" @close="hideDialog()"
      ><p>{{ error }}</p></base-dialog
    >
    <CoachFilter
      @toggle-filter="
        (updatedFilters) => {
          setFilters(updatedFilters);
        }
      "
    ></CoachFilter>
    <base-card>
      <section id="coaches-control">
        <div class="controls">
          <base-button :mode="'outline'" @click="loadCoaches(true)"
            >Refresh</base-button
          >
          <!-- <base-button :link="true" :to="registerCoachLink" v-if="!isCoach"
            >Register as Coach</base-button
          > -->
          <base-button
            :link="true"
            :to="registerCoachLink"
            v-if="!isCoach && !coachesLoading"
            >Register as Coach</base-button
          >
        </div>
      </section>

      <section id="coaches">
        <loading-spinner v-if="coachesLoading"></loading-spinner>
        <CoachesList
          :filteredCoaches="filteredCoaches"
          v-if="!coachesLoading"
        ></CoachesList>
        <div v-if="!coachesLoading && filteredCoaches.length === 0">
          No coaches found.
        </div>
      </section>
    </base-card>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import CoachesList from "../components/CoachesList/CoachesList.vue";
import CoachFilter from "../components/CoachesList/CoachFilter/CoachFilter.vue";
export default {
  components: {
    CoachesList,
    CoachFilter,
  },

  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
      error: null,
    };
  },

  created() {
    this.loadCoaches(false)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        //o throw de error, lá no 'loadCoaches', vai ser CAPTURADO aqui, para que então aconteça o error handling LOCAL...
        console.log(err);
        this.error = err || "Something went wrong.";
      });
  },

  methods: {
    ...mapActions(["loadCoaches"]),
    setFilters(updatedFilters) {
      //esse argumento é recebido pelo emit de 'toggle-filter'

      this.activeFilters = updatedFilters;
    },

    hideDialog() {
      this.error = null;
    },
  },

  computed: {
    ...mapGetters(["isCoach"]),
    registerCoachLink() {
      return {
        name: "register-coach",
      };
    },

    filteredCoaches() {
      const allCoaches = this.$store.getters["coaches"];

      return allCoaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes("frontend")) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes("backend")) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes("career")) {
          return true;
        }
      });
    },

    coachesLoading() {
      console.log(
        this.$store.getters["coachesAreLoading"],
        "LOADINGSTATE DOS GURi"
      );
      return this.$store.getters["coachesAreLoading"];
    },
  },
};
</script>
<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
</style>
