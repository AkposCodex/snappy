import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import authService from "../services/snappyService/AuthService";
import shippingService from "../services/snappyService/ShippingService";

import productModule from "./modules/product.module";
import userModule from "./modules/user.module";
import orderModule from "./modules/order.module";
import paystackService from "../services/snappyService/paystackService";
const store = createStore({
  state: {
    banks: [],
  },
  plugins: [createPersistedState()],
  mutations: {
    ADD_BANKS: function (state, payload) {
      state.banks.push(payload);
    },
  },
  actions: {
    loadPoints: async (context, data) => {
      const resp = await authService.loadPoints({
        address: encodeURIComponent(data.address),
        key: data.apiKey,
      });
      const latLng = resp.data.results;

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
    loadBanks: async function ({ commit }, payload) {
      const resp = await paystackService.getBanks();
      console.log(resp);
      return commit("ADD_BANKS", (payload = resp.data));
    },
    createUser: async (context, e) => {
      const resp = await paystackService.createUser(e);
      console.log(resp);
      return resp;
    },
    verifyUser: async (context, e) => {
      const resp = await paystackService.verifyUser(e);
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
    getCustomerCode(state) {
      return state.userModule.user.bio.customerCode;
    },
    getOrderState(state) {
      return state.orderModule.order;
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
    getBanks(state) {
      return state.banks;
    },
  },
});

export default store;
