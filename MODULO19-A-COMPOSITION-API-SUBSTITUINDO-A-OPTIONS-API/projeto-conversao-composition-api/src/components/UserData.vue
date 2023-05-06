<template >
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>
  <script>
import { computed } from 'vue';
export default {
  /// props: ['userName', 'age'],

  props: ['firstName', 'lastName', 'age'], //para conseguir acesso aos PROPS, na composition api, PRECISAMOS USAR OS PARÂMETROS EM 'setup()'...

  setup(props) {
    ///props vai segurar todos os props passados a esse component nosso...
    const uName = computed(() => {
      return props.firstName;
    });

    return {
      userName: uName,
    };
  },

  //   computed: {
  //     userName() {
  //       return this.firstName + ' ' + this.lastName;
  //     },
  //   },
};
</script>
  <style>
</style>
  