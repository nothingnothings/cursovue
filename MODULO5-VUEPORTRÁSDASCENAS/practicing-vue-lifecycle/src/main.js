import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')






// setTimeout(
//   () => {
//     app.unmount(); //DESMONTA NOSSO APP (trigga os hooks de 'unmount')
//   }, 

//   3000
// )