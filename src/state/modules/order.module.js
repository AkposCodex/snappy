export default {
  namespaced: true,
  state: {
    order: {
      order_id: "",
      user_id: "",
      package_name: "",
      price: 0,
      quantity: 0,
      date_of_purchase: "",
      status: "",
    },
  },
  mutations: {
    CREATE_USER_ID: function (state, payload) {
      state.order.user_id = payload;
    },
    CREATE_ORDER_ID: function (state, payload) {
      state.order.order_id = payload;
    },
    CREATE_PACKAGE_NAME: function (state, payload) {
      state.order.package_name = payload;
    },
    ADD_PRICE: function (state, payload) {
      state.order.price = payload;
    },
    ADD_QUANTITY: function (state, payload) {
      state.order.quantity = payload;
    },
    ADD_DATE: function (state, payload) {
      state.order.date_of_purchase = payload;
    },
    UPDATE_STATUS: function (state, payload) {
      state.order.status = payload;
    },
  },
  actions: {
    createOrderId({ commit }, payload) {
      return commit("CREATE_ORDER_ID", payload);
    },
    createUserId({ commit }, payload) {
      return commit("CREATE_USER_ID", payload);
    },
    createPackageName({ commit }, payload) {
      return commit("CREATE_PACKAGE_NAME", payload);
    },
    addPrice({ commit }, payload) {
      return commit("ADD_PRICE", payload);
    },
    addDate({ commit }, payload) {
      return commit("ADD_DATE", payload);
    },
    addQuantity({ commit }, payload) {
      return commit("ADD_QUANTITY", payload);
    },
    updateStatus({ commit }, payload) {
      return commit("UPDATE_STATUS", payload);
    },
  },
};
