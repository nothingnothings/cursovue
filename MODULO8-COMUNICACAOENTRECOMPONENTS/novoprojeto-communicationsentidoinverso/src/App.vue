<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <ul>

      <!--versão estática do prop 'is-favorite'-->
      <!-- <friend-contact 
       v-for="friend in friends"
       :key="friend.name" 
       :name="friend.name" 
       :phone-number="friend.phone"
      :email-address="friend.email" 
      :is-favorite="true"
      
      
      >
      </friend-contact> -->



      <friend-contact v-for="friend in friends" :key="friend.name" :name="friend.name" :id="friend.id"
        :phone-number="friend.phone" :email-address="friend.email" :is-favorite="friend.isFavorite"
        @custom-event-created-by-me="toggleFavoriteStatus">
      </friend-contact>
    </ul>
  </section>


</template>

<script>

export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "0123 45678 90",
          email: "manuel@localhost.com",
          isFavorite: true
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "0987 654421 21",
          email: "julie@localhost.com",
          isFavorite: false
        },
      ],
    };
  },


  methods: {
    toggleFavoriteStatus(friendId) {  ///como esse method está BINDADO ao custom event de 'custom-event-created-by-me', ELE VAI RECEBER OS ARGUMENTOS PASSADOS POR ESSE NOSSO CUSTOM EVENT (no caso, será o 'id' de cada friend, passado como segundo argumento de 'this.$emit()' ...)
      // alert('this works, inverse component communication works!')

      const friendsCopy = this.friends;


      const friendIndex = friendsCopy.findIndex(
        (friend) => {
         return friend.id === friendId;
        }
      )
      friendsCopy[friendIndex].isFavorite = !friendsCopy[friendIndex].isFavorite;

      this.friends = friendsCopy;
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
</style>