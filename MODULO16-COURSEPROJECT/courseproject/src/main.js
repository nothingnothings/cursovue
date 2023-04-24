import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/store';

import BaseCard from './components/layout/BaseCard.vue';
import BaseButton from './components/layout/BaseButton.vue';
import BaseBadge from './components/layout/BaseBadge.vue';

const app = createApp(App);

app.use(router);
app.use(store);

app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge', BaseBadge);

app.mount('#app');
