const app = Vue.createApp({
  data() {
    return {
      goals: [],
      userInput: '',
      exampleObject: {
        name: 'Max',
        age: 31,
      },
    };
  },
  watch: {},
  computed: {},
  methods: {
    addGoal() {
      this.goals.push(this.userInput);
    },

    removeGoal(indexParameter) {
        console.log('example');
      this.goals.splice(indexParameter, 1);
    },
  },
});

app.mount('#user-goals');
