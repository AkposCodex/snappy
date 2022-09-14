import { ProductService } from "../../services/products.service";

export default {
  namespaced: true,
  state: {
    productList: {
      order: {
        id: "",
        products: [],
      },
      list: ProductService.getProductList(),
      total: 0,
      starter_qty: 0,
      enterprise_qty: 0,
      bespoke_qty: 0,
    },
  },
  mutations: {
    ADD_order: function (state, payload) {
      state.productList.order.products.push(payload);
    },
    CLEAR_order: function (state) {
      state.productList.order.products.length = 0;
    },
    CLEAR_QTY: function (state) {
      state.productList.starter_qty = 0;
      state.productList.enterprise_qty = 0;
      state.productList.bespoke_qty = 0;
    },
    CLEAR_total: function (state) {
      state.productList.total = 0;
    },
    COMPLETE_order: function (state, payload) {
      state.productList.order.id = payload;
    },
    REMOVE_ITEM: function (state, payload) {
      state.productList.order.products.splice(payload.index, 1);
      state.productList.total -= payload.price;
    },
    UPDATE_TOTAL: function (state, payload) {
      state.productList.total += payload;
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
    updateorder: function ({ commit }, payload) {
      return commit("ADD_order", payload);
    },
    clearorder: function ({ commit }) {
      return commit("CLEAR_order");
    },
    cleartotal: function ({ commit }) {
      return commit("CLEAR_total");
    },
    completeorder: function ({ commit }, payload) {
      return commit("COMPLETE_order", payload);
    },
    updateTotal: function ({ commit }, payload) {
      return commit("UPDATE_TOTAL", payload);
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
    clearQty: function ({ commit }) {
      return commit("CLEAR_QTY");
    },
  },
};
