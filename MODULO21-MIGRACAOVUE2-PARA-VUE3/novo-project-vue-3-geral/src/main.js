import Vue from 'vue';

Vue.config.productionTip = false;

const app = Vue.createApp({
  //? 1a diferença em relaçaõ ao VUE2... (call de 'createApp')...

  // el: '#app',  //? 2a diferença (fazemos mount com '.mount()', em vez disso)...
  data() {
    //? 3a diferença (data é sempre um method)
    return {
      message: 'This works in Vue 2!',
    };
  },
  methods: {
    changeMessage() {
      this.message = 'Will it work in Vue 3?';
    },
  },
});

app.component('the-button', {
  template: '<button @click="updateMessage">Click me</button>',
  emits: ['update'], // isso também SÓ EXISTE NO VUE3..
  methods: {
    updateMessage() {
      this.$emit('update');
    },
  },
}); //? 4a mudança (registramos components e tpps com 'app.component()' e 'app.use()'...)

app.mount('#app'); //? 5a mudança (uso de '.mount()' para MONTAR NOSSO APP NO DOM)...
