<template>
  <section>
    <h2>{{ teamName }}</h2>
    <ul>
      <user-item
        v-for="member in loadedTeam.members"
        :key="member.id"
        :name="member.name"
        :role="member.role"
      ></user-item>
    </ul>
    <router-link to="/teams/2">Go To Team 2</router-link>
    <!-- PARA QUE ISSO FUNCIONE, PRECISAMOS DE 1 WATCHER, SENÃO NADA ACONTECERÁ quando clicamos nesse link... -->
  </section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
  // props: ['members'],
  data() {
    return {
      loadedTeam: null,
      teamName: '',
    };
  },

  // props: ['teamId'],  ////em vez de usar isso, use 'this.$route.params' (os PARAMETERS DO SEU ROUTER)...
  inject: ['teams', 'users'],
  components: {
    UserItem,
  },

  watch: {
    $route(newRoute) {
      ///usado para fazer WATCH em coisas como 'this.$route.params' (para que então CONSIGAMOS MUDAR ENTRE DIFERENTES 'ITEMS' representados por essa url dinâmica)
      const desiredTeam = this.teams.filter((team) => {
        console.log(this.$route.params.teamId, team.id);
        return +team.id === +this.$route.params.teamId;
      });

      console.log(desiredTeam, 'TEAM DOS GURI');

      this.loadedTeam = desiredTeam[0];
      this.teamName = desiredTeam[0].name;
    },
  },
  created() {
    console.log(this.$route); ////// É DIFERENTE DE 'this.$router', pq NOS DÁ ACESSO A DATA DA NOSSA PRÓPRIA ROUTE...
    console.log(this.$route.path); ////NOS DÁ ACESSO A 'ROUTE QUE FOI RESPONSÁVEL PELO CARREGAMENTO DESSA NOSSA PAGE'...

    console.log(this.$route.params); //NOS DÁ ACESSO A COISAS COMO 'teamId' (dynamic segment)...

    // console.log(this.$props, this.teams[this.teamId]);

    const desiredTeam = this.teams.filter((team) => {
      console.log(this.$route.params.teamId, team.id);
      return +team.id === +this.$route.params.teamId;
    });

    console.log(desiredTeam, 'TEAM DOS GURI');

    this.loadedTeam = desiredTeam[0];
    this.teamName = desiredTeam[0].name;
  },
  // data() {
  //   return {
  //     teamName: 'Test',
  //     // members: [
  //     //   { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
  //     //   { id: 'u2', fullName: 'Max Schwarz', role: 'Engineer' },
  //     // ],
  //   };
  // },
};
</script>

<style scoped>
section {
  margin: 2rem auto;
  max-width: 40rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  border-radius: 12px;
}

h2 {
  margin: 0.5rem 0;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>