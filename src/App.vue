<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    btnClick: function () {
      this.$router.push({ path: "/sign-up" });
    },
    logout() {
      this.$store.dispatch("userModule/logout").then(() => {
        this.$store.dispatch("productModule/clearorder");
        this.$router.push({ name: "home" });
      });
      console.log(this.user);
    },
    show() {
      this.menu = !this.menu;
    },
    checkout() {
      this.$router.push({ path: "/checkout" });
    },
  },
  
  computed: mapGetters({
    user: "getUser",
    orderState: "getOrderState",
    userState: "getUserState",
    productState: "getProductState",
  }),
};
</script>

<template>
  <body class="font-sans text-black">
    
    <router-view />
  </body>
  
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Sen&family=Syncopate:wght@700&display=swap");
</style>
