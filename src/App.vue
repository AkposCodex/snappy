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
        // this.$router.go();
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
    <div
      class="justify-end hidden md:flex space-x-9 items-center px-9 w-full bg-sub"
    >
      <router-link v-if="user" to="/dash" class="text-white text-lg font-bold"
        >Dashboard</router-link
      >
      <button
        v-if="user"
        @click="checkout()"
        class="p-1 w-max text-white bg-none rounded-md m-2 shadow-lg text-sm hover:ring ring-green-200/50"
      >
        <img
          src="@/assets/icons/shopping-cart-24.png"
          class="h-[24px] w-[24px]"
          alt=""
        />
      </button>
      <!-- <button
        v-if="user"
        @click="this.$router.push('/products')"
        class="hidden md:block p-1 w-max text-white font-bold bg-none rounded-md m-2 shadow-lg text-sm hover:ring ring-green-200/50"
      >
        Order History 
      </button> -->
    </div>
    <nav class="px-6 py-4 border-b mx-auto">
      <div class="flex justify-between space-x-9">
        <div
          class="flex justify-between relative w-full items-center space-x-6"
        >
          <div class="pt-2">
            <router-link to="/"
              ><img src="./assets/icons/logo.png" alt="" width="110" height="110"
            /></router-link>
          </div>
          <div class="hidden md:flex space-x-12 text-md">
            <router-link
              to="/buy-now"
              class="hover:underline dark:text-white hover:text-lg hover:font-bold"
              >Product</router-link
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
            <router-link
              to="/productsv2"
              class="hover:underline dark:text-white hover:text-lg hover:font-bold"
              >About Us</router-link
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
              >About Us</router-link
            >
            <router-link
              v-if="user"
              to="/buy-now"
              class="hover:underline text-black hover:text-lg hover:font-bold"
              >Products</router-link
            >
            <!-- <router-link
              to="/about"
              class="hover:underline text-black hover:text-lg hover:font-bold"
              >About Us</router-link
            > -->
            <router-link
              v-if="user"
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
              v-if="user"
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
  <footer class="bg-gray-900 w-full p-4 font-sans">
    <div class="flex text-white items-start w-full justify-between">
      <!-- <h1 class="text-white text-2xl text-left font-title">
        RO<span class="text-teal-800 text-3xl">k</span>U
      </h1> -->
      <img src="@/assets/icons/logo.svg" alt="" class="" width="110" height="110">
      <!-- <div class="flex justify-center w-full text-lg space-x-10">
        <router-link v-if="user" to="/productsv2" class="text-white"
          >About</router-link
        >
        <router-link v-if="user" to="/faq" class="text-white"
          >Contact</router-link
        >
        <router-link v-if="user" to="/buy-now" class="text-white"
          >Products</router-link
        >
      </div> -->
    </div>
    <div
      class="font-bold flex flex-col md:flex-row items-center justify-center mb-4 w-full text-white rounded-full relative text-center p-2"
    >
      <span class="font-bold text-md">Mobile|WhatsApp:</span>
      <p class="text-md mr-4">+234 7043151949</p>
      <span class="font-bold text-md">Email:</span>
      <p class="text-md">frontdesk@snappy.com.ng</p>
    </div>
    <p class="text-md text-white text-center">
      Powered by 3GeePay, a licensed PTSP by CBN
    </p>
  </footer>
</template>
<style>
@import url("https://fonts.googleapis.com/css2?family=Julius+Sans+One&family=Sen&family=Syncopate:wght@700&display=swap");
</style>
