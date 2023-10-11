import { createApp } from 'vue';
import App from './App.vue';
import FlagLibraryPage from './components/FlagLibraryPage.vue';

const app = createApp(App);
app.component('FlagLibraryPage', FlagLibraryPage);
app.mount('#app');
