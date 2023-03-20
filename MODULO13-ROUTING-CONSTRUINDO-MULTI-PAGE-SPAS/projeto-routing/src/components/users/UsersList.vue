<template>
  <div>
    <button @click="confirmInput()">Confirm</button>
    <ul>
      <user-item
        v-for="user in users"
        :key="user.id"
        :name="user.fullName"
        :role="user.role"
      ></user-item>
    </ul>
  </div>
</template>

<script>
import UserItem from './UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],

  methods: {
    confirmInput() {
      // DO SOMETHING, THEN NAVIGATE AWAY.

      // this.$router.go()  ///talvez assim?

      this.$router.push('/teams'); ////outra maneira de fazer isso...

      // this.$router.forward(); ////botões '<-' e '->' do navegador...
      // this.$router.back()
    },
  },



  beforeRouteEnter(to, from, next) { /////ALTERNATIVA A DEFINIR A NAV GUARD LÁ NO ROUTER (alternativa a 'beforeEnter', lá na sua route)...

    console.log(to, from)
    next();
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>