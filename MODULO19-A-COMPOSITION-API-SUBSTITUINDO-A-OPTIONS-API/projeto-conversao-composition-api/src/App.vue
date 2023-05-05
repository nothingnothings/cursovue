<template>
  <div>
    <section class="container">
      <h2>{{ user.name }}</h2>
      <h3>{{ user.age }}</h3>
      <h3>{{ counter }}</h3>
    </section>
    <section class="container">
      <h2>{{ user2.name }}</h2>
      <h3>{{ user2.age }}</h3>
      <h3>{{ counter }}</h3>
    </section>
    <section class="container">
      <h2>{{ joanaName }}</h2>
      <h3>{{ joanaAge }}</h3>
      <h3>{{ counter }}</h3>
    </section>
    <!-- <button @click="user.age = 32"></button> -->
    <button @click="setNewData()"></button>
  </div>
  
</template>

<script>
import { ref } from 'vue'; ///usado com a COMPOSITION API... /// use com values SINGULARES, como 'const counter = ref(0)'
import { reactive } from 'vue'; ////é a mesma coisa que o 'ref()', mas é usado COM __ OBJECTS...

import { isReactive } from 'vue'; ///esse method RETORNA TRUE OU FALSE; se aquele value for REACTIVE (criado com REACTIVE() ), ele retorna true...
import { isRef } from 'vue'; ///esse method RETORNA TRUE OU FALSE; se aquele value for REACTIVE (criado com REF() ), ele retorna true...

import { toRefs } from 'vue'; ////TRANSFORMA TODOS OS NESTED VALUES/KEYS DE 1 OBJECT EM 'REACTIVE VALUES' (em refs, essencialmente)...

export default {
  // data() {
  //   return {
  //     userName: 'Maximilian',
  //   };
  // },

  setup() {
    // ? É O PILAR CENTRAL DA COMPOSITION API, o 'setup()'

    // const uName = ref('Maximilian'); ////armazenamos os values de 'data' em VARIÁVEIS COMUNS, como se não estivéssemos no vue... aí esses values viram 'REACTIVE VALUES', por assim dizer...
    // const uName = 'Maximilian' --- sem reactive value... (sem 'ref()')
    // const uAge = ref(31);

    ///É ASSIM QUE DEFINIMOS METHODS/FUNCTIONS, DENTRO DO SETUP METHOD... (ficarão disponíveis dentro do nosso COMPONENT, exatamente como 'methods:{}' na OPTIONS api do vue...)
    const setNewData = () => {
      user.age = 50;
    };

    const uCounter = ref(0);
    const user = ref({
      name: 'Maximilian',
      age: 31,
    });

    const user2 = reactive({
      ///// REACTIVE é quase a mesma coisa que ref, mas FUNCIONA APENAS COM OBJECTS...
      name: 'Manuel', ///a única diferença é que podemos ACESSAR E MUDAR SEUS VALUES com 'user.name' em vez de 'user.value.name'...
      age: 22,
    });

    const user3 = reactive({
      ///// REACTIVE é quase a mesma coisa que ref, mas FUNCIONA APENAS COM OBJECTS...
      name: 'Joana', ///a única diferença é que podemos ACESSAR E MUDAR SEUS VALUES com 'user.name' em vez de 'user.value.name'...
      age: 35,
    });

    const user3Refs = toRefs(user3); ////ESSE METHOD CONVERTE TODOS OS VALUES/KEYS 'NORMAIS' DE 1 OBJECT EM 'REFS' (bem útil...)

    setTimeout(
      () => {
        // uName = 'Max'; ///nunca faça assim, pq NÃO QUEREMOS SUBSTITUIR O VALUE 'COM' REF' POR 1 VALUE 'SEM REF'... (sem reatividade)...

        // uName.value = 'Max'; ///basta escrever assim, para trocar o value armazenado dentro da ref...
        // uAge.value = 32;
        //'.value' é usado apenas para SETTAR NOVOS VALUES para suas propriedades 'data'...
        user.value.name = 'Max';
        user.value.name = 34;
        uCounter.value = 1;

        user2.name = 'Manu';
        user2.age = 24;

        user3.name = 'Joana 2';
        user3.age = 50;
      },

      2000
    );
    return {
      //nesse object, retornamos os VALUES/KEYS QUE QUEREMOS QUE FIQUEM EXPOSTOS AO NOSSO DOM....
      // userName: uName, //com isso, a key de 'userName' consegue ser acessada no TEMPLATE DA PÁGINA...
      // age: uAge,

      // userName: user.value.name,  ///isso não funcionará...
      // age: user.value.age,

      user: user, // isso funciona (deve-se passar o RAW CONCRETE OBJECT, se usamos o ref, E NÃO OS VALUES dentro dele, como 'user.value.name'....)
      counter: uCounter,
      user2: user2, //nos mostra o uso de 'reactive()''

      joanaName: user3Refs.name,
      joanaAge: user3Refs.age,
      setNewData: setNewData //// É ASSIM QUE DEFINIMOS/PASSAMOS METHODS AO TEMPLATE DE NOSSO APP...
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