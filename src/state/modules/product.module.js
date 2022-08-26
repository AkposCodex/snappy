import { ProductService } from "../../services/products.service";

export default {
  namespaced: true,
  state: {
    productList: {
      products: [],
      list: ProductService.getProductList(),
      total: 0,
      starter_qty: 0,
      enterprise_qty: 0,
      bespoke_qty: 0,
    },
  },
  mutations: {
    ADD_PRODUCTS: function (state, payload) {
      state.productList.products.push(payload);
    },
    CLEAR_PRODUCTS: function (state) {
      state.productList.products.length = 0;
    },
    REMOVE_ITEM: function (state, payload) {
      state.productList.products.splice(payload, 1);
    },
    UPDATE_TOTAL: function (state, payload) {
      state.productList.total = payload;
    },
    INCREMENT_STARTER: function (state) {
      state.productList.starter_qty++;
    },
    DECREMENT_STARTER: function (state) {
      state.productList.starter_qty--;
    },
    INCREMENT_ENTERPRISE: function (state) {
      state.productList.enterprise_qty++;
    },
    DECREMENT_ENTERPRISE: function (state) {
      state.productList.enterprise_qty--;
    },
    INCREMENT_BESPOKE: function (state) {
      state.productList.bespoke_qty++;
    },
    DECREMENT_BESPOKE: function (state) {
      state.productList.bespoke_qty--;
    },
  },

  actions: {
    updateProducts: function ({ commit }, payload) {
      return commit("ADD_PRODUCTS", payload);
    },
    clearProducts: function ({ commit }) {
      return commit("CLEAR_PRODUCTS");
    },
    removeItem: function ({ commit }, payload) {
      return commit("REMOVE_ITEM", payload);
    },
    incrementStarter: function ({ commit }) {
      return commit("INCREMENT_STARTER");
    },
    decrementStarter: function ({ commit }) {
      return commit("DECREMENT_STARTER");
    },
    incrementEnterprise: function ({ commit }) {
      return commit("INCREMENT_ENTERPRISE");
    },
    decrementEnterprise: function ({ commit }) {
      return commit("DECREMENT_ENTERPRISE");
    },
    incrementBespoke: function ({ commit }) {
      return commit("INCREMENT_BESPOKE");
    },
    decrementBespoke: function ({ commit }) {
      return commit("DECREMENT_BESPOKE");
    },
  },
};
