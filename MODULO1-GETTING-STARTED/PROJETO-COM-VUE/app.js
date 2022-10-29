const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const listEl = document.querySelector('ul');

function addGoal() {
  const enteredValue = inputEl.value;
  const listItemEl = document.createElement('li');
  listItemEl.textContent = enteredValue;
  listEl.appendChild(listItemEl);
  inputEl.value = '';
}

buttonEl.addEventListener('click', addGoal);

// Vue.createApp();  //////////CHAMAMOS ESSE MÉTODO BÁSICO NO 'VUE OBJECT' para então CRIARMOS O VUE NO CONTEXTO DO NOSSO APP....

///VERSÃO OLD DA SINTAXE
// Vue.createApp(
//   {
//       data: function() {}
//   }
// )

/////VERSÃO MODERNA DA SINTAXE
// Vue.createApp(
//   {
//       data() {}
//   }
// )

// Vue.createApp({

//   data() { ///DENTRO DE 'data', RETORNAMOS UM _ OBJECT__ COM TODA A DATA _ QUE SERÁ UTILIZADA POR NOSSO APP VUEJS...
//       return {

//       }
//   }
// })

// Vue.createApp({
//   data() {
//     return {
//       goals: [],
//       enteredValue: '',
//     };
//   },
//   methods: {
//     addGoal() {
//       this.goals.push(this.enteredValue);
//     },
//   },
// });



// Vue.createApp({
//   ///a data com a qual você trabalhará e referenciará por meio das DIRECTIVES no html
//   data() {
//     return {
//       goals: [],
//       enteredValue: '', //usado, nesse exemplo, com a directive 'v-model'...
//     };
//   },
//   ///os methods que vocÊ chamará no código html
//   methods: {
//     ///'this' vai se referir sempre à data elencada no object de 'data(){}'...
//     addGoal() { //usado, nesse exemplo, com a directive especial 'v-on', com event 'click'...
//       this.goals.push(this.enteredValue);
//     },
//   },
// });






Vue.createApp({
    ///a data com a qual você trabalhará e referenciará por meio das DIRECTIVES no html
    data() {
      return {
        goals: [],
        enteredValue: '', //usado, nesse exemplo, com a directive 'v-model'...
      };
    },
    ///os methods que vocÊ chamará no código html
    methods: {
      ///'this' vai se referir sempre à data elencada no object de 'data(){}'...
      addGoal() { //usado, nesse exemplo, com a directive especial 'v-on', com event 'click'...
        this.goals.push(this.enteredValue);
        this.enteredValue = '';
      },
    },
  })
  .mount('#app');  ///É UMA LINHA MT IMPORTANTE, PQ COMUNICA AO VUE 'EM QUE LUGAR DO NOSSO APP/PÁGINA ESSA DATA E METHODS DEVERÃO SURTIR EFEITO''...
  