// import UserAlert from "../components/UserAlert.vue" ///a option de 'components' NÃO FUNCIONA COM MIXINS... (cada component tem seus próprios imports de components)..

export default {
    // components: { ///não funciona...
    //   UserAlert,
    // },
    data() {
      return {
        alertIsVisible: false,
      };
    },
    methods: {
      showAlert() {
        this.alertIsVisible = true;
      },
      hideAlert() {
        this.alertIsVisible = false;
      },
    },
  }