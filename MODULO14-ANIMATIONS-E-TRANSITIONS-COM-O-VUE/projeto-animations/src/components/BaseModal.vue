<template>
  <!-- NÃO PODEMOS TER 2 CHILD ELEMENTS NESSE MODAL, PRECISAMOS QUE ELE SEJA 1 ELEMENTO ÚNICO... -->

  <!-- 1 SOLUÇÃO É CRIAR 1 COMPONENT PARA O BACKDROP, OUTRO PARA O MODAL, E AÍ OS ANIMAR SEPARADAMENTE...-->

  <!-- <div class="backdrop" @click="$emit('close')"></div>
  <dialog open>
    <slot></slot>
  </dialog> -->
  <div>
    <div v-if="open" class="backdrop" @click="$emit('close')"></div>
    <Transition name="modal">
      <dialog v-if="open" open >
        <slot></slot>
      </dialog>
    </Transition>
  </div>
</template>

<script>
export default {
  emits: ['close'],
  props: ['open'],
};
</script>

<style scoped>
.backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.75);
}

dialog {
  /* MODAL - EXEMPLIFICA COMO O ADD/REMOVE DE CLASSES __ SIMPLES, COM O VUE, PODE ÀS VEZES N SER SUFICIENTE... */
  position: fixed;
  top: 30vh;
  width: 30rem;
  left: calc(50% - 15rem);
  margin: 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  padding: 1rem;
  background-color: white;
  z-index: 100;
  border: none;
  /* animation: modal 0.3s ease-out forwards; */
}

.modal-enter-active {
  /* transition: all 0.25s ease-out; */
  animation: modal-enter 0.3s ease-out;
}

.modal-leave-active {
  animation: modal-leave 0.3s ease-out;
}

/* .modal-enter-to {
  opacity: 1;
  transform: translateY(0);
} */

@keyframes modal-enter {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@keyframes modal-leave {
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
}
</style>