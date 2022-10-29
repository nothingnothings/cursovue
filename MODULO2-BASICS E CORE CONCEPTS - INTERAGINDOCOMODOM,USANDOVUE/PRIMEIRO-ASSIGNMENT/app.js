const app = Vue.createApp({
  data() {
    return {
      name: 'Arthur',
      age: 24,
      imageURL:
        'https://forum.sublimetext.com/uploads/default/original/3X/5/7/5799693291b7565096a86e34d51a9d9efe406b3a.png',
    };
  },

  methods: {
    randomNumber() {
      return Math.random();
    },

    calculateAge() {
      return this.age + 5;
    },
  },
});

app.mount('#assignment');
