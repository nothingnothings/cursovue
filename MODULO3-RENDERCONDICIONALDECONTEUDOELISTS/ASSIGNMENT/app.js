const app = Vue.createApp({
  data() {
    return {
      userInput: '',
      listIsVisible: true,
      tasks: [],
    };
  },
  watch: {},
  computed: {
    buttonMessage() {
      return this.listIsVisible ? 'Hide' : 'Show';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.userInput);
    },

    toggleListShow() {
      this.listIsVisible = !this.listIsVisible;
    },
  },
});
app.mount('#assignment');
