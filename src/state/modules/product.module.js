import { ProductService } from "../../services/products.service";

export default {
  namespaced: true,
  state: {
    productList: {
      products: [],
      list: ProductService.getProductList(),
      total: 0,
    },
  },
  mutations: {
    UPDATE_PRODUCTS: function (state, payload) {
      state.productList.products.push(payload);
    },
    UPDATE_TOTAL: function (state,payload) {
      state.productList.total = payload
    },
  },

  actions: {
    updateProducts: function ({ commit }, payload) {
      return commit("UPDATE_PRODUCTS", payload);
    },
  },
};
