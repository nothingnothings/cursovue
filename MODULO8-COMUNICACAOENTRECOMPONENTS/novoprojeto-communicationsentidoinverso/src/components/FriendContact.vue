<template>
    <li>
      <h2>{{ name }} {{ isFavorite ? '(FAVORITE)' : '' }}</h2> 
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
  
    // props: [
    //   'name',
    //   'phoneNumber',
    //   'emailAddress',
    //   'isFavorite'
    // ],


    props: {


      id: { ///será usado com 'this.$emit()', para emitir O IDENTIFICADOR DE CADA ITEM 'FriendContact'
        type: String,
        required: true
      },
    name: {
      type: String,
      required: false,
    },

    phoneNumber: {
      type: String,
      required: true,
    },
    emailAddress: String,

    isFavorite: {
      type: Boolean,
      required: false,
      default: false,

      // validator: function (valueProvidedByTheProp) {
      //   if (valueProvidedByTheProp === '1' || valueProvidedByTheProp === '0') {
      //     return true;
      //   } else {
      //     return false;
      //   }
      // },
    },
  },




  
    data() {
      return {
        // friendIsFavorite: this.isFavorite,
        detailsAreVisible: false,
        friend: {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
        },
      };
    },
    methods: {
      toggleDetails() {
        this.detailsAreVisible = !this.detailsAreVisible;
      },

    toggleFavoriteCorrectVersion() {
        // this.friendIsFavorite = !this.friendIsFavorite;


        // fazemos emit de um EVENTO QUALQUER, CRIADO POR NÓS, que então será CAPTADO PELO PARENT COMPONENT...
        // this.$emit('custom-event-created-by-me');  ///COM ISSO, PODEMOS FAZER 'COMMUNICATION COM O PARENT COMPONENT desse component child...' --> ou seja, COMMUNICATION NO SENTIDO INVERSO... (sentido child -> parent) 


          ///vamos passar o ID de CADA FRIENDContact, COMO _ SEGUNDO/PRIMEIRO PARÂMETRO de 'toggleFavoriteStatus', lá no 'App.vue'
        this.$emit('custom-event-created-by-me', this.id); ///// NO SEGUNDO E SEGUINTES PARÂMETROS, VOCÊ PODE COLOCAR DATA ADICIONAL QUE VOCê QUER ENVIAR JUNTO DE SEU EVENT... no nosso caso, colocamos o 'id' do FriendContact que quer ter seu próprio 'favoriteStatus' alterado...
      }
    }
  };
  </script>