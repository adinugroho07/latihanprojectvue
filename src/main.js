import { createApp } from 'vue';
import App from './App.vue';
import BasedCard from './components/UI/BaseCard.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseDialog from './components/UI/BaseDialog.vue';

const app = createApp(App);
app.component('BaseCard', BasedCard);
app.component('BaseDialog', BaseDialog);
app.component('BaseButton', BaseButton);
app.mount('#app');
