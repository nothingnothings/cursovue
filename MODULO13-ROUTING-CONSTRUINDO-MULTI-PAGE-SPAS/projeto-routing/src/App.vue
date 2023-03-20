<template>
  <div>
    <the-navigation @set-page="setActivePage"></the-navigation>
    <main>
      <!-- SEM ROUTING -->
      <!-- <component :is="activePage"></component> -->
      <!-- COM ROUTING -->
      <router-view name="main"></router-view>
    </main>
    <footer>
      <router-view name="footer"></router-view>
    </footer>
  </div>
</template>

<script>
// import TeamsList from './components/teams/TeamsList.vue';
// import UsersList from './components/users/UsersList.vue';
import TheNavigation from './components/nav/TheNavigation.vue';

export default {
  components: {
    TheNavigation,
    // TeamsList,
    // UsersList,
  },
  data() {
    return {
      activePage: 'teams-list',
      teams: [
        {
          id: 1,
          name: 'Frontend Engineers',
          members: [
            {
              id: 1,
              name: 'Max',
              role: 'Dev',
            },
            {
              id: 2,
              name: 'Manu',
              role: 'A dude',
            },
          ],
        },
        {
          id: 2,
          name: 'Backend Engineers',
          members: [
            {
              id: 3,
              name: 'Martha',
              role: 'Prof',
            },
            {
              id: 4,
              name: 'Mario',
              role: 'Consultant',
            },
            {
              id: 5,
              name: 'Julie',
              role: 'Doctor',
            },
          ],
        },
        { id: 3, name: 'Client Consulting', members: ['u4', 'u5'] },
      ],
      users: [
        { id: 'u1', fullName: 'Max Schwarz', role: 'Engineer' },
        { id: 'u2', fullName: 'Praveen Kumar', role: 'Engineer' },
        { id: 'u3', fullName: 'Julie Jones', role: 'Engineer' },
        { id: 'u4', fullName: 'Alex Blackfield', role: 'Consultant' },
        { id: 'u5', fullName: 'Marie Smith', role: 'Consultant' },
      ],
    };
  },
  provide() {
    return {
      teams: this.teams,
      users: this.users,
    };
  },
  methods: {
    // setActivePage(page) {
    //   this.activePage = page;
    // },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>



