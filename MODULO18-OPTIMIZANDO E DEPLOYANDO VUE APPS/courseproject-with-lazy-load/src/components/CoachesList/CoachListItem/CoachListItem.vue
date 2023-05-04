<template>
  <li>
    <h3>{{ coach.firstName + " " + coach.lastName }}</h3>
    <h4>${{ coach.hourlyRate }}/hour</h4>
    <div class="expertise-areas">
      <base-badge v-for="area in coach.areas" :key="area"
      :title="area"
      :type="area"
        ><span>{{ area }}</span></base-badge
      >
    </div>
    <div class="actions">
      <base-button :link="true" :mode="'outline'" :to="contactCoachLink"
        >Contact</base-button
      >
      <base-button :link="true" :to="coachDetailLink">View Details</base-button>
    </div>
  </li>
</template>
    <script>
export default {
  props: ["coach"],

  computed: {
    coachDetailLink() {
      return {
        name: "coach-detail",
        params: {
          id: this.coach.id,
        },
      };
    },

    contactCoachLink() {
      return {
        name: "contact-coach",
        params: {
          id: this.coach.id,
        },
      };
    },
  },
};
</script>
<style scoped>
li {
  margin: 1rem 0;
  border: 1px solid #424242;
  border-radius: 12px;
  padding: 1rem;
}

h3 {
  font-size: 1.5rem;
}

h3,
h4 {
  margin: 0.5rem 0;
}

div {
  margin: 0.5rem 0;
}

.actions {
  display: flex;
  justify-content: flex-end;
}
</style>