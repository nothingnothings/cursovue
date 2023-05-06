<template >
  <div>
    <h2>{{ userCounter }}</h2>
  </div>
</template>
    <script>
import { inject } from 'vue';
export default {
  //   props: ['firstName', 'lastName', 'age'],

  //  exemplo de uso de provide/inject com o UserData...

  setup(props, context) {
    const userCounter = inject('counter');

    // return {
    //   userName: uName,
    // };


    return {
        userCounter
    }
  },
};
</script>
    <style>
</style>
    