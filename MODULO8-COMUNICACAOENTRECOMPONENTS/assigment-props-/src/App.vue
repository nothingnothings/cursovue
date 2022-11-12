<template>

  <section id="app">
    <active-user :name="user.name" :age="user.age"></active-user>
    <user-data @add-user-data="addUser"></user-data>
  </section>
</template>

<script>
import ActiveUser from './components/ActiveUser.vue';
import UserData from './components/UserData.vue';

export default {
  name: 'App',
  components: {
    ActiveUser,
    UserData
  },
  data() {

    return {
      user: {
        name: 'EXEMPLO',
        age: 24
      }
    }
  },

  methods: {

    addUser(data) {
      this.user = data;
    }
  }


}
</script>

<style>
html {
  font-family: sans-serif;
}

section {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
}
</style>
