<script>
import { mapGetters } from "vuex";

export default {
  computed: mapGetters({
    user: "getUser",
    orderState: "getOrderState",
    userState: "getUserState",
    productState: "getProductState",
  }),
  data() {
    return { menu: false };
  },
  methods: {
    btnClick: function () {
      if (!this.user) {
        this.$router.push({ name: "signup", params: { signUp: 'false' } });
        console.log(this.user);
      } else {
        this.$router.push({ path: "/about-us" });
        console.log(this.user);
      }
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
};
</script>
<template>
  <div
    class="justify-end hidden md:flex space-x-9 items-center px-9 bg-sub dark:bg-main dark:bg-opacity-40"
  >
    <router-link v-if="user" to="/dash" class="text-white text-lg font-bold"
      >Welcome, {{ userState.bio.firstName }}</router-link
    >
    <button
      v-if="user"
      @click="checkout()"
      type="button"
      class="inline-flex relative items-center p-3 text-sm font-medium text-center text-white rounded-lg"
    >
      <img
        src="@/assets/icons/shopping-cart-24.png"
        class="h-[24px] w-[24px]"
        alt=""
      />
      <span class="sr-only">Cart</span>
      <div
        class="inline-flex absolute -top-2 m-3 -right-2 justify-center items-center w-4 h-4 text-xs font-bold text-white bg-main rounded-full border-2 border-white dark:border-gray-900"
      >
        {{ productState.order.products.length }}
      </div>
    </button>
  </div>
  <nav class="px-2 py-4 border-b dark:bg-transparent text-black mx-auto">
    <div class="flex justify-between space-x-9">
      <div class="flex justify-between w-full relative items-center space-x-6">
        <div class="">
          <router-link to="/"
            ><img
              src="@/assets/icons/snappypayv1.svg"
              alt=""
              width="110"
              height="110"
          /></router-link>
        </div>
        <div class="hidden md:flex space-x-12 text-md">
          <router-link
            to="/products"
            class="hover:underline dark:text-white hover:text-lg hover:font-bold"
            >Products</router-link
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
</template>
