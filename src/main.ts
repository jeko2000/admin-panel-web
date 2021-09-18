import { createApp } from "vue";
import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseForm from './components/UI/BaseForm.vue';
import App from './App.vue';

const app = createApp(App)
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-form', BaseForm);
app.mount('#app');
