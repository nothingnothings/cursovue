const app1 = Vue.createApp({
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
});
app.mount('#app1');

const app2 = Vue.createApp({
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
});
app.mount('#app2');

const app3 = Vue.createApp({
  template: `
  <section id="app3">
  <input type="text" @input="saveInput">
  <button @click="setText">
      Set Text
  </button>
  <p>{{ }}</p>
</section>`,
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
});
app.mount();




const app4 = Vue.createApp({
  data() {
    return {

      currentUserInput: '',
      message: 'Vue is great!';
    };
  },
  watch: {},
  computed: {},
  methods: {

    saveInput(event) {
      this.currentUserInput = event.target.value
    },

    setText() {
      // this.message = this.currentUserInput;
   
      // this.message = this.$refs ////PROPRIEDADE 'refs' é especial, é PROVIDENCIADA PELO VUE... todas as PROPRIEDADES PROVIDENCIADAS PELO VUE COMEÇAM COM 'dollar sign'...
    
      // this.message = this.$refs.userText ///acessamos a propriedade/referencial 'userText' QUE DEFINIMOS LÁ NO TEMPLATE/HTML 'app3', no input field..
      
      console.log(this.$refs.userText); ////// --> ISSO VAI NOS MOSTRAR O ELEMENTO HTML INTEIRO, o 'input element' inteiro..
      console.dir(this.$refs.userText); //ISSO NOS MOSTRA O JAVASCRIPT OBJECT REPRESENTATION DAQUELE ELEMENT( com todas as propriedades)...
   
      this.message = this.$refs.userText.value; ///ACESSAMOS O 'VALUE' dentro desse input element...
    }


  },
});
app.mount();
