<template>
  <header>
    <nav>
      <ul>
        <li>
          <!-- <button @click="setActivePage('teams-list')">Teams</button> -->
          <router-link to="/teams">Teams</router-link>
        </li>
        <li>
          <!-- <button @click="setActivePage('users-list')">Users</button> -->
          <router-link to="/users">Users</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  emits: ['set-page'],
  methods: {
    setActivePage(page) {
      this.$emit('set-page', page);
    },
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #11005c;
}

nav {
  height: 100%;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 2rem;
}

/*
button {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

button:hover,
button:active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}
*/

a {
  font: inherit;
  background: transparent;
  border: 1px solid transparent;
  text-decoration: none;
  cursor: pointer;
  color: white;
  padding: 0.5rem 1.5rem;
  display: inline-block;
}

/* a:hover,
a:active {
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
} */

/* 'a.router-link-active' --> é o nome da class que fica em uma ANCHOR-TAG, quando vc usa o routing */

a:hover,
a:active,
a.router-link-active {  
  color: #f1a80a;
  border-color: #f1a80a;
  background-color: #1a037e;
}



/* 
--> COMO 1 SIDE-NOTE,





TEMOS 2 CLASSES COM O VUE:





O 'router-link-active' 



e 



o 



'router-link-exact-active'... */

/* A DIFERENÇA ENTRE OS 2 É QUE 


'router-link-active'


TAMBÉM 

SERIA APLICADO AO ITEM DE 'Users' (na toolbar) 



SE TIVÉSSEMOS UMA 'NESTED ROUTE'....

(

  tipo 

  'domain.com/users/user' (aí, o 'users' ficaria highlighted TAMBÉM... se tivéssemos 'router-link-exact-active', ELE NÃO FICARIA LIGADO/ATIVADO)...
) */
</style>





