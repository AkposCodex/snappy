import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

import productModule from "./modules/product.module";
import userModule from "./modules/user.module";
const store = createStore({
  state: {},
  plugins:[
    createPersistedState()
  ],
  mutations: {},
  actions: {},
  modules: {
    productModule,
    userModule,
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
    getUser(state){
      return state.userModule.user.isLoggedIn;
    }
  },
});

export default store;
