<template>
  <the-header></the-header>
  <badge-list></badge-list>
  <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role">

  </user-info>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';



export default {

  components: {

    // 'the-header': TheHeader  /////É __ ASSIM_ QUE REGISTRAMOS UM COMPONENT DE FORMA 'LOCAL' (poderá ser usado o 'the-header' APENAS NO CONTEXTO DE APP.VUE... dentro do seu template)...
    TheHeader, ////SINTAXE SUPERIOR/MODERNA/MAIS RÁPIDA (e que te permite escrever tanto '<the-header></the-header>' como '<TheHeader>')
    BadgeList,
    UserInfo
  },
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
