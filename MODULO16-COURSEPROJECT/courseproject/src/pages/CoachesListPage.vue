<template>
  <div>
    <!-- <section id="coaches-filter">FILTER</section> -->
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
          <base-button :mode="'outline'">Refresh</base-button>
          <base-button :link="true" :to="registerCoachLink" v-if="!isCoach"
            >Register as Coach</base-button
          >
        </div>
      </section>
      <section id="coaches">
        <CoachesList :filteredCoaches="filteredCoaches"></CoachesList>
      </section>
    </base-card>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
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
    };
  },

  methods: {
    setFilters(updatedFilters) {
      //esse argumento é recebido pelo emit de 'toggle-filter'

      this.activeFilters = updatedFilters;
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

      console.log(allCoaches, "ALL COACHES DOS GURI");
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
  },
};
</script>
<style scoped>
.controls {
  display: flex;
  justify-content: space-between;
}
</style>
