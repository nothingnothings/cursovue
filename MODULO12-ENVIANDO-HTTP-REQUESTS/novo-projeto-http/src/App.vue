<template>
  <!-- <learning-survey @survey-submit="storeSurvey"></learning-survey>
  <user-experiences :results="savedSurveyResults"></user-experiences> -->


    <learning-survey></learning-survey>
  <user-experiences></user-experiences>
</template>

<script>
import LearningSurvey from './components/survey/LearningSurvey.vue';
import UserExperiences from './components/survey/UserExperiences.vue';

export default {
  name: 'App',
  components: {
    LearningSurvey,
    UserExperiences,
  },

  data() {
    return {
      savedSurveyResults: [],
    };
  },

  methods: {
    // storeSurvey(surveyData) {  /// deixaremos de fazer isso localmente, para fazer REMOTAMENTE, com o firebase e o component 'LearningSurvey.vue'....
    //   const surveyResult = {
    //     name: surveyData.userName,
    //     rating: surveyData.rating,
    //     id: new Date.toISOString() + Math.random().toString(),
    //   };
    //   console.log(surveyResult);
    //   this.savedSurveyResults.push(surveyResult);
    // },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
