<template>
  <section>
    <h2>Select a Topic</h2>
    <!-- <knowledge-grid :topics="topics" @select-topic="$emit('select-topic', $event)"></knowledge-grid> --> <!-- SEM USO DE 'INJECT-PROVIDE'-->
    <knowledge-grid></knowledge-grid> <!-- COM USO DE 'INJECT-PROVIDE'-->
  </section>
</template>

<script>
export default {
  // props: ['topics'], ////SEM USO DE INJECT-PROVIDE
  // emits: ['select-topic'],
};
</script>