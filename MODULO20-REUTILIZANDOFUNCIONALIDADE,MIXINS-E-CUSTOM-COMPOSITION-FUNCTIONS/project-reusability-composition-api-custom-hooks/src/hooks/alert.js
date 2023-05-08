import { ref } from 'vue';

//? naming convention
export function useAlert(startingVisibility = false) {
  //podemos definir QUANTOS PARÂMETROS DESEJARMOS...

  // const alertIsVisible = ref(false);
  const alertIsVisible = ref(startingVisibility);

  function showAlert() {
    alertIsVisible.value = true;
  }
  function hideAlert() {
    alertIsVisible.value = false;
  }

  return [alertIsVisible, showAlert, hideAlert];
}
