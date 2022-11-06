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
    <h2>{{ name }}</h2>
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
        'emailAddress'
  ],

  data() {
    return {
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
    }
  }
};
</script>