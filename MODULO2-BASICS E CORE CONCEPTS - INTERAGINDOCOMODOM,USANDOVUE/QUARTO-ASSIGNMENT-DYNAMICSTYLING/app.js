const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      visible: true,
      color: 'green',
    };
  },

  watch: {},

  computed: {
    userInputClasses() {
      return {
        user1: this.userInput === 'user1',
        user2: this.userInput === 'user2',
      };
    },

    toggleParagraphClasses() {
      return {
        visible: this.visible,
        hidden: !this.visible,
      };
    },
  },

  methods: {
    toggleParagraph() {
      this.visible = !this.visible;
    },
  },
});

app.mount('#assignment');
