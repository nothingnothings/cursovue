/*  eslint-disable  */
import { createApp } from 'vue';
import App from './App.vue';

const app = createApp(App);

app.component('active-user');

app.component('user-data');

app.mount('#app');




requireConfigFile: false