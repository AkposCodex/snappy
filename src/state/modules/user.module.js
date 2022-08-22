import { object } from "yup";

const getInitialState = () => {
  return {
    user: {
      bio: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        phoneNumber: "",
        bvn: "",
        password: '',
      },
      businessDetails: {
        businessType: "",
        businessName: "",
      },
      businessLocal: {
        address: "",
        state: "",
        country: "",
        localGovernment: "",
      },
      account: { bank: "", accountNumber: "" },
      stage: 1,
      isLoggedIn: false,
      details: [],
    },
  };
};

const state = getInitialState();

export default {
  namespaced: true,
  state,
  mutations: {
    LOGIN: function (state) {
      state.user.isLoggedIn = true;
    },
    LOGOUT: function (state) {
      state.user.isLoggedIn = false;
      Object.assign(state, getInitialState());
    },
    CHANGE_STAGE(state) {
      state.user.stage++;
    },
    ADD_USER_BIO: function (state, payload) {
      state.user.bio = payload;
    },
    ADD_BUSINESS_LOC: function (state, payload) {
      state.user.businessLocal = payload;
    },
    ADD_BUSINESS_DET: function (state, payload) {
      state.user.businessDetails = payload;
    },
    ADD_ACCT: function (state, payload) {
      state.user.account = payload;
    },
  },
  actions: {
    login({ commit }) {
      return commit("LOGIN");
    },
    logout({ commit }) {
      return commit("LOGOUT");
    },
    changeStage(context) {
      return context.commit("CHANGE_STAGE");
    },
    addUserBio: function ({ commit }, payload) {
      return commit("ADD_USER_BIO", payload);
    },
    addBusinessLoc: function ({ commit }, payload) {
      return commit("ADD_BUSINESS_LOC", payload);
    },
    addBusinessDet: function ({ commit }, payload) {
      return commit("ADD_BUSINESS_DET", payload);
    },
    addAcct: function ({ commit }, payload) {
      return commit("ADD_ACCT", payload);
    },
  },
  getters: {
    getLoginState(state) {
      return state.user.isLoggedIn;
    },
  },
};
