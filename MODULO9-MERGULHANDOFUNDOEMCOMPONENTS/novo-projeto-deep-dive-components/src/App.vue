<template>
  <the-header></the-header>
  <badge-list></badge-list>
  <user-info
  :full-name="activeUser.name"
  :info-text="activeUser.description"
  :role="activeUser.role"
  >

  </user-info>
</template>

<script>


export default {  

    components: ['the-header', 'badge-list', 'user-info'],

    data() {
      return {
        activeUser: {
          name: 'Max Schwarz',
          description: 'Site owner and admin',
          role: 'admin'
        }
      }
    }


}
</script>

<style>
  html {
    font-family: sans-serif;
  }
  body {
    margin: 0;
  }
</style>
