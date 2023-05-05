<template>
  <section class="container">
    <h2>{{ userName }}</h2>
  </section>
</template>

<script>
import { ref } from 'vue'; ///usado com a COMPOSITION API...
export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },

  setup() {
    // ? É O PILAR CENTRAL DA COMPOSITION API, o 'setup()'

    const uName = ref('Maximilian'); ////armazenamos os values de 'data' em VARIÁVEIS COMUNS, como se não estivéssemos no vue... aí esses values viram 'REACTIVE VALUES', por assim dizer...
    // const uName = 'Maximilian' --- sem reactive value... (sem 'ref()')

    setTimeout(
      () => {
        // uName = 'Max'; ///nunca faça assim, pq NÃO QUEREMOS SUBSTITUIR O VALUE 'COM' REF' POR 1 VALUE 'SEM REF'... (sem reatividade)...

        uName.value = 'Max'; ///basta escrever assim
      },

      2000
    );
    return {
      //nesse object, retornamos os VALUES/KEYS QUE QUEREMOS QUE FIQUEM EXPOSTOS AO NOSSO DOM....
      userName: uName, //com isso, a key de 'userName' consegue ser acessada no TEMPLATE DA PÁGINA...
    };
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

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>