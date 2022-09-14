<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    btnClick: function () {
      this.$router.push({ path: "/sign-up" });
    },
    logout() {
      this.$store.dispatch("userModule/logout").then(() => {
        this.$router.push({ name: "home" });
        this.$router.go();
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
  data() {
    return { menu: false };
  },
  computed: mapGetters({
    user: "getUser",
    userState: "getUSerState",
  }),
};
</script>

<template>
  <body class="font-sans text-black">
    <div class="flex justify-end w-full bg-sub">
      <button
        v-if="user"
        @click="checkout()"
        class="hidden md:block p-1 w-max text-white bg-none rounded-md m-2 shadow-lg text-sm hover:ring ring-green-200/50"
      >
        <img src="@/assets/icons/shopping-cart-24.png" class="h-[24px] w-[24px]" alt="" />
      </button>
      <button
        v-if="user"
        @click="this.$router.push('/products')"
        class="hidden md:block p-1 w-max text-white font-bold bg-none rounded-md m-2 shadow-lg text-sm hover:ring ring-green-200/50"
      >
        Order History 
      </button>

    </div>
    <nav class="px-6 py-4 border-b mx-auto">
      <div class="flex justify-between space-x-9">
        <div
          class="flex justify-between relative w-full items-center space-x-6"
        >
          <div class="pt-2">
            <router-link to="/"
              ><img src="./assets/logo.svg" alt="" width="45" height="45"
            /></router-link>
          </div>
          <div class="hidden md:flex space-x-12 text-md">
            <router-link
              to="/productsv2"
              class="hover:underline dark:text-white hover:text-lg hover:font-bold"
              >Product</router-link
            >
            <router-link
              to="/dash"
              class="hover:underline dark:text-white hover:text-lg hover:font-bold"
              >Dashboard</router-link
            >
            <router-link
              to="/buy-now"
              class="hover:underline dark:text-white hover:text-lg hover:font-bold"
              >Pricing</router-link
            >
            <!-- <router-link
              to="/about"
              class="hover:underline dark:text-white hover:text-lg hover:font-bold"
              >About Us</router-link
            > -->
            <router-link
              to="/faq"
              class="hover:underline dark:text-white hover:text-lg hover:font-bold"
              >Contact</router-link
            >
          </div>
          <a
            href="#"
            @click="show()"
            class="bg-sub md:hidden dark:text-white p-3 rounded-lg text-white"
            >Menu</a
          >
          <div
            v-if="menu"
            class="absolute top-12 space-y-3 z-50 bg-white rounded right-0 p-6 flex flex-col shadow-md text-md"
          >
            <router-link
              to="/productsv2"
              class="hover:underline text-black hover:text-lg hover:font-bold"
              >Product</router-link
            >
            <router-link
              to="/buy-now"
              class="hover:underline text-black hover:text-lg hover:font-bold"
              >Pricing</router-link
            >
            <!-- <router-link
              to="/about"
              class="hover:underline text-black hover:text-lg hover:font-bold"
              >About Us</router-link
            > -->
            <router-link
              to="/dash"
              class="hover:underline text-black hover:text-lg hover:font-bold"
              >Dashboard</router-link
            >
            <router-link
              to="/faq"
              class="hover:underline text-black hover:text-lg hover:font-bold"
              >Contact</router-link
            >
            <router-link
              to="/checkout"
              class="hover:underline text-black hover:text-lg hover:font-bold"
              >Cart</router-link
            >
            <a
              href="#"
              v-if="user"
              @click="logout()"
              class="md:hidden hover:underline hover:text-lg hover:font-bold"
              >Log Out</a
            >
            <a
              href="#"
              v-if="!user"
              @click="btnClick()"
              class="md:hidden hover:underline hover:text-lg hover:font-bold"
              >Log In</a
            >
          </div>
        </div>
        <div class="hidden md:flex space-x-3">
          <button
            v-if="user"
            @click="logout()"
            class="hidden md:block p-2 w-32 items-center text-white bottom-0 bg-sub rounded-full text-lg hover:ring ring-green-200/50 hover:bg-main"
          >
            Log Out
          </button>
          <button
            v-if="!user"
            @click="btnClick()"
            class="hidden md:block p-2 w-52 items-center text-white bottom-0 bg-sub rounded-full text-lg hover:ring ring-green-200/50 hover:bg-main"
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
    <router-view />
  </body>
  <footer class="bg-gray-800 w-full p-4">
    <div class="flex">
      <h1 class="text-white text-2xl text-left font-title">
        RO<span class="text-teal-800 text-3xl">k</span>U
      </h1>
      <p class="text-xl right-0">
        Powered by <span class="text-2xl font-bold text-sub">3</span
        ><span class="text-2xl font-bold"
          ><span class="text-main font-bold">G</span>eePay</span
        >, a licensed PTSP by CBN
      </p>
    </div>
    <div class="flex">
      <div id="quick-links">
        <h1>Quick Links</h1>
        <ul>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </div>
  </footer>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Sen&family=Syncopate:wght@700&display=swap");
</style>
