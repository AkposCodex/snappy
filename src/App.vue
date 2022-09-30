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
  data() {
    return { menu: false };
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
    <div
      class="justify-end hidden md:flex space-x-9 items-center px-9 w-full bg-sub dark:bg-main dark:bg-opacity-40"
    >
      <router-link v-if="user" to="/dash" class="text-white text-lg font-bold"
        >Welcome, {{ userState.bio.firstName }}</router-link
      >
      <button
        v-if="user"
        @click="checkout()"
        type="button"
        class="inline-flex relative items-center p-3 text-sm font-medium text-center text-white rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <img
          src="@/assets/icons/shopping-cart-24.png"
          class="h-[24px] w-[24px]"
          alt=""
        />
        <span class="sr-only">Cart</span>
        <div
          class="inline-flex absolute -top-2 m-3 -right-2 justify-center items-center w-4 h-4 text-xs font-bold text-white bg-red-500 rounded-full border-2 border-white dark:border-gray-900"
        >
          {{productState.order.products.length}}
        </div>
      </button>
    </div>
    <nav class="px-2 py-4 border-b dark:bg-transparent text-black mx-auto">
      <div class="flex justify-between space-x-9">
        <div
          class="flex justify-between relative w-full items-center space-x-6"
        >
          <div class="">
            <router-link to="/"
              ><img
                src="./assets/icons/snappypayv1.svg"
                alt=""
                width="110"
                height="110"
            /></router-link>
          </div>
          <div class="hidden md:flex space-x-12 text-md">
            <router-link
              to="/product"
              class="hover:underline dark:text-white hover:text-lg hover:font-bold"
              >Product</router-link
            >
            <router-link
              to="/contact"
              class="hover:underline dark:text-white hover:text-lg hover:font-bold"
              >Contact</router-link
            >
            <router-link
              to="/about-us"
              class="hover:underline dark:text-white hover:text-lg hover:font-bold"
              >About Us</router-link
            >
          </div>
          <a
            href="#"
            @click="show()"
            class="bg-sub dark:bg-main dark:bg-opacity-40 md:hidden dark:text-white p-3 rounded-lg text-white"
            >Menu</a
          >
          <div
            v-if="menu"
            class="absolute md:hidden top-12 space-y-3 z-50 bg-white rounded right-0 p-6 flex flex-col shadow-md text-md"
          >
            <router-link
              to="/about-us"
              @click="menu = false"
              class="hover:underline text-black hover:text-lg hover:font-bold"
              >About Us</router-link
            >
            <router-link
              to="/product"
              @click="menu = false"
              class="hover:underline text-black hover:text-lg hover:font-bold"
              >Products</router-link
            >
            <router-link
              to="/dash"
              @click="menu = false"
              class="hover:underline text-black hover:text-lg hover:font-bold"
              >Dashboard</router-link
            >
            <router-link
              to="/contact"
              @click="menu = false"
              class="hover:underline text-black hover:text-lg hover:font-bold"
              >Contact</router-link
            >
            <router-link
              v-if="user"
              @click="menu = false"
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
              @click="
                btnClick();
                menu = false;
              "
              class="md:hidden hover:underline hover:text-lg hover:font-bold"
              >Log In</a
            >
          </div>
        </div>
        <div class="hidden md:flex space-x-3">
          <button
            v-if="user"
            @click="
              logout();
              menu = false;
            "
            class="hidden md:block p-2 w-32 items-center text-white bottom-0 bg-sub dark:bg-main dark:bg-opacity-40 rounded-full text-lg hover:ring ring-green-200/50 hover:bg-main"
          >
            Log Out
          </button>
          <button
            v-if="!user"
            @click="btnClick()"
            class="hidden md:block p-2 w-32 items-center text-white bottom-0 bg-sub dark:bg-main dark:bg-opacity-40 rounded-full text-lg hover:ring ring-green-200/50 hover:bg-main"
          >
            Log In
          </button>
        </div>
      </div>
    </nav>
    <router-view />
  </body>
  <footer class="bg-gray-700 w-full p-4 font-sans">
    <div class="flex text-white items-start w-full justify-between">
    </div>
    <div
      class="font-bold flex flex-col md:flex-row items-center justify-center mb-4 w-full text-white rounded-full relative text-center p-2"
    >
      <span class="font-bold text-md">Mobile|WhatsApp:</span>
      <a
        href="https://wa.me/%2B2347043151949?text=Good%20Day%2C%0AI%20have%20enquiries%20concerning%20SNAPPY%20pay"
        class="text-md mr-4"
        >+234 7043151949</a
      >
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
