<template lang="">

    <ul>
    <CoachListItem v-for="coach in coaches" 
    :key="coach.id" 
    :coach="coach" 
    :coachDetailLink="coachDetailLink">
    </CoachListItem>
</ul>
</template>
<script>
import CoachListItem from "../../components/CoachesList/CoachListItem/CoachListItem.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  mounted() {
    this.loadCoaches();
  },
  components: {
    CoachListItem,
  },
  computed: {
    ...mapGetters(["coaches"]),
    coachDetailLink() {
      return {
        name: "coach-detail",
        params: {
          id: this.team.id,
        },
      };
    },
  },

  methods: {
    ...mapActions(["loadCoaches"]),
  },
};
</script>
<style lang="">
</style>