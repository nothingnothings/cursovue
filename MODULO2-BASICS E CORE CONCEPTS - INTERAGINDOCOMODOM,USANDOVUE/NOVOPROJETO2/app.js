const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: ''
    };
  },

  methods: {
    addToCounter() {
      // this.counter++
      this.counter = this.counter + 1;
    },

    removeFromCounter() {
      this.counter--;
    },

    addToCounterDynamic(num) {
      this.counter = this.counter + num;
    },

    removeFromCounterDynamic(num) {
      this.counter = this.counter - num;
    },

    inputChangedHandler(event) {
      ///SINTAXE SIMILAR À DO ANGULAR ($event, que contém event.target.value e outras propriedades)..
      this.name = event.target.value; ///exatamente como vanilla javascript e angular
    },

    inputChangedHandlerSpecial(lastName, event) {
      ///como usar o EVENT OBJECT e múltiplos argumentos 'custom' (feitos/passados por nós)...
      this.name = event.target.value + '' + lastName;
    },

    formSubmitHandlerNaoElegantePreventDefault(event) {
      event.preventDefault();
    },

    formSubmitHandlerEleganteComEventModifier(event) {
      //sem event.preventDefault()
    },

    inputChangedHandlerConfirmed(event) { ///exemplo de KEYBOARD MODIFIER
      this.confirmedName = this.name;
    }
  },
});

app.mount('#events');
