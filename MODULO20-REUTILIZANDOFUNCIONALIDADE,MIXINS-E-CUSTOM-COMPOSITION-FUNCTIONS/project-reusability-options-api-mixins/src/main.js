import { createApp } from 'vue';

import App from './App.vue';

import globalLoggerMixin from './mixins/global-logger';

const app = createApp(App);

app.mixin(globalLoggerMixin); //? É ASSIM QUE ADICIONAMOS GLOBAL MIXINS....

app.mount('#app');
