import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import authService from "../services/snappyService/AuthService";
import shippingService from "../services/snappyService/ShippingService";

import productModule from "./modules/product.module";
import userModule from "./modules/user.module";
import orderModule from "./modules/order.module";
const store = createStore({
  state: {},
  plugins: [createPersistedState()],
  mutations: {},
  actions: {
    loadPoints: async (context, data) => {
      const resp = await authService.loadPoints({
        address: encodeURIComponent(data.address),
        key: data.apiKey,
      });
      const latLng = resp.data.results[0].geometry.location;

      console.log(resp, latLng);
      return latLng;
    },
    loadLogin: async (context, data) => {
      const resp = await authService.login();
      // const latLng = resp.data.results[0].geometry.location;
      console.log(resp.data.Object.access_token);
      console.log(resp);
    },
    loadShipmentPrice: async (context, data) => {
      const resp = await shippingService.getDispatchPrice(data);
      console.log(resp);
      const price = resp.data.Object.DeliveryPrice;
      console.log(price);
      return price;
    },
    loadStations: async () => {
      const resp = await shippingService.getStations();
      console.log(resp);
    },
    createOrder: async () => {
      const resp = await shippingService.getDispatchPrice();
      console.log(resp);
    },
  },
  modules: {
    productModule,
    userModule,
    orderModule,
  },
  getters: {
    getProductState(state) {
      return state.productModule.productList;
    },
    getUserState(state) {
      return state.userModule.user;
    },
    getStage(state) {
      return state.userModule.user.stage;
    },
    getUser(state) {
      return state.userModule.user.isLoggedIn;
    },
    getAddress(state) {
      return state.userModule.user.mainAddress;
    },
    getPhone(state) {
      return state.userModule.user.bio.phoneNumber;
    },
    getTotal(state) {
      return state.productModule.productList.total;
    },
  },
});

export default store;
