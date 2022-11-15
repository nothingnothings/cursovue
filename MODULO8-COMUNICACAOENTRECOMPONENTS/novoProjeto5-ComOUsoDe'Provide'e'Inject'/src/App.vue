<template>
  <div>
    <active-element :topic-title="activeTopic && activeTopic.title" :text="activeTopic && activeTopic.fullText">
    </active-element>
    <!-- <knowledge-base :topics="topics" @select-topic="activateTopic"></knowledge-base> --> <!-- SEM USO DE 'INJECT-PROVIDE'-->
    <knowledge-base></knowledge-base> <!-- COM USO DE 'INJECT-PROVIDE'-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      topics: [
        {
          id: 'basics',
          title: 'The Basics',
          description: 'Core Vue basics you have to know',
          fullText:
            'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
        },
        {
          id: 'components',
          title: 'Components',
          description:
            'Components are a core concept for building Vue UIs and apps',
          fullText:
            'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
        },
      ],
      activeTopic: null,
    };
  },
  methods: {
    activateTopic(topicId) {
      this.activeTopic = this.topics.find((topic) => topic.id === topicId);
    },
  },

  // provide: { ////VERSÃO QUE NÃO REPASSA AS 'MUDANÇAS FEITAS NA SUA DATA' aos injected components. É menos recomendada do que a de baixo....
  //   topics: [
  //     {
  //       id: 'basics',
  //       title: 'The Basics',
  //       description: 'Core Vue basics you have to know',
  //       fullText:
  //         'Vue is a great framework and it has a couple of key concepts: Data binding, events, components and reactivity - that should tell you something!',
  //     },
  //     {
  //       id: 'components',
  //       title: 'Components',
  //       description:
  //         'Components are a core concept for building Vue UIs and apps',
  //       fullText:
  //         'With components, you can split logic (and markup) into separate building blocks and then combine those building blocks (and re-use them) to build powerful user interfaces.',
  //     },
  //   ],
  // }



  provide() { ///VERSÃO MAIS RECOMENDADA DE ESCREVER O 'provide' (como se fosse um METHOD) --> com isso, podemos fazer com que a 'DATA' que é alterada em nosso app REALMENTE SEJA REPASSADA aos 'injected components' (components que sofreram injeções) ---> AÍ REALMENTE HÁ UMA COMUNICAÇÃO ENTRE 'A DATA QUE FOI/É ALTERADA' e os COMPONENTS QUE RECEBEM INJEÇÕES (e que vão receber essas mudanças)..
    //sintaxe parecida com a de 'data' (e comportamento similar, também)...
    return {

      topics: this.topics, ///COM ISSO, estou me referindo à propriedade/object de 'topics' lá em 'data(){}' -> provide de uma PROPRIEDADE de data/object de 'data'...
      selectTopic: this.activeTopic //COM ISSO, ESTOU ME REFERINDO à função/method 'activateTopic', que quero PASSAR ADIANTA, sem 'pass-through components', AO _ COMPONENT DE 'knowledgeElement'...
    }
  },

  mounted() {
    setTimeout(
      () => {
        this.topics.push(
          {
            id: 'events',
            title: 'Events',
            description: 'Events are important in Vue',
            fullText: 'Events are cool.'
          }
        )
      },
      3000
    )
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

section {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 2rem auto;
  max-width: 40rem;
  padding: 1rem;
  border-radius: 12px;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
}

li {
  border-radius: 12px;
  border: 1px solid #ccc;
  padding: 1rem;
  width: 15rem;
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

h2 {
  margin: 0.75rem 0;
  text-align: center;
}

button {
  font: inherit;
  border: 1px solid #c70053;
  background-color: #c70053;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 30px;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #e24d8b;
  border-color: #e24d8b;
}
</style>