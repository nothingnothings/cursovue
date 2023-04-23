<template>
  <li>
    <h3>{{ coach.firstName }}</h3>
    <h4>{{ coach.description }}</h4>
    <p>{{ coach.hourlyRate }}</p>
    <div class="expertise-areas">
      <span v-for="area in coach.areas" :key="area">{{ area }}</span>
    </div>
    <div class="actions">
      <router-link :to="coachDetailLink">View Coach</router-link>
      <router-link :to="contactCoachLink">Contact this Coach</router-link>
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