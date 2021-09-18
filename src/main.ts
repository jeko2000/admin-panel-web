import App from './App.vue';
import BaseButton from './components/UI/BaseButton.vue';
import BaseCard from './components/UI/BaseCard.vue';
import BaseForm from './components/UI/BaseForm.vue';
import BaseRouterLink from './components/UI/BaseRouterLink.vue';
import router from './router'
import { createApp } from "vue";

const app = createApp(App)
app.component('base-button', BaseButton);
app.component('base-card', BaseCard);
app.component('base-form', BaseForm);
app.component('base-router-link', BaseRouterLink);
app.use(router);
app.mount('#app');
