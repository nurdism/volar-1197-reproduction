import { createApp } from 'vue';
import App from './App.vue';

window.test = (str: string) => `${str} test`;

const app = createApp(App);
app.mount('#app');
