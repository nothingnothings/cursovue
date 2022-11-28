<template>
  <the-header></the-header>
  <badge-list></badge-list>
  <user-info :full-name="activeUser.name" :info-text="activeUser.description" :role="activeUser.role">

  </user-info>
  <course-goals>
    <template #default="slotProps">
      <h2>{{ slotProps.goal }}</h2>
      <h2>{{ slotProps['another-goal'] }}</h2>
    </template>
  </course-goals>
  <button @click="setSelectedComponent('active-goals')">Active Goals></button>
  <button @click="setSelectedComponent('manage-goals')">Manage Goals></button>


  <!-- maneira tradicional de escrever components e sua renderização no vue (sem dynamic components) -->
  <!-- <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals>
  <active-goals v-if="selectedComponent === 'active-goals'"></active-goals> -->

  <!-- MANEIRA MAIS MODERNA DE ESCREVER A MESMA COISA: -->
  <!-- <component is="active-goals"></component> -->


  <!-- USAMOS O PROP 'is' para COMUNICAR __ QUAL__ DOS NOSSOS COMPONENTS QUEREMOS RENDERIZAR NO LUGAR DESSE 'PLACEHOLDER'-->

  <component :is="selectedComponent"></component>


  <!-- MANEIRA ALTERNATIVA/COMPORTAMENTO ALTERNATIVO DE 'COMPONENT', usando o wrapper de 'keep-alive': ele MANTÉM nosso component vivo no DOM, o que signfiica que NÃO VAMOS PERDER A INFO ENFIADA NO NOSSO COMPONENT DINÂMICO, QUANDO ELE FOR 'REMOVIDO' DO DOM... (contrário do comportamento normal de 'component', que perde essas info/state)-->
  <keep-alive>
    <component :is="componentId">
    </component>
  </keep-alive>
</template>

<script>
import TheHeader from './components/TheHeader.vue';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo.vue';
import CourseGoals from './components/CourseGoals.vue';
// import ActiveGoals from './components/ActiveGoals.vue';
// import ManageGoals from './components/ManageGoals.vue';



export default {

  components: {

    // 'the-header': TheHeader  /////É __ ASSIM_ QUE REGISTRAMOS UM COMPONENT DE FORMA 'LOCAL' (poderá ser usado o 'the-header' APENAS NO CONTEXTO DE APP.VUE... dentro do seu template)...
    TheHeader, ////SINTAXE SUPERIOR/MODERNA/MAIS RÁPIDA (e que te permite escrever tanto '<the-header></the-header>' como '<TheHeader>')
    BadgeList,
    UserInfo,
    CourseGoals,
    //PROFESSOR VAI NOS MOSTRAR UMA MANEIRA ALTERNATIVA DE ESCREVER ISSO... com os 'dynamic components'...
    // ActiveGoals,
    // ManageGoals
  },
  data() {
    return {
      selectedComponent: 'active-goals',
      activeUser: {
        name: 'Max Schwarz',
        description: 'Site owner and admin',
        role: 'admin'
      }
    }
  },


  methods: {
    setSelectedComponent(component) {
      this.selectedComponent = component
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
