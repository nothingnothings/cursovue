<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <li>
      </li>
    </ul>
  </section>
</template>

<script>



export default {
  data() {

    return {
      friends: [
        {
          id: 'manuel',
          name: 'Manuel Lorenz',
          phone: '11111111'
        },
        {
          id: 'max',
          name: 'Max schwarz',
          phone: '23412141'
        },
        {
          id: 'Tom',
          name: 'Tom Hanks',
          phone: '1113242421'
        }
      ]
    }
  },

  methods: {

  },

  computed: {

  }
}


</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
