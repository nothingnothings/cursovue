const app = Vue.createApp({
  data() {
    return {
      boxASelected: false,
      boxBSelected: false,
      boxCSelected: false,
    };
  },

  watch: {},

  computed: {
    //  USADO COM O MELHOR APPROACH PARA 'DEFINIR DINAMICAMENTE AS CLASSES DE ALGUM ELEMENTO no vue'
    boxAClasses() {
      return { active: this.boxASelected };
    },
    boxBClasses() {
      return { active: this.boxBSelected };
    },
    boxCClasses() {
      return { active: this.boxCSelected };
    },
  },

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
