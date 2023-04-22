<template lang="">

    <ul v-if="hasCoaches">
    <CoachListItem v-for="coach in coaches" 
    :key="coach.id" 
    :coach="coach" 
    :coachDetailLink="coachDetailLink">
    </CoachListItem> 
</ul>
<div v-else>
    No coaches were found.
    </div>
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
    ...mapGetters(["coaches", "hasCoaches"]),
  },

  methods: {
    ...mapActions(["loadCoaches"]),
  },
};
</script>
<style lang="">
</style>