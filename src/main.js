import { createApp } from "vue";
// import VueFormulate from "@braid/vue-formulate";
// import paystack from 'vue-paystack';
import App from "./App.vue";
import router from "./router";
import Landing from "./components/landing-content.vue";
import LandingButton from "./components/landingbutton.vue";
import BusinessLocal from "./components/forms/business-local.vue";
import BioData from "./components/forms/bio-data.vue";
import BusinessDetails from "./components/forms/business-details.vue";
import AccountDetails from "./components/forms/account-details.vue";
import TheModalComponent from "./components/TheModalComponent.vue";
import CombinedNav from "./components/combineNav.vue";
import DashedNav from "./components/dashNav.vue";
import "./index.css";
import "./assets/main.css";
import "flowbite";
import store from "./state/store";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(Toast);
app.component("LandingComponent", Landing);
app.component("LandingButton", LandingButton);
app.component("BusinessLocal", BusinessLocal);
app.component("BioData", BioData);
app.component("ModalComponent", TheModalComponent);
app.component("CombinedNav", CombinedNav);
app.component("DashedNav", DashedNav);
// app.use(CoreuiVue);
// app.use(CCarousel);
// app.use(CCarouselItem);
app.component("BusinessDetails", BusinessDetails);
app.component("AccountDetails", AccountDetails);

app.mount("#app");
