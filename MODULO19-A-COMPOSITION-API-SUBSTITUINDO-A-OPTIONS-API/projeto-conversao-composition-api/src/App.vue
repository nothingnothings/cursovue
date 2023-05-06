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
    <div>
      <!-- EXEMPLO DE COMO USAR COMPUTED COM A COMPOSITION API... -->

      <!-- EXEMPLO SEM O USO DE V-MODEL -->
      <!-- <input type="text" placeholder="First Name" @input="setFirstName" />
      <input type="text" placeholder="Last Name" @input="setLastName" /> -->

      <!-- EXEMPLO COM O USO DE V-MODEL -->
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" v-model="lastName" />
      <input type="text" placeholder="Some Name" ref="someNameInput" />
      <div>
        {{ firstName }}
      </div>
      <div>
        {{ lastName }}
      </div>
      <div>
        {{ fullName }}
      </div>
    </div>
    <!-- <button @click="user.age = 32"></button> -->
    <button @click="setNewData()">SET NEW DATA</button>
    <button @click="setSomeName()">SET SOME NAME</button>
  </div>
</template>

<script>
// data, methods, computed e watch.... essas são as QUATRO COISAS QUE MUDAM com o uso da COMPOSITION API, no vue...

import { ref } from 'vue'; ///usado com a COMPOSITION API... /// use com values SINGULARES, como 'const counter = ref(0)'
import { reactive } from 'vue'; ////é a mesma coisa que o 'ref()', mas é usado COM __ OBJECTS...

// import { isReactive } from 'vue'; ///esse method RETORNA TRUE OU FALSE; se aquele value for REACTIVE (criado com REACTIVE() ), ele retorna true...
// import { isRef } from 'vue'; ///esse method RETORNA TRUE OU FALSE; se aquele value for REACTIVE (criado com REF() ), ele retorna true...

import { toRefs } from 'vue'; ////TRANSFORMA TODOS OS NESTED VALUES/KEYS DE 1 OBJECT EM 'REACTIVE VALUES' (em refs, essencialmente)...
import { computed } from 'vue';
import { watch } from 'vue';

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
      user.value.age = 50;
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
        user.value.age = 34;
        uCounter.value = 1;

        user2.name = 'Manu';
        user2.age = 24;

        user3.name = 'Joana 2';
        user3.age = 50;
      },

      2000
    );

    const firstName = ref('');
    const lastName = ref('');
    const someNameInput = ref(null);

    ////demonstra o uso da composition api com listeners nos elementos do html...
    const setFirstName = (event) => {
      firstName.value = event.target.value;
    };

    const setLastName = (event) => {
      lastName.value = event.target.value;
    };

    const setSomeName = () => {
      // firstName.value = this.$refs.someNameInput.value /// ISSO NÃO FUNCIONARÁ (o uso de 'this.$refs' DENTRO DO SETUP METHOD DA COMPOSITION API _ NÃO FUNCIONA...)
      //isso n funciona justamente pq o 'this' NÃO EXISTE DENTRO DO CONTEXTO DO 'setup()', da COMPOSITION API...


      //refs no template SÃO A MESMA COISA QUE REFS NO 'setup()'...

      //'.value' (consegue acesso ao VALUE DENTRO DESSE REF)... ('.value.value') --> CONSEGUE ACESSO AO VALUE DO OBJECT DE 'input', que também tem uma propriedade '.value'...
      lastName.value = someNameInput.value.value;
    };

    const fullName = computed(() => {
      ////ESSA É A FUNCTION QUE VAI 'SEGURAR CADA COMPUTED LOGIC'...

      return firstName.value + ' ' + lastName.value;
    });

    ////substitui o uso de 'watch' na options api...
    watch(
      uCounter, /// O PRIMEIRO PARÂMETRO É O 'VALUE A SER OBSERVADO'...
      (newValue, oldValue) => {
        //// o segundo parâmetro é a FUNCTION A SER EXECUTADA, CASO O PRIMEIRO PARÂMETRO SEJA ALTERADO...

        console.log(newValue, oldValue);
      }
    );

    watch(
      [firstName, lastName], /// O PRIMEIRO PARÂMETRO TAMBÉM PODE SER UM 'ARRAY DE VALUES A SEREM OBSERVADOS' (ou seja, TEMOS MAIOR FLEXIBILIDADE, COM O WATCH, NA COMPOSITION API DO QUE NA OPTIONS API)...
      (newValues, oldValues) => {
        //// o segundo parâmetro é a FUNCTION A SER EXECUTADA, CASO O PRIMEIRO PARÂMETRO SEJA ALTERADO...

        console.log(newValues, oldValues);

        console.log(newValues[0], oldValues[0]);
        console.log(newValues[1], oldValues[1]);
      }
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
      setNewData: setNewData, //// É ASSIM QUE DEFINIMOS/PASSAMOS METHODS AO TEMPLATE DE NOSSO APP...
      firstName,
      lastName,
      fullName, ///EXEMPLO DE COMPUTED PROPERTY SENDO UTILIZADA COM A COMPOSITION API...
      someNameInput, //EXEMPLO DE REF SENDO USADA NO TEMPLATE (ref no template)...
      setLastName,
      setFirstName,
      setSomeName,

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