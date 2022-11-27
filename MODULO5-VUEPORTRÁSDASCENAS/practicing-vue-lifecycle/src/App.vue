<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import { appendFile } from 'fs';
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },

  beforeCreate() {
    console.log('created()');
  },

  created() {
    console.log('created()');
  },

  beforeMount() {
    console.log('beforeMount()')
  },
  mounted() {
    console.log('mounted()')
  },

  beforeUpdate() {
    console.log('beforeUpdate()')
  },

  updated() {
    console.log("updated()")
  },
  /////ESSES NÃO SERÃO EXECUTADOS, pq ainda não temos nenhuma maneira de 'umount' nossos apps/components...
  beforeUnmount() {
    console.log('beforeUnmount()')
  },

  unmounted() {
    console.log('unmounted()')
  },

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



