import { ProductService } from "../../services/products.service";

export default {
  namespaced: true,
  state: {
    productList: {
      products: [],
      list: ProductService.getProductList(),
      total: 0,
      pax_qty: 0,
      srs_qty: 0,
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
      state.productList.products.splice(payload,1)
    },
    UPDATE_TOTAL: function (state, payload) {
      state.productList.total = payload;
    },
    INCREMENT_PAX: function (state) {
      state.productList.pax_qty++;
    },
    DECREMENT_PAX: function (state) {
      state.productList.pax_qty++;
    },
    INCREMENT_SRS: function (state) {
      state.productList.srs_qty--;
    },
    DECREMENT_SRS: function (state) {
      state.productList.srs_qty--;
    },
  },

  actions: {
    updateProducts: function ({ commit }, payload) {
      return commit("ADD_PRODUCTS", payload);
    },
    clearProducts: function ({ commit }) {
      return commit("CLEAR_PRODUCTS");
    },
    removeItem: function({commit}, payload){
      return commit("REMOVE_ITEM", payload)
    },
    incrementPax: function ({ commit }) {
      return commit("INCREMENT_PAX");
    },
    decrementPax: function ({ commit }) {
      return commit("DECREMENT_PAX");
    },
    incrementSrs: function ({ commit }) {
      return commit("INCREMENT_SRS");
    },
    decrementSrs: function ({ commit }) {
      return commit("DECREMENT_SRS");
    },
  },
};
