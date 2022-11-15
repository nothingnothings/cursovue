<template>
  <li>
    <h3>{{ topicName }}</h3>
    <p>{{ description }}</p>
    <!-- <button @click="$emit('select-topic', id)">Learn More</button> -->
    <!-- CÓDIGO SEM 'PROVIDE-INJECT'-->
    <button @click="selectTopic(id)">Learn More</button> <!-- CÓDIGO COM INJECT de um METHOD-->
  </li>
</template>

<script>
export default {
  props: ['id', 'topicName', 'description'],
  // emits: ['select-topic'], ///SEM O USO DE 'provide-inject'
  inject: ['selectTopic'] ///COM O USO DE 'provide-inject'
};
</script>