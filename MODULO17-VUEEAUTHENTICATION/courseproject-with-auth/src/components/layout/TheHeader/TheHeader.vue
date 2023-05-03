<template>
  <header>
    <nav>
      <h1><router-link to="/">Find a Coach</router-link></h1>
      <ul>
        <li v-for="link in links" :key="link.name">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
        <li v-if="token">
          <router-link to="/requests">Requests</router-link>
        </li>
        <li v-if="!token">
          <router-link to="/auth">Auth</router-link>
        </li>
        <li v-if="token">
          <base-button :mode="'outline flat'" style="color: white;" :link="false" @click="handleLogout()"
            >Logout</base-button
          >
        </li>
      </ul>
    </nav>
  </header>
</template>
<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      links: [
        {
          path: "/coaches",
          name: "All Coaches",
        },
        // {
        //   path: "/requests",
        //   name: "Requests",
        // },
      ],
    };
  },

  computed: {
    ...mapGetters(["token"]),
  },

  methods: {
    ...mapActions(["logout"]),

    handleLogout() {
      this.logout();
      this.$router.replace("/auth");
    },
  },
};
</script>
<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>