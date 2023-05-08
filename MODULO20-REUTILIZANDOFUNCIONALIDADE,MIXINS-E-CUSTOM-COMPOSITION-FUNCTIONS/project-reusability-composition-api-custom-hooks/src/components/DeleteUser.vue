<template>
  <!-- <user-alert v-if="alertIsVisible" title="Delete the User?" @close="hideAlert"> -->
    <user-alert v-if="alertIsVisible" :title="titleAlert" @close="hideAlert"></user-alert>
    <p>Do you want to continue with deleting a user?</p>
  </user-alert>
  <section>
    <h2>Delete a User</h2>
    <button @click="showAlert">Delete User</button>
  </section>
</template>

<script>
// import { ref } from 'vue';
import UserAlert from './UserAlert.vue';
import { useAlert } from '../hooks/alert';

export default {
  components: {
    UserAlert,
  },
  setup() {
    useAlert();
    // const alertIsVisible = ref(false);

    // function showAlert() {
    //   alertIsVisible.value = true;
    // }
    // function hideAlert() {
    //   alertIsVisible.value = false;
    // }

    //? isso é quase como um mixin, mas DA COMPOSITION API...
    // const alertArray = useAlert(); //? isso vai EXECUTAR TODO O CÓDIGO VISTO LOGO ACIMA (de definição da 'data' e 'methods', com a composition api)...

    const [alertIsVisible, showAlert, hideAlert] = useAlert(); //array destructuring... (pq o result de 'useAlert' é um array, realmente)...

    return {
      alertIsVisible,
      showAlert,
      hideAlert,
      titleAlert
    };
  },
};
</script>