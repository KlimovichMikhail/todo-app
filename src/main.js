import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import { v4 as uuidv4 } from "uuid";

import "@/assets/common.scss";

createApp(App)
  .use(store, uuidv4)
  .mount("#app");
