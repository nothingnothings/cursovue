<template>
  <div>
    <div class="container">
      <div
        class="block"
        :class="{
          'active-block': this.animatedBlock,
        }"
      ></div>
      <Transition name="dummy2">
        <div v-if="show" class="block2"></div>
      </Transition>
      <button @click="animateBlock()">Animate</button>
    </div>
    <div class="container">
      <!-- <Transition>
        <p v-if="paragraphIsVisible" class="paragraph">
          This is sometimes visible...
        </p>
      </Transition> -->

      <!-- 'BEFORE-ENTER' será triggado __ SEMPRE QUE __a CLASS DE 'enter-from' for adicionada a seu elemento, por meio desse wrapper de 'transition'...-->
      <Transition
        name="para"
        @before-enter="beforeEnter"
        @enter="enter"
        @after-enter="afterEnter"
        @before-leave="beforeLeave"
        @leave="leave"
        @after-leave="afterLeave"
      >
        <h1 v-if="show">I AM A HEADING</h1>
      </Transition>

      <Transition
        name="para2"
        @before-enter="beforeEnter2"
        @enter="enter2"
        @after-enter="afterEnter2"
        @before-leave="beforeLeave2"
        @leave="leave2"
        @after-leave="afterLeave2"
        @enter-cancelled="enterCancelled"
        @leave-cancelled="leaveCancelled"
      >
        <h1 v-if="show">I AM A HEADING</h1>
      </Transition>

      <!-- <Transition
      enter-active-class=""
      leave-active-class=""
      enter-from-class="feature-enter-from"
      enter-to-class=""
      leave-from-class="feature-from-leave"
      leave-to-class="">
        <h1 v-if="show">I AM A HEADING</h1>
      </Transition> -->
      <button @click="show = !show">Toggle Paragraph</button>
    </div>
    <!-- <Transition name="modal"> -->
    <!-- <base-modal @close="hideDialog" v-if="dialogIsVisible">
        <p>This is a test dialog!</p>
        <button @click="hideDialog">Close it!</button>
      </base-modal> -->

    <base-modal @close="hideDialog" :open="dialogIsVisible">
      <p>This is a test dialog!</p>
      <button @click="hideDialog">Close it!</button>
    </base-modal>
    <!-- </Transition> -->
    <div class="container">
      <button @click="showDialog">Show Dialog</button>
    </div>

    <div class="container">
      <!-- EXEMPLO DE 'TRANSITIONING BETWEEN MULTIPLE COMPONENTS'-->
      <!-- esse é o único caso em que podemos colocar múltiplos direct child elements para 1 mesmo wrapper de 'Transition'...-->
      <!-- APENAS COM 'v-else' GARANTIMOS, AO VUE, QUE APENAS 1 DESSES ELEMENTOS SERÁ RENDERIZADO NA TELA, AT A GIVEN TIME...-->
      <!-- com 'mode', PODEMOS CONTROLAR QUAL ELEMENT DEVERÁ SER ANIMADO ANTES, EM VEZ DE ANIMAR AMBOS OS ELEMENTS AO MESMO TEMPO (que não é o que desejamos) -->
      <Transition name="fade-button" mode="out-in">
        <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
        <button @click="hideUsers" v-else>Hide Users</button>
      </Transition>
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
      usersAreVisible: false,
      opacityIncreaseInterval: null,
      opacityDecreaseInterval: null
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
      console.log(this.dialogIsVisible);
    },
    hideDialog() {
      this.dialogIsVisible = false;
      console.log(this.dialogIsVisible);
    },
    animateBlock() {
      this.animatedBlock = !this.animatedBlock;
    },
    toggleParagraph() {
      this.paragraphIsVisible = !this.paragraphIsVisible;
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },

    // EXEMPLIFICAM OS TRIGGERS DE 'TRANSITION' (pq o elemento 'transition' em si dispara events, events como 'before-enter'...)

    beforeEnter(el) {
      // esses disparos de events tbm nos dão acesso aos ACTUAL ELEMENTS ANIMADOS/TRANSICIONADOS... (para coisas como 'mudar coisas do elemento em si')
      console.log('beforeEnter Reached', el);
    },

    enter(el) {
      console.log('enter Reached', el);
    },

    afterEnter(el) {
      console.log('afterEnter Reached', el);
    },

    beforeLeave(el) {
      console.log('beforeLeave Reached', el);
    },

    leave(el) {
      console.log('leave Reached', el);
    },
    afterLeave(el) {
      console.log('afterLeave Reached', el);
    },

    // EXEMPLO DE ANIMATION FEITA INTEIRAMENTE COM JAVASCRIPT...
    ///'done' é USADO APENAS EM CASES EM QUE VC N QUER USAR CSS ANIMATIONS PARA CONTROLAR SUAS ANIMATIONS (animação apenas com javascript e propriedades do dom)...
    //o 'done' é chamado para EXPLICITAR AO VUE QUE VC ESTÁ 'DONE' com essa fase (no caso, com 'enter2')...
    beforeEnter2(
      el
      //  done
    ) {
      el.style.opacity = 0;
    },

    enter2(el, done) {
      let round = 1;
      this.opacityIncreaseInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round++;
        if (round > 100) {
          clearInterval(this.opacityIncreaseInterval);
          done();
        }
      }, 20);
    },

    afterEnter2(
      el
      // done
    ) {
      console.log('REACHED AFTERENTER', el);
    },

    beforeLeave2(
      el
      // done
    ) {
      el.style.opacity = 1;
    },

    leave2(el, done) {
      let round = 100;
      this.opacityDecreaseInterval = setInterval(() => {
        el.style.opacity = round * 0.01;
        round--;
        if (round === 0) {
          clearInterval(this.opacityDecreaseInterval);
          done();
        }
      }, 20);
    },
    afterLeave2(
      el
      //  done
    ) {
      console.log('REACHED AFTERLEAVE', el);
    },

    enterCancelled() {
      clearInterval(this.opacityIncreaseInterval)
    },

    leaveCancelled() {
      clearInterval(this.opacityDecreaseInterval)
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

.block2 {
  width: 8rem;
  height: 8rem;
  background-color: red;
  margin-bottom: 2rem;
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

/* .v-enter-active, .v-leave-active {  */
/* USE ISSO (apenas 'v-enter-active' e 'v-leave-active') NOS CASOS EM QUE VC QUER TER UMA __ANIMATION __ ESPECÍFICA, COMO 'slide-in', nesses caso */
/* animation: slide-in 0.3s ease-out; */
/* } */

.para-enter-active,
.para-leave-active {
  animation: slide-in 0.3s ease-out;
}

/* .dummy2-enter-from {
  opacity: 0;
  transform: translateY(-30px);
} */

.dummy2-enter-active,
.dummy2-leave-active {
  animation: slide-in 0.3s ease-out;
}

/* .dummy2-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

/* .modal-enter-from {
  opacity: 0;
  transform: translateY(-200px);
} */

/* .modal-enter-active,
.modal-leave-active { */
/* transition: all 0.25s ease-out; */
/* animation: modal 0.3s ease-out;
} */

/* .modal-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

/* @keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
} */

.fade-button-enter-from,
.fade-button-leave-to {
  opacity: 0;
}

.fade-button-enter-active {
  transition: opacity 0.3s ease-out;
}

.fade-button-leave-active {
  transition: opacity 0.3s ease-in;
}
.fade-button-enter-to,
.fade-button-leave-from {
  opacity: 1;
}

/* .fade-button-enter-from {
} */
</style>