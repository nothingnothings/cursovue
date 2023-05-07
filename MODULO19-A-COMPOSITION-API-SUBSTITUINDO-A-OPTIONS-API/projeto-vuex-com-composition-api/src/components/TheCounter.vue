<template>
  <h2>{{ counter }}</h2>
</template>

<script>
import { useStore } from 'vuex';
import { computed } from 'vue';
export default {
  setup() {
    const store = useStore();

    // const counter = 0;

    const counter = computed(() => {
      return store.getters.counter; ///É ASSIM QUE GANHAMOS ACESSO à DATA ARMAZENADA NO NOSSO STORE...
    });

    return { counter };
  },
};
</script>