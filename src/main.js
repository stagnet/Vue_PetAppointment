import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import Vuecidity from "vuecidity";
import "../node_modules/vuecidity/dist/lib/vuecidity.min.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faPlus,
  faMinus,
  faTrash,
  faCheck,
} from "@fortawesome/free-solid-svg-icons";

library.add(faPlus, faMinus, faTrash, faCheck);

Vue.use(Vuecidity);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
