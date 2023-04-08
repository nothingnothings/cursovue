<template>
  <div>
    <h3>{{ counter }}</h3>
    <p>We do more stuff...</p>
  </div>
</template>
  
  
  <script>
export default {
  computed: {
    counter() {
    //   return $store.state.counter * 2; 
    /////MANEIRA ERRADA DE PEGAR E MANIPULAR O VALUE DE SEU STATE (acabamos com replicação de código)
       
    //MANEIRA CORRETA DE OBTER ACESSO AO VALUE DE SEU STATE, por meio de GETTERS (modificam o valor retornado pelo state)...

    return this.$store.getters.finalCounter;
      
},
  },
};
</script>
  
  
  <style scoped>
</style> 