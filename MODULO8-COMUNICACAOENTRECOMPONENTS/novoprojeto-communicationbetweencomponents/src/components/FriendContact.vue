<template>
  <!-- <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show' }} Details</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ friend.phone }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ friend.email }}
      </li>
    </ul>
  </li> -->

  <li>
    <!-- <h2>{{ name }} {{ isFavorite === '1' ? '(FAVORITE)' : '' }}</h2> -->
    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(FAVORITE)' : '' }}</h2> <!-- SE QUEREMOS ALTERAR O VALUE DESSE 'RECEIVED PROP', é melhor fzer isso por meio de uma LOCAL DATA PROPERTY, que vai copiar esse value SEM O ALTERAR NA ORIGEM ( o que não é permitido pelo VUE)-->
    <!-- <button @click="toggleFavorite">Toggle Favorite</button> --> <!-- ISTO É PROIBIDO. NÃO PODEMOS ALTERAR O VALUE DE UM PROP DIRETAMENTE, NO VUE... se queremos alterar esse value passado por esse prop, DEVEMOS PRIMEIRAMENTE O ARMAZENAR EM UMA LOCAL DATA PROPERTY, e então a manipular com methods/computed... -->
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

  props: [
    // USE ___ 'camelCase' AQUI... JÁ NO HTML, QUANDO FOR DEFINIR OS PROPS/PROP-NAMES, use 'kebab-case' (com DASHES no meio)
    'name',
    'phoneNumber', ////encontrado como 'phone-number', lá no MAIN APP, em que PASSAMOS A DATA A ESSE PROP...
    'emailAddress',
    'isFavorite'
  ],

  data() {
    return {
      friendIsFavorite: this.isFavorite, /////EXEMPLO DE 'MANIPULAÇÃO SAFE DO VALUE RECEBIDO POR 1 PROP, EM NOSSO CHILD COMPONENT'
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
      // this.phoneNumber  ////EXEMPLO DE COMO SE REFERIR A UMA PROPRIEDADE/prop definida no array de 'props'..
      this.detailsAreVisible = !this.detailsAreVisible;
    },

    // toggleFavorite() { /////PROIBIDO. É PROIBIDO MUTAR DIRETAMENTE O VALUE DE UM PROP RECEBIDO POR UM CHILD COMPONENT.. SE QUISER FAZER ISSO, ARMAZENE O VALUE/CÓPIA DO VALUE DO PROP EM 1 'LOCAL DATA PROPERTY' DESSE COMPONENT AQUI, E AÍ _ ACESSE ESSA PROPREIDADE NOS SEUS METHODS, EM COMPUTED, ETC..
      // if (this.isFavorite === '1') {
      //   this.isFavorite = '0';
      // } else {
      //   this.isFavorite = '1';
      // }
    // }

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