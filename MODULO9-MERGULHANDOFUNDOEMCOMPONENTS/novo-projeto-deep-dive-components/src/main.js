import { createApp } from 'vue';
// import BadgeList from './components/BadgeList.vue';
import BaseBadge from './components/BaseBadge.vue';
//import TheHeader from './components/TheHeader.vue';
// import UserInfo from './components/UserInfo.vue';
import App from './App.vue';
// import BaseCard from './components/BaseCard.vue';
import BaseCard from './components/BaseCardNamedSlots.vue';

const app = createApp(App);

// app.component('badge-list', BadgeList);
app.component('base-badge', BaseBadge); ///ESTE REALMENTE É USADO GLOBALMENTE (é usado tanto em 'badge-list' como em 'user-info' )
app.component('base-card', BaseCard); ////queremos que ele seja global, também...

//app.component('the-header', TheHeader); ///REMOVEMOS ESSE IMPORT GLOBAL DE 'HEADER', PQ ELE NÃO É UTILIZADO AO LONGO DE TODO NOSSO APP (coisa redundante, desnecessária)...
// app.component('user-info', UserInfo);

app.mount('#app');
