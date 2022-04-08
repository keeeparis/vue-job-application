import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

const app = createApp(App);

// подключаем vue store для state management
app.use(createPinia());

app.mount("#app");
