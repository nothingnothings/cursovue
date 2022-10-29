const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },

  watch: {},

  computed: {},

  methods: {
    toggleStyle(letter) {
      switch (letter) {
        case 'A':
          this.boxASelected = !this.boxASelected;
          break;
        case 'B':
          this.boxBSelected = !this.boxBSelected;
          break;
        case 'C':
          this.boxCSelected = !this.boxCSelected;
          break;
      }
    },
  },
});

app.mount('#style');
