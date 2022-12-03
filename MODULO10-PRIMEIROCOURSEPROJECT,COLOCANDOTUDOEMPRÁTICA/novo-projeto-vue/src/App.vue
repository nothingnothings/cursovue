<template>
  <TheHeader></TheHeader>
  <LearningResources :storedResources="storedResources"></LearningResources>

</template>

<script>

import LearningResources from './components/learning-resources/LearningResources.vue';
import TheHeader from './components/Layout/TheHeader/TheHeader.vue';

export default {


  components: {
    LearningResources,
    TheHeader
  },

  data() {
    return {

      storedResources: [

        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The official VueJS documentation.',
          link: 'https://vuejs.org'
        },

        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google...',
          link: 'https://google.com'
        }

      ]
    }
  },


  methods: {

  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
}
</style>
