<template>

  <TheHeader :title="chosenHeader"></TheHeader>
  <!-- <base-button buttonText="Resource List" :disabled="this.chosenPage === 'resource-list'"
    @click="switchPage('resource-list')"></base-button>
  <base-button buttonText="Add a Resource" :disabled="this.chosenPage === 'add-resource'"
    @click="switchPage('add-resource')"></base-button> -->
  <!-- <AddResource v-if="chosenPage === 'add-resource'"></AddResource>
  <LearningResources :storedResources="storedResources" v-if="chosenPage === 'resource-list'"></LearningResources> -->

  <TheResources></TheResources>
</template>

<script>

// import LearningResources from './components/learning-resources/LearningResources.vue';
// import AddResource from './components/AddResource/AddResource.vue';
import TheHeader from './components/Layout/TheHeader/TheHeader.vue';
import TheResources from './components/TheResources/TheResources.vue';

export default {


  components: {
    // LearningResources,
    TheHeader,
    // AddResource,
    TheResources
  },


  provide() {


    return {
      removeResource: this.removeResource,
      addResource: this.addResource,
      // storedResources: this.storedResources
    }
  },



  data() {
    return {
      // chosenPage: "resource-list",
      chosenHeader: "Vue Project",

    }
  },


  methods: {

    // removeResource(id) {
    //   console.log("ENTERED", id, this.storedResources);
    //   this.storedResources = this.storedResources.filter(
    //     (resource) => {
    //       return resource.id !== id
    //     }
    //   );
    // },

    // switchPage(chosenPage) {
    //   this.chosenPage = chosenPage
    // },
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
