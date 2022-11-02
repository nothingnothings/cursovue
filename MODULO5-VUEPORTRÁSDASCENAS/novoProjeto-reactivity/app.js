const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  watch: {},
  computed: {},
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },

    setText() {
      this.message = this.currentUserInput;
    },
  },
});
app.mount('#behind');











////EXEMPLO DE 'PROXY', TECNOLOGIA _ JAVASCRIPT_ UTILIZADA COM O VUE..


///// O 'Proxy' precisa da 'data que quer wrappar' E TAMBÉM UM SEGUNDO OBJECT, CHEIO DE HJANDLERS PARA ESSE 'WRAPPED OBJECT'...

// const data = {
//   message: 'Hello!',
// };

// const handler = {


// /TRAP DE 'set()': 
//   set(target, key, value) {
//     console.log(target);
//     console.log(key);
//     console.log(value);
//   },
// };

const proxy = new Proxy(data, );