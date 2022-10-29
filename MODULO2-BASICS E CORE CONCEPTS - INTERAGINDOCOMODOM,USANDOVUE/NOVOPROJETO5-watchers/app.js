const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      // fullName: '',
      fullName2: '',
      name: '',
      lastName: '',
    };
  },

  computed: {
    // fullName() {
    //   if (this.name === '') {
    //     return '';
    //   }

    //   return this.name + ' ' + 'Panazolo';
    // },


    // como você pode observar, isso é BEM _ MAIS __ CONVENIENTE DO QUE ESCREVER AQUELES 2 WATCHERS VISTOS MAIS ABAIXO (watcher de 'name' e 'lastName').. --> ISSO __ PQ __ ESSE OUTPUT 'SIMPLES' DE DATA DINÂMICA __ NÃO É O MAIN INTENT DOS WATCHERS.. ( o propósito deles é diferente daquele das computed properties)...
    fullName() {
      // return this.name + this.lastName; //versão sem if check

      if (this.name !== '' && this.lastName !== '') {
        return this.name + ' ' + this.lastName;
      } else {
        return '';
      }
    },
  },

  ///OBS::: USAR 'WATCHERS' COMO SE FOSSEM COMPUTED PROPERTIES É UMA BAITA FURADA, NÃO O FAÇA... (se você tiver mais de 2 dependencies em 1 computed property, não há problema... o mesmo não pode ser dito dos watchers)
  
    ///OBS::: USE WATCHERS PARA TAREFAS COMO '''RESETTE O COUNTER QUANDO ELE CHEGAR A 50''', coisas assim...
  watch: {
    ///EXEMPLO DO FUNCIONAMENTO DE 'WATCHERS'...

    ///seus watchers sempre terão o mesmo nome de alguma data property/computed property que você definiu anteriormente (como 'fullName' e 'fullName2')...
    /// essa nomeação é obrigatória...

    //ex: a partir da COMPUTED PROPERTY 'fullName'
    // fullName2() {},

    //ex: a partir da DATA PROPERTY 'fullName' --> sempre que essa data property for ALTERADA, esse watcher será executado...
    fullName2(newPropertyValue, oldPropertyValue) {
      //argumentos default, sempre recebidos.
      // this.name = this.fullName2 + '' + 'Panazolo' ///'this.fullName2' pode ser substituído por 'oldPropertyValue', que é um argumento PASSADO AUTOMATICAMENTE PELO VUE, e que representa o ÚLTIMO VALUE DA WATCHED PROPERTY a que o watcher está conectado (no caso, o último value de 'fullName2')...

      console.log('EXAMPLE');
      this.fullName = newPropertyValue + '' + 'Panazolo';
    },

    ///EXEMPLO DE WATCHERS FALHANDO (2 ou mais dependencies para 1 mesma computed property/watcher) -> FUNCIONA, MAS É MT CÓDIGO PARA 1 COISA SIMPLES...

    //     name(value) { //primeiro watcher, que faz watch do 'name'
    //       if (value === '') {
    //           this.fullName = '';
    //       } else {
    //           this.fullName = value + ' ' + this.lastName;
    //       }
    //   },

    //   lastName(value) { //segundo watcher, que faz watch do 'lastName'
    //     if (value === '') {
    //         this.fullName = '';
    //     } else {
    //         this.fullName = this.name + ' ' + value;
    //     }
    // }








    // EXEMPLO DE WATCHERS SENDO BEM USADOS ('resette o nosso counter quando/se ele chegar a 50')...

    // counter(value) {
    //   console.log('RAN');
    //   if (value > 50) { //value vai se referir ao 'latest value of the COUNTER data property'

    //     this.counter = 0; //vamos querer RESETTAR esse counter, definí-lo como 0...
    //   }
    // }


    //exemplo de WATCHER _ sendo usado para DEFINIR TIMERS (pq watchers são frequentemente usados com HTTP REQUESTS e para DEFINIR TIMERS)...

    counter(value) {
      if (value > 50) {
          ///fazemos o store da 'this' keyword para CONSERTAR O COMPORTAMENTO DELE, para que não bugue (para que o 'THIS' se refira ao object global vue..)
        const that = this; ///eis o código em questão.
        setTimeout(() => {
          that.counter = 0;    ///EIS O CÓDIGO EM QUESTÃO.
  
        }, 2000);
      }
    }
    
  },

  methods: {
    // setName(event, lastName) {
    //   this.fullName2 = event.target.value;
    // },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput(event) {
      this.fullName2 = '';
    },
    // outputFullName() {
    //   if (this.name === '') {
    //     return '';
    //   }

    //   return this.name + 'Panazolo' + Math.random();
    // },
  },
});

app.mount('#events');
