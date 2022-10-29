const app = Vue.createApp({
  data() {
    return {
      message: 'NICE MESSAGE',
      outputText: 'OUTPUT',
      confirmOutputText: '',
    };
  },

  methods: {
    showAlert() {
      alert(this.message);
    },

    inputChangedHandler(event) {
      this.outputText = event.target.value;
    },

    inputChangedHandlerConfirm() {
      this.confirmOutputText = this.outputText;
    },
  },
});

app.mount('#assignment');
