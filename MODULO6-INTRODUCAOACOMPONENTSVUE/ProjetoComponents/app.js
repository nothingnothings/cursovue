const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manu',
          phone: '0123456789',
          email: 'exemplo@exemplo.com',
        },

        {
          id: 'julie',
          name: 'Julie Jones',
          phone: '0123456789',
          email: 'manuel@exemplo.com',
        },
      ],
    };
  },
  //   watch: {},
  //   computed: {  ///COLOCADO EM
  //     detailsText() {
  //       return 'Show';
  //     },
  //   },

  //   methods { //// agora esse method de toggle É COLOCADO EM CADA _ COMPONENT INDIVIDUAL, PQ CADA COMPONENT TERÁ SUA PRÓPRIA PROPRIEDADE 'isVisible'...
  //     toggleDetails() {
  //         this.detailsAreVisible = !this.detailsAreVisible;
  //     }
  //   }
});

// app.component(); ////É ASSIM QUE USAMOS/INCORPORAMOS COMPONENTS EM UM 'VUE APP'...

// app.component('user-data-component'); // EXEMPLO DE NAMING CONVENTION DE VUE COMPONENTS...
/// NAMING CONVENTION DE VUE COMPONENTS É 'exemplo-exemplo' (2 palavras, com dash no meio)...
////VUE COMPONENTS SÃO 'MINI-APPS' conectados aos apps de verdade (bigger vue apps)....

app.component(
  'friend-contact', ///CADA 'COMPONENT' PODE TER SUAS PRÓPRIAS PROPRIEDADES... (data, methods, computed, watch, etc)... e CADA COMPONENT TAMBÉM  EXIGE UM 'IDENTIFIER', um nome.... e também EXIGE A DEFINIÇÃO DE SEU PRÓPRIO TEMPLATE/CÓDIGO HTML...
  {
    //     template: `<li v-for="friend in friends" :key="friend.id">
    //     <h2> {{ friend.name }}</h2>
    //     <button @click="showDetails">{{ detailsText }} Details</button>
    //     <ul>
    //       <li><strong>Phone:</strong>{{ friend.phone }}</li>
    //       <li><strong>Email:</strong>{{ friend.email }}</li>
    //     </ul>
    //   </li>`

    //OBS::: A SINTAXE 'v-for' NÃO FUNCIONA COM ESSA sintaxe de TEMPLATE LITERAL, A PRINCÍPIO...

    template: `<li>
<h2> {{ friend.name }}</h2>
<button @click="toggleDetails">Show Details</button>
<ul>
  <li><strong>Phone:</strong>{{ friend.phone }}</li>
  <li><strong>Email:</strong>{{ friend.email }}</li>
</ul>
</li>`,

    data() {
      return {
        detailsAreVisible: false, ///cada item terá sua própria propriedade dessas, independente...
        friend: {
          /// data property TEMPORÁRIA, que vai segurar TODOS OS details de cada list item, de forma independenet...
          id: 'manuel',
          name2: 'Manu',
          phone: '0123456789',
          email: 'exemplo@exemplo.com',
        },
      };
    },

    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },
    },
  }
);

///MOUNT DO APP 'GRANDE'
app.mount('#app');
