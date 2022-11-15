<template>
  <ul>
    <knowledge-element v-for="topic in topics" :key="topic.id" :id="topic.id" :topic-name="topic.title"
      :description="topic.description" @select-topic="$emit('select-topic', $event)">

    </knowledge-element>
  </ul>
</template>

<script>
export default {
  // props: ['topics'], ///substituído pelo 'PROVIDE'/'INJECT'...

  inject: [ ///parecido com a sintaxe de 'props', mas _ SE UTILIZA DE 'PROVIDE/INJECT' (para evitar o uso de PASS-THROUGH components, components MEDIADORES.. )
    'topics'
  ],
  emits: ['select-topic']
};
</script>