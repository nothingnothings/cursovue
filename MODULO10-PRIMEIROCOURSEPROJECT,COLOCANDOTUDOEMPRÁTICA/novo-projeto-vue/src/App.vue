<template>
  <TheHeader :title="chosenHeader"></TheHeader>
  <base-button buttonText="Resource List" :disabled="this.chosenPage === 'resource-list'"
    @click="switchPage('resource-list')"></base-button>
  <base-button buttonText="Add a Resource" :disabled="this.chosenPage === 'add-resource'"
    @click="switchPage('add-resource')"></base-button>
  <AddResource v-if="chosenPage === 'add-resource'"></AddResource>
  <LearningResources :storedResources="storedResources" v-if="chosenPage === 'resource-list'"></LearningResources>

</template>

<script>

import LearningResources from './components/learning-resources/LearningResources.vue';
import AddResource from './components/AddResource/AddResource.vue';
import TheHeader from './components/Layout/TheHeader/TheHeader.vue';

export default {


  components: {
    LearningResources,
    TheHeader,
    AddResource
  },


  provide() {


    return {
      removeResource: this.removeResource,
      addResource: this.addResource
    }
  },



  data() {
    return {
      chosenPage: "resource-list",
      chosenHeader: "Vue Project",


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

    removeResource(id) {
      console.log("ENTERED", id);
      this.storedResources = this.storedResources.filter(
        (resource) => {
          return resource.id !== id
        }
      );
    },

    switchPage(chosenPage) {
      this.chosenPage = chosenPage
    },

    addResource(formData) {
      this.storedResources.push(
        {
          ...formData,
          id: Math.random().toString()
        }
      )

    }
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
