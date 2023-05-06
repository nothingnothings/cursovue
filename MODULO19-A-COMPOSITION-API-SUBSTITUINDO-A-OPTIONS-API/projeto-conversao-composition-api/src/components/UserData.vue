<template >
  <div>
    <h2>{{ userName }}</h2>
    <h3>{{ age }}</h3>
  </div>
</template>
  <script>
import { computed } from 'vue';

import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'; //// ESSES SÃO OS LIFECYCLE HOOKS DISPONÍVEIS, NA COMPOSITION API (beforeCreate e created NÃO EXISTEM, pq já são essencialmente a mesma coisa que 'setup()'...)

export default {
  /// props: ['userName', 'age'],

  props: ['firstName', 'lastName', 'age'], //para conseguir acesso aos PROPS, na composition api, PRECISAMOS USAR OS PARÂMETROS EM 'setup()'...

  setup(props, context) {
    ///props vai segurar todos os props passados a esse component nosso...
    ///'context' é usado para coisas como CUSTOM EVENTS, por exemplo..

    //dentro de context, temos: 'attrs' (passthrough attributes passados a esse component)
    // 'slots' --> é a data passada dentro dos slots desse component (se ele tiver algum slot)
    // 'emit' --> é 1 function, MT IMPORTANTE, USADA PARA EMITIR DATA (exatamente como 'this.emit()')

    context.emit('exemploDeEventoCustom'); ////é assim que emitimos eventos, com a composition api..
    const uName = computed(() => {
      return props.firstName;
    });






    onBeforeMount(
      () => {
        console.log('onBeforeMount')
      }
    )

    onMounted(
      () => {
        console.log('onMounted')
      }
    )


      onBeforeUpdate(
        () => {
          console.log('onBeforeUpdate')
        }
      )



        onUpdated(
          () => {
            console.log('onUpdated')
          }
        )




        onBeforeUnmount(
          () => {
            console.log('onBeforeUnmount')
          }
        )


          onUnmounted( ///é chamado quando o component é removido do dom..
            () => {
              console.log('onUnmounted')
            }
          )





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
  