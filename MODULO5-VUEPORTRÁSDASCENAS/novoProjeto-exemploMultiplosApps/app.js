const app1 = Vue.createApp({
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
});
app.mount('#app1');

const app2 = Vue.createApp({
  data() {
    return {};
  },
  watch: {},
  computed: {},
  methods: {},
});
app.mount('#app2');



const app3 = Vue.createApp({

  template: `
  <section id="app3">
  <input type="text" @input="saveInput">
  <button @click="setText">
      Set Text
  </button>
  <p>{{ }}</p>
</section>`,
  data() {
    return {


    };
  },
  watch: {},
  computed: {},
  methods: {},
});
app.mount();
