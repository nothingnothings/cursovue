
<template>
  <!-- USADO PARA EXEMPLIFICAR O USO DE ANIMATIONS, DO VUE, COM LISTS...-->
  <div>
    <!-- <ul> -->
    <!-- <transition> .... SE FOR TRABALHAR COM LIST ITEMS DENTRO DE 1 LIST, USE 'transition-group', e não 'transition'-->
    <transition-group tag="ul" name="user-list">
      ><!-- COM A PROPRIEDADE 'tag=""', DEFINIMOS QUAL _ _ ELEMENTO DEVERÁ SER RENDERIZADO __ NO LUGAR DESSE 'transition-group'-->
      <li @click="removeUser(user)" v-for="user in users" :key="user">
        {{ user }}
      </li>
    </transition-group>
    <!-- </transition> -->
    <!-- </ul> -->

    <div>
      <input type="text" ref="userNameInput" />
      <button @click="addUser">Add User</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      users: ['Max', 'Manu', 'Julie', 'Angela', 'Michael'],
    };
  },

  methods: {
    addUser() {
      const enteredUserName = this.$refs.userNameInput.value;
      this.users.unshift(enteredUserName);
    },

    removeUser(user) {
      this.users = this.users.filter((usr) => usr !== user);
    },
  },
};
</script>



<style scoped>
ul {
  list-style: none;
  margin: 1rem 0;
  padding: 0;
}

li {
  border: 1px solid #ccc;
  padding: 1rem;
  text-align: center;
}

/* USADO COM 'transition-group' */
.user-list-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.user-list-enter-active {
  transition: all 1s ease-out;
}

.user-list-enter-to,
.user-list-leave-from {
  opacity: 1;
  transform: translateX(-30px);
}

.user-list-leave-active {
  transition: all 1s ease-in;
  position: absolute; 
  /* position absolute EVITA O 'SNAP BACK' dos items, quando eles são removidos */
}

.user-list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* --> '-move' É UMA CLASS ESPECIAL QUE O VUE ADICIONA A TODOS OS ELEMENTOS QUE NÃO ESTARÃO 

SENDO 'MOVED' COM O 'TRANSITION GROUP' (o resto da lista, basicamente)... */
.user-list-move {
  transition: transform 0.8s ease; 
  /* COM ISSO, EVITAMOS O COMPORTAMENTO DE 'SNAPPING BACK' dos list items.. */
}
</style>