const app = Vue.createApp({
  data() {
    return {
      goals: [],
      userInput: '',
      exampleObject: {
        name: 'Max',
        age: 31
      }
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
