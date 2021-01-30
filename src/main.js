import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import UUID from "vue-uuid";

import "@/assets/common.scss";

createApp(App)
  .use(store, UUID)
  .mount("#app");
