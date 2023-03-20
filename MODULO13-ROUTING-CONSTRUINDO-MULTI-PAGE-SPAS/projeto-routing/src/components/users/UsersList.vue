<template>
  <div>
    <button @click="confirmInput()">Confirm</button>
    <button @click="saveChanges()">Save Changes</button>
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
  data() {
    return { changesSaved: false };
  },

  components: {
    UserItem,
  },
  inject: ['users'],

  methods: {
    confirmInput() {
      // DO SOMETHING, THEN NAVIGATE AWAY (método criado por mim)

      // this.$router.go()  ///talvez assim?

      this.$router.push('/teams'); ////outra maneira de fazer isso...

      // this.$router.forward(); ////botões '<-' e '->' do navegador...
      // this.$router.back()
    },

    saveChanges() {
      //usado para demonstrar o funcionamento de 'beforeRouteLeave()' (que é usado para fazer avisos em forms como 'sua data ainda não foi salva, certeza de quer sair dessa página?')
      this.changesSaved = true;
    },
  },

  beforeRouteEnter(to, from, next) {
    /////ALTERNATIVA A DEFINIR A NAV GUARD LÁ NO ROUTER (alternativa a 'beforeEnter', lá na sua route)...

    console.log(to, from);
    next();
  },

  beforeRouteLeave(to, from, next) {
    ///é chamado ANTES DE TODAS AS OUTRAS ROUTES ( ou seja, antes de 'beforeEach', antes de 'beforeEnter', e antes de 'beforeRouteEnter()'..)

    console.log('Users List cmp beforeRouteLeave');
    console.log(to, from);

    if (this.changesSaved) {
      next();
    } else {
      const userAnswer = confirm('Are you sure? You got unsaved changes!'); ///retorna 'true' ou 'false', a depender do 'SIM ' ou 'NÃO' do user...

      next(userAnswer); ///yes = true, no = false --> next(true) ou next(false) (bloqueia a navigation)...
    }
  },

  unmounted() {
    ////ESSE CÓDIGO RODARÁ SEMPRE QUE __ O COMPONENT/PÁGINA SAIR DE NOSSA TELA...

    console.log('component/page left the screen');
  },
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
