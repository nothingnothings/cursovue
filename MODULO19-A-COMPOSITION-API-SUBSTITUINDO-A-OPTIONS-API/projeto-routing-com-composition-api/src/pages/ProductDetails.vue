<template>
  <section>
    <h2>{{ selectedProduct.title }}</h2>
    <h3>${{ selectedProduct.price }}</h3>
    <p>{{ selectedProduct.description }}</p>
  </section>
</template>

<script>
import { inject } from 'vue';
import { useRoute } from 'vue-router'; ///É UM HOOK USADO COM A COMPOSITION API (para ter tipo o 'this.$router' e o 'this.$route'...)

export default {
  props: ['pid'],

  setup(props) {
    const route = useRoute(); ////NOS DÁ ACESSO AO OBJECT 'route' do vue... --> será um REACTIVE OBJECT( o que é melhor)..

    console.log(route);

    const products = inject('products'); ////esses products advêm do component 'App.vue', onde estão armazenados...
    // const title = ref('');
    // const price = ref(null);
    // const description = ref('');

    //versão que USA OS 'props' DESSE COMPONENT 'PAGE' PARA CONSEGUIR OBTER OS DYNAMIC PARAMS DE NOSSA ROUTE...
    // const selectedProduct = products.value.find((product) => {
    //   product.id === props.pid; ///'props.pid' --> é um value passado por meio do ROUTER ('props: true', lá no)
    // });


    //versão que usa o 'useRoute' PARA CONSEGUIR OBTER OS DYNAMIC PARAMS DESSA ROUTE...

    const selectedProduct = products.value.find((product) => {
      product.id === route.params.pid; ///'props.pid' --> é um value passado por meio do ROUTER ('props: true', lá no)
    });

    return { selectedProduct };
  },
};
</script>


<style scoped>
section {
  margin: 3rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}
</style>