// Vue.createApp({
//   data() {
//     return {};
//   },
// }).mount('#user-goal');

///^^^^ SINTAXE BÁSICA DE USO DO VUE....

// const app = Vue.createApp({ ////podemos armazenar nossa VUE INSTANCE EM UMA CONSTANTE, SIM....

//     data() {
//         return {
//             courseGoal: 'Finish the Fight.', ///usado para demonstrar o funcionamento de INTERPOLATION (a sintaxe ' {{}} ' no html)
//             dynamicLink: 'example.com' //usado para demonstrar o funcionamento de 'v-bind'
//         }
//     }
// })

// app.mount('#user-goal'); ////COM ISSO, TARGETTAMOS ESSA SECTION ESPECÍFCIA, COM ESSE ID ESPECÍFICO, NO NOSSO APP..
// // HABITUE-SE A USAR 'ids' para SELECIONAR AS PARTES DAS SUAS PÁGINAS QUE VOCÊ QUER CONTROLAR COM VUEJS...

const app = Vue.createApp({
  data() {
    return {
      courseGoal: 'Finish the Fight.',
      dynamicLink: 'exemplo.com',
      courseA: 'EXEMPLO1',
      course2: 'EXEMPLO2',
      course3: '<h2>Example HTML retrieved from a database</h2>'
    };
  },

  methods: {
    ////como usar methods com o VUE...

    randomizeCourseGoal() {
      ////meu exemplo ("alteração de state" que então reflete nos items da página)
      const rollDice = Math.random();

      if (rollDice > 0.5) {
        this.courseGoal = 'EXEMPLO';
      } else {
        this.courseGoal = 'End the Fight.';
      }
    },

    ////EXEMPLO DO PROFESSOR (call de function DENTRO DE STRING INTERPOLATION)
    outputGoal() {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        return 'Learn Vue!';
      } else {
        return 'Master Vue!';
      }
    },

    outputGoal2() {
      const randomNumber = Math.random();

      if (randomNumber < 0.5) {
        //exemplo  de como retornar data elencada DENTRO DO VUE, dentro dos methods do próprio vue...
        return this.courseA;
      } else {
        return this.courseB;
      }
    },

    
    outputGoal3HTMLVersion() {

        return this.course3;
      },
  },
});

app.mount('#user-goal');
