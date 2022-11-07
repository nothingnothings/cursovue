<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(FAVORITE)' : '' }}</h2>
    <button @click="toggleFavoriteCorrectVersion">Toggle Favorite</button>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
  </li>


</template>

<script>
export default {

  props: { ///MANEIRA MAIS ELABORADA DE ESPECIFICAR OS PROPS A SEREM RECEBIDOS.. --> CADA PROPS SERÁ UMA key nesse seu object...

    // name: String,  ///essa já é uma maneira mais elaborada de dizer o que vamos receber com esse prop.... mas há uma maneira mais detalhada ainda, vista logo abaixo desta linha:
    name: { ///assim conseguimos definir a maior quantidade de detalhes possível sobre esse prop que será recebido...

      type: String, ///será o TYPE desse negócio, desse prop...
      required: false ////DEFINE SE _ ESSE PROP __ DEVE SER OBRIGATORIAMENTE PASSADO A ESSE NOSSO COMPONENT, OU NÃO...


    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: String,


    isFavorite: {
      type: String,
      required: false, 
      default: '0', 

      validator: function (valueProvidedByTheProp) { //////PODEMOS TAMBÉM TER A KEY DE 'validator', que SEMPRE SERÁ UMA FUNCTION QUE __ VAI RETORNAR __ TRUE OU FALSE...


        //O VALIDATOR SEMPRE VAI RETORNAR OU 'TRUE' OU 'FALSE' 
        ///e sempre vai receber, como parâmetro, o value PROVIDENCIADO/PASSADO no nosso prop...
        ///dentro do validator podemos ter QUALQUER VALIDATION LOGIC DE NOSSA ESCOLHA, para determinar se o value recebido como esse prop é válido ou não....



        ////este é um validator exemplo, que é a mesma coisa que escrever 'type: Boolean' nesse prop.... (pq, como com os booleans, aqui só permitiremos 2 values, '0' e '1', que são quase exatamente como true/false, mas com STRINGS)
        ////APENAS ESSES 2 VALUES DEVERÃO SER PERMITIDOS POR NOSSO PROP.... é isso que esses checks fazem..
        if (valueProvidedByTheProp === '1' || valueProvidedByTheProp === '0') {

          return true;
        } else {
          ////todos outros values, para esse prop, serão NEGADOS...
          return false;
        }

      }
    }
  },


  data() {
    return {
      friendIsFavorite: this.isFavorite,
      detailsAreVisible: false,
      // friend: {  /////NÃO É MAIS NECESSÁRIO (outsourceado para 'App.vue', que contém a data property que criará 1 elemento 'FriendContact' para cada object 'friend' in 'friends' array)
      //   id: "manuel",
      //   name: "Manuel Lorenz",
      //   phone: "0123 45678 90",
      //   email: "manuel@localhost.com",
      // },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    toggleFavoriteCorrectVersion() {
      if (this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0';
      } else {
        this.friendIsFavorite = '1';
      }
    }


  }
};
</script>