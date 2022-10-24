<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      dropdownPopoverShow: false,
    };
  },
  computed: {
    ...mapGetters({
      user: "getUserState",
      order: "getOrderState",
    }),
  },
  methods: {
    // toggleDropdown: function (event) {
    //   event.preventDefault();
    //   if (this.dropdownPopoverShow) {
    //     this.dropdownPopoverShow = false;
    //   } else {
    //     this.dropdownPopoverShow = true;
    //     createPopper(this.$refs.btnDropdownRef, this.$refs.popoverDropdownRef, {
    //       placement: "bottom-start",
    //     });
    //   }
    // },
  },
};
</script>

<template>
  <!-- md:bg-[#F2F2F2] -->
  <nav
    class="md:px-10 md:py-4 dark:bg-transparent mt-[50px] lg:mt-0 shadow-md bg-white w-full lg:w-4/5 2xl:w-[90%] lg:ml-64 text-black"
  >
    <div
      class="flex md:flex-row xs:mt-[40px] flex-col space-y-3 justify-between w-full relative items-center md:space-x-6"
    >
      <h1 class="text-6xl">Dashboard</h1>
      <div class="flex items-center space-x-2">
        <h1 class="md:text-4xl text-xl text-right">Good Morning, {{user.bio.firstname}}</h1>
        <a href="/table"
          ><img src="@/assets/icons/sun.png" alt="" width="64" height="64"
        /></a>
      </div>
      <a
        href="#menu"
        class="text-blueGray-500 hidden block"
        ref="btnDropdownRef"
        v-on:click="toggleDropdown($event)"
      >
        <div class="items-center flex">
          <span
            class="w-16 h-16 text-sm text-white bg-blueGray-200 inline-flex items-center justify-center rounded-full"
          >
            <img
              alt="..."
              class="w-full rounded-md align-middle border-none p-3"
              src="@/assets/icons/menu.svg"
            />
          </span>
        </div>
      </a>
      <div
        ref="popoverDropdownRef"
        class="bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        v-bind:class="{
          hidden: !dropdownPopoverShow,
          block: dropdownPopoverShow,
        }"
      >
        <router-link
          to="/about-us"
          @click="menu = false"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >About Us</router-link
        >
        <router-link
          to="/product"
          @click="menu = false"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >Products</router-link
        >
        <router-link
          to="/dash"
          @click="menu = false"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >Dashboard</router-link
        >
        <router-link
          to="/contact"
          @click="menu = false"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >Contact</router-link
        >
        <router-link
          @click="menu = false"
          to="/checkout"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >Cart</router-link
        >
        <a
          href="#"
          @click="logout()"
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >Log Out</a
        >
        <a
          href="#"
          @click="
            btnClick();
            menu = false;
          "
          class="text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          >Log In</a
        >
      </div>
    </div>
  </nav>
</template>
