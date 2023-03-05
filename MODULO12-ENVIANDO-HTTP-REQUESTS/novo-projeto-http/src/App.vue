<template>
  <!-- <learning-survey @survey-submit="storeSurvey"></learning-survey>
  <user-experiences :results="savedSurveyResults"></user-experiences> -->

  <!-- <div>
  <learning-survey></learning-survey>
  <user-experiences
    :results="savedSurveyResults"
    @loadExperiencesHandler="loadExperiencesHandler"
  ></user-experiences>
  </div> -->

  <div>
    <learning-survey></learning-survey>
    <user-experiences
      :results="savedSurveyResults"
      :experiencesAreLoading="experiencesAreLoading"
    ></user-experiences>
  </div>
</template>

<script>
import LearningSurvey from "./components/survey/LearningSurvey.vue";
import UserExperiences from "./components/survey/UserExperiences.vue";

export default {
  name: "App",
  components: {
    LearningSurvey,
    UserExperiences,
  },

  data() {
    return {
      savedSurveyResults: [],
      experiencesAreLoading: false
    };
  },

  mounted() {
    this.loadExperiencesHandler();
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

    loadExperiencesHandler() {
               this.experiencesAreLoading = true;
      fetch(
        "https://vue-http-requests-81003-default-rtdb.firebaseio.com/surveys.json",
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => {
 
          if (res.ok) {
            const formattedResponse = res.json();
            console.log(formattedResponse);
            return formattedResponse;
            // this.savedSurveyResults = res.data;
          }
        })
        .then((experiences) => {
          console.log(experiences, "EXPERIENCES");

          const userExperiences = experiences;
          const experiencesArray = [];
          // this.savedSurveyResults = experiences;

          for (const experience in userExperiences) {
            experiencesArray.push({
              id: experience,
              name: experiences[experience].name,
              rating: experiences[experience].rating,
            });
          }

          this.savedSurveyResults = experiencesArray;
          this.experiencesAreLoading = false;

          console.log(this.savedSurveyResults, typeof this.savedSurveyResults);
        })
        .catch((err) => {
          console.log(err, "THE ERROR");
        });
    },
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
