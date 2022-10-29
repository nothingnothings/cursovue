const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },

  computed: {
    message() {
      if (this.result < 37) {
        return 'Not there yet!';
      } else if (this.result === 37) {
        return '';
      } else {
        return 'Too much!';
      }
    },
  },

  watch: {
    // result() {  ////fiz watch do 'counter', quando deveria ter feito da 'message' computed property...
    //   const that = this;
    //   setTimeout(() => {
    //     console.log('example');
    //     that.result = 0;
    //   }, 5000);
    // },

    message() {
      console.log('EXAMPLE');
      const that = this;
      setTimeout(() => {
        console.log('example');
        that.result = 0;
      }, 5000);
    },
  },

  methods: {
    add(number) {
      this.result = this.result + number;
    },
  },
});

app.mount('#assignment');
