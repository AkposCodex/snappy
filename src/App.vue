<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    btnClick: function () {
      this.$router.push({ path: "/sign-up" });
    },
    logout() {
      this.$store.dispatch("userModule/logout").then(() => {
        this.$router.push({ path: "/sign-up" });
      });
      console.log(this.user);
    },
  },
  computed: mapGetters({
    user: "getUser",
    userState: "getUSerState",
  }),
};
</script>

<template>
  <body class="font-sans">
    <nav class="p-6 relative mx-auto border">
      <div class="flex justify-between">
        <div class="flex items-center space-x-6">
          <div class="pt-2">
            <router-link to="/"
              ><img src="./assets/logo.svg" alt="" width="45" height="45"
            /></router-link>
          </div>
          <div class="hidden md:flex space-x-12 text-md">
            <router-link
              to="/products"
              class="hover:underline hover:text-lg hover:font-bold"
              >Product</router-link
            >
            <router-link
              to="/buy-now"
              class="hover:underline hover:text-lg hover:font-bold"
              >Pricing</router-link
            >
            <router-link
              to="/about"
              class="hover:underline hover:text-lg hover:font-bold"
              >About Us</router-link
            >
            <router-link
              to="/faq"
              class="hover:underline hover:text-lg hover:font-bold"
              >Contact</router-link
            >
          </div>
        </div>
        <div>
          <button
            v-if="user"
            @click="logout()"
            class="hidden md:block p-2 w-52 items-center text-white bottom-0 bg-green-800 rounded-full text-lg hover:ring ring-green-200/50 hover:bg-green-700"
          >
            Log Out
          </button>
          <button
            v-if="!user"
            @click="btnClick()"
            class="hidden md:block p-2 w-52 items-center text-white bottom-0 bg-green-800 rounded-full text-lg hover:ring ring-green-200/50 hover:bg-green-700"
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
    <router-view />
  </body>
  <footer class="bg-gray-800 w-full p-4">
    <h1 class="text-white text-2xl text-left font-title">
      RO<span class="text-teal-800 text-3xl">k</span>U
    </h1>
  </footer>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Sen&family=Syncopate:wght@700&display=swap");
</style>
