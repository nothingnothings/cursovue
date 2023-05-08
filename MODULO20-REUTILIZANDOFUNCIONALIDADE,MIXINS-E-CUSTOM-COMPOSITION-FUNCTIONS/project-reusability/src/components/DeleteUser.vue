<template>
  <!-- <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert"> -->
  <user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
import UserAlert from './UserAlert.vue';
import alertMixin from '../mixins/alert';

export default {
  components: {
    UserAlert,
  },
  // data() {
  //   return {
  //     alertIsVisible: false,
  //   };
  // },
  // methods: {
  //   showAlert() {
  //     this.alertIsVisible = true;
  //   },
  //   hideAlert() {
  //     this.alertIsVisible = false;
  //   },
  // },

  data() {
    return {
      alertTitle: 'Delete User?', ///exemplo de COMO MISTURAR DATA DE SEUS COMPONENTS COM OS MIXINS (lógica compartilhada, vinda do lado de fora do component)...
      // alertIsVisible: true, // se existe 1 CLASH entre 1 propriedade declarada no  seu mixin E DECLARADA NO SEU LOCAL COMPONENT (mesma propriedade, values diferentes), A PROPRIEDADE QUE GANHA É _ A __ DO 'LOCAL COMPONENT'..
    };
  },

  mixins: [alertMixin],
};
</script>