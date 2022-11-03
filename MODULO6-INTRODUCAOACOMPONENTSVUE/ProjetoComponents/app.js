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
            email: 'manuel@exemplo.com'
          }
      ],
    };
  },
  watch: {

  },
  computed: {
    detailsText() {
            return 'Show'
    }
  },
  methods: {

  },
});
app.mount('#app');
