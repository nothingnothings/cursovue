<template>
  <ul>
    <li :class="{active: currentlyActiveButton === 'poor'}" >
      <button 
      type="button" 
 
      @click="selectButtonHandler('poor')"
      
      
      >Poor</button>
    </li>
    <li :class="{active: currentlyActiveButton === 'average'}">
      <button type="button"   @click="selectButtonHandler('average')">
        Average
      </button>
    </li>
    <li :class="{active: currentlyActiveButton === 'great'}">
      <button type="button"   @click="selectButtonHandler('great')">Great</button>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      currentlyActiveButton: null,
    };
  },

  methods: {
    selectButtonHandler(type) {
      this.currentlyActiveButton = type;
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0.5rem 0;
  padding: 0;
  display: flex;
}

li {
  margin: 0 1rem;
  border: 1px solid #ccc;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

button {
  font: inherit;
  border: none;
  background-color: transparent;
  cursor: pointer;
}

.active {
  border-color: green;
}

.active button {
    color: green;
}
</style>
