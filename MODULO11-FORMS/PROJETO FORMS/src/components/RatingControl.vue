<template>
  <ul>
    <!-- <li :class="{ active: currentlyActiveButton === 'poor' }">
      <button type="button" @click="selectButtonHandler('poor')">Poor</button>
    </li>
    <li :class="{ active: currentlyActiveButton === 'average' }">
      <button type="button" @click="selectButtonHandler('average')">
        Average
      </button>
    </li>
    <li :class="{ active: currentlyActiveButton === 'great' }">
      <button type="button" @click="selectButtonHandler('great')">Great</button>
    </li> -->



        <li :class="{ active: modelValue === 'poor' }">
      <button type="button" @click="selectButtonHandler('poor')">Poor</button>
    </li>
    <li :class="{ active: modelValue === 'average' }">
      <button type="button" @click="selectButtonHandler('average')">
        Average
      </button>
    </li>
    <li :class="{ active: modelValue === 'great' }">
      <button type="button" @click="selectButtonHandler('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'], //ESPECIFICAMOS ESSE PROP SE __ PLANEJAMOS USAR 'v-model' com esse component aqui, com 'RatingControl'....
                ///se declaramos esse prop no contexto desse COMPONENT, estamos basicamente escrevendo/bindando esse prop assim '<rating-control :model-value="" '
  

  emits: ['update:modelValue'], ///TAMBÉM PRECISAMOS DECLARAR O EMIT DESSE EVENT AÍ, pq ele realmente será emitido por esse nosso component...
  data() {
    return {
      // currentlyActiveButton: this.modelValue,  // quando USAMOS 'v-model' com algum CUSTOM COMPONENT, não devemos usar data properties como propriedades que seguram os valores... (prefira COMPUTED PROPERTIES; AS COMPUTED VÃO ATUALIZAR A PARTE VISUAL DO SEU SITE, SEMPRE QUE O VALUE DO PROP de 'modelValue' FOR ALTERADO, após ser triggado o v-model desse component...
    };
  },


// computed: {
//   currentlyActiveButton() {
//     // return this.modelValue; ////essa é A PRIMEIRA DAS DUAS MANEIRAS DE VINCULAR SEU CUSTOM COMPONENT COM 'v-model' a 1 component 'pai'...
//   }
// },

  methods: {
    selectButtonHandler(type) {
      // this.currentlyActiveButton = type; ///usado com a PRIMEIRA DAS '2 MANEIRAS DE VINCULAR SEU CUSTOM COMPONENT com v-model'
      this.$emit('update:modelValue', type); //////FAZEMOS ISSO PARA _ EMITIR _ O VALUE _ DE ESSE NOSSO COMPONENT, EM DIREÇÃO À FORM.... (e fazemos isso por meio de 'v-model' nesse component de 'RatingControl', no caso)... -> para isso, precisamos declarar o prop de 'modelValue' e o EMIT/event de 'update:modelValue'... 

    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.active {
  border-color: green;
}

.active button {
  color: green;
}
</style>
