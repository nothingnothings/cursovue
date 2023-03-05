<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <!-- <base-button @click="loadExperiences()"
          >Load Submitted Experiences</base-button> -->
      </div>
      <ul>
      <!-- LOADING -->
        <div v-if="experiencesAreLoading">Loading...</div>
        <!-- ERROR HANDLING-->
        <p v-if="!experiencesAreLoading && error">{{ error }}</p>
        <!-- NO DATA FOUND-->
        <p v-if="!experiencesAreLoading && results.length === 0">
          No Experiences Were Found
        </p>
        <!-- DATA FOUND -->
        <survey-result
          v-else-if="!experiencesAreLoading && results.length > 0"
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        >
        </survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from "../survey/SurveyResult";
export default {
  // props: ['results'],
  // props: ['results', 'loadExperiencesHandler'],
  props: ["results", "experiencesAreLoading"],

  components: {
    SurveyResult,
  },

  methods: {
    // loadExperiences() {
    //   console.log("ENTERED");
    //   this.$emit('loadExperiencesHandler');
    // },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
