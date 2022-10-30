const app = Vue.createApp({
  data() {
    return {
      goals: [],
      userInput: '',
    };
  },
  watch: {},
  computed: {},
  methods: {




    addGoal() {
      this.goals.push(this.userInput);
    },
  },
});

app.mount('#user-goals');
