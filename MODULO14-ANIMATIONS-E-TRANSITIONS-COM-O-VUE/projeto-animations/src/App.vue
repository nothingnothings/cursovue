<template>
  <div>
    <div class="container">
      <div
        class="block"
        :class="{
          'active-block': this.animatedBlock,
        }"
      ></div>
      <button @click="animateBlock()">Animate</button>
    </div>
    <div class="container">
      <!-- <Transition>
        <p v-if="paragraphIsVisible" class="paragraph">
          This is sometimes visible...
        </p>
      </Transition> -->
      <Transition>
        <h1 v-if="show">I AM A HEADING</h1>
      </Transition>
      <button @click="show = !show">Toggle Paragraph</button>
    </div>
    <base-modal @close="hideDialog" v-if="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>
  </div>
</template>  

<script>
export default {
  data() {
    return {
      dialogIsVisible: false,
      animatedBlock: false,
      paragraphIsVisible: false,
      show: true,
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  /* transition é sempre settada na class BASE de algum elemento (antes de receber 1 class condicional/'ativa') 
  */
  /* transition -> /(PROPRIEDADE QUE SERÁ ANIMADA)/(DURAÇÃO DA ANIMAÇÃO)/(CURVA DE ACELERAÇÃO DA ANIMAÇÃO)  */
  /* transition: transform 0.3s ease-out; */
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}

.active-block {
  /* transform: translateX(-180px);   USADO COM 'transition'*/

  /* (NOME DA ANIMATION)/(DURATION DA ANIMATION, QUE SERÁ SPLTITADA AO LONGO DAS KEYFRAMES)/(EASING FUNCTION -> determina se começamos rápido/lento e terminamos rápido/lento) */
  animation: slide-in 0.3s ease-out forwards;
}

@keyframes slide-in {
  0% {
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}

/* SÃO AS 3 CSS CLASSES ADICIONADAS PELO 'VUE', POR DEFAULT, quando vc usa o '<Transition>'... */
/* o normal é 'v-block-enter-from', mas vc pode ASSIGNAR 1 NOME AO SEU COMPONENT 'transition', e então o refernciar por nome.... */
/* .v-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

/* .v-enter-active { */
/* é a class GERAL do animate de 'appears'.. */
/* transition: all 0.3s ease-out forwards;
} */
/* 
.v-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

/* MESMA IDEIA DAS 3 CLASSES ADICIONADAS AO 'ADD' de  animations por meio das classes de 'v-enter-from'.... */
/* .v-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.v-leave-active {
  transition: all 0.3s ease-out forwards;
}

.v-leave-to {
  opacity: 0;
  transform: translateY(30px);
} */


/* .v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
} */


.v-enter-active, .v-leave-active { 
  /* USE ISSO (apenas 'v-enter-active' e 'v-leave-active') NOS CASOS EM QUE VC QUER TER UMA __ANIMATION __ ESPECÍFICA, COMO 'slide-in', nesses caso */
    animation: slide-in 0.3s ease-out;
}
</style>