<template>

  <ul>
    <li v-for="resource in storedResources">

    </li>
  </ul>
</template>

<script>

import ResourceItem from '../src/components/ResourceItem/ResourceItem'

export default {


  components: [
    ResourceItem
  ],

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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
