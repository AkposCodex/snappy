import { object } from "yup";
import productModule from "./product.module";

const getInitialState = () => {
  return {
    user: {
      id: "",
      bio: {
        firstName: "",
        lastName: "",
        emailAddress: "",
        bvn: "",
        password: "",
        phoneNumber: "",
        customerCode: "",
      },
      businessDetails: {
        businessType: "",
        businessName: "",
      },
      businessLocal: {
        address: "",
        city: "",
        state: "",
        localGovernment: "",
      },
      mainAddress: "",
      account: { bank: "", accountNumber: "", accountName: "", bankCode: "" },
      stage: 1,
      isLoggedIn: false,
      details: [],
      geoLocation: {
        Latitude: "",
        Longitude: "",
      },
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
    ADD_ID: function (state, payload) {
      state.user.id = payload;
    },
    UPDATE_ADDRESS: function (state, payload) {
      state.user.mainAddress = payload;
    },
    UPDATE_LOCATION: function (state, payload) {
      state.user.geoLocation.Latitude = payload.lat;
      state.user.geoLocation.Longitude = payload.lon;
    },
    LOGOUT: function (state) {
      state.user.isLoggedIn = false;
      Object.assign(state, getInitialState());
    },
    SET_CUSTOMERCODE: function (state, payload) {
      state.user.bio.customerCode = payload;
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
    updateID({ commit }, payload) {
      return commit("ADD_ID", payload);
    },
    logout({ commit }) {
      return commit("LOGOUT")
      // .then(commit("productModule/cleartotal"));
    },
    setCustomerCode({ commit }, payload) {
      return commit("SET_CUSTOMERCODE", payload);
    },
    updateAddress({ commit }, payload) {
      return commit("UPDATE_ADDRESS", payload);
    },
    updateLocation({ commit }, payload) {
      return commit("UPDATE_LOCATION", payload);
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
