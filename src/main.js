import { createApp , defineAsyncComponent} from 'vue';
import router from './router.js';
import App from './App.vue';
import store from './store/index.js';
import BaseCard from './ui/BaseCard.vue';
import BaseButton from './ui/BaseButton.vue';
import BaseBadge from './ui/BaseBadge.vue';
import BaseSpinner from './ui/BaseSpinner.vue';
// import BaseDialog from './ui/BaseDialog.vue';

const BaseDialog = defineAsyncComponent(() => import('./ui/BaseDialog.vue'));

const app = createApp(App);
app.use(router);
app.use(store);
app.component('base-card', BaseCard);
app.component('base-button', BaseButton);
app.component('base-badge',BaseBadge);
app.component('base-spinner', BaseSpinner);
app.component('base-dialog',BaseDialog);
app.mount('#app');
