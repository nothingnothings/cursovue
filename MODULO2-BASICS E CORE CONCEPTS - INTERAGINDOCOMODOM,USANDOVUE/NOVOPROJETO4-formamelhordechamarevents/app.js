const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      ///fullName2 é nosso exemplo de utilização de WATCHERS no lugar de computed properties...
      fullName2: ''
    };
  },

  //esses methods, em 'computed', SOMENTE SÃO EXECUTADOS se SUAS DEPENDENCIES FOREM ALTERADAS/MANIPULADAS..

  ///SEMPRE USAMOS as 'computed PROPERTIES' COMO SE FOSSEM PROPRIEDADES de 'data' (embora sejam, no fundo, methods)... --> isso quer dizer que é QUASE COMO SE NÃO FOSSEM METHODS, pq não vão ser chamados como METHODS comuns...
    //e sempre NOMEAREMOS ESSAS 'COMPUTED PROPERTIES' como se fossem PROPRIEDADES COMUNS, e não como 'METHODS'..
 
 
    computed: {
      ///é uma computed property que será usada para OUTPUTTAR O FULL NAME... vamos usar o EXATO mesmo código que temos em 'outputFullName' ( o 'method legit'), mas agora TEREMOS ESSA LÓGICA SENDO EXECUTADA A DEPENDER DA _ ALTERAÇÃO _ DE UMA DEPENDENCY...
    
      fullName() {
       ///// essa propriedade/computed property, nesse exemplo, SÓ SERÁ REEXECUTADA sempre que a propriedade 'name' (da qual DEPENDE, É UMA DEPENDENCY, É REFERIDA NO INTERIOR DE SUA LÓGICA) for alterada
        
       
       ///this.name --> é a 'dependencia' dessa computed property, pq a CP só vai ser reexecutada se essa dependency tiver seu valor alterado...
       if (this.name === '') {
          return '';
        }

      return this.name + ' ' + 'Panazolo';
    },
  },

  methods: {
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(event) {
      this.name = '';
    },
    outputFullName() {
      ////usado para DEMONSTRAR COMO podemos usar EVENTS DE FORMA MELHOR...  --> essa aqui é uma versão HACKY, não é a melhor versão de fazer isso...

      if (this.name === '') {
        return '';
      }

      ///isso demonstra que esse method vai SEMPRE SER REEXECUTADO a partir de UPDATES NO STATE DO VUE APP, seja 'counter' ou 'name'...
      ///É POR ISSO QUE DEVEMOS RECORRER A 'COMPUTED', methods em 'computed', que são methods que SOMENTE SÃO EXECUTADOS SE SUAS DEPENDENCIES SÃO AFETADAS/ALTERADAS...
      return this.name + 'Panazolo' + Math.random();
    },
  },
});

app.mount('#events');
