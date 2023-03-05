<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <!-- <base-button @click="loadExperiences()"
          >Load Submitted Experiences</base-button> -->
      </div>
      <ul>
        <survey-result
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
  props: ["results"],

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
