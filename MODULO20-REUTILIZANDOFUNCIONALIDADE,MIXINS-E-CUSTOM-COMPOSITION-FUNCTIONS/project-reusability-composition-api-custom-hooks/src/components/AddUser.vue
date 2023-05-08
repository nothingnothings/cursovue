<template>
  <user-alert v-if="alertIsVisible" title="Add a User?" @close="hideAlert">
    <p>Do you want to continue with adding a user?</p>
  </user-alert>
  <section>
    <h2>Add a User</h2>
    <button @click="showAlert">Add User</button>
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
    // const alertIsVisible = ref(false);

    // function showAlert() {
    //   alertIsVisible.value = true;
    // }
    // function hideAlert() {
    //   alertIsVisible.value = false;
    // }

    // return {
    //   alertIsVisible,
    //   showAlert,
    //   hideAlert
    // };

    //? isso é quase como um mixin, mas DA COMPOSITION API...
    // const alertArray = useAlert(); //? isso vai EXECUTAR TODO O CÓDIGO VISTO LOGO ACIMA (de definição da 'data' e 'methods', com a composition api)...

    const [alertIsVisible, showAlert, hideAlert] = useAlert(true); //array destructuring... (pq o result de 'useAlert' é um array, realmente)...

    return {
      alertIsVisible,
      showAlert,
      hideAlert
    };

    // return {
    //   alertIsVisible: alertArray[0],
    //   showAlert: alertArray[1],
    //   hideAlert: alertArray[2]
    // }
  },
};
</script>