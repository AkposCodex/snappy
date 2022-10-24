<script>
import Landingbutton from "../components/landingbutton.vue";
import { RouterLink, RouterView } from "vue-router";
import { mapGetters } from "vuex";

export default {
  components: { Landingbutton },
  methods: {
    btnClick: function () {
      if (!this.user) {
        this.$router.push({ name: "signup", params: { signUp: "true" } });
        console.log(this.user);
      } else {
        this.$router.push({ path: "/about-us" });
        console.log(this.user);
      }
    },
  },
  computed: mapGetters({
    user: "getUser",
    orderState: "getOrderState",
    userState: "getUserState",
    productState: "getProductState",
  }),
  data() {
    return { menu: false };
  },
};
</script>
<style>
.details {
  padding-top: theme("spacing.20");
}
</style>

<template>
  <main>
    <CombinedNav></CombinedNav>
    <div
      id="hero"
      class="relative bg-[url('@/assets/images/snappy-home-header.jpeg')] h-[100vh] md:h-[25rem] bg-center bg-cover"
    >
      <div class="h-full /*backdrop-brightness-[.5]*/ w-full relative">
        <div
          class="text-black absolute bg-white bg-opacity-70 w-full bottom-0 text-center py-2 px-4 z-40"
        >
          <div class="">
            <h1 class="w-full text-4xl">
              Take faster card payments with Snappy Pay
            </h1>
            <p class="text-xl">
              Join thousands of businesses – from start-ups to expanding
              enterprises – using a Snappy card machine and payment solution.
            </p>
            <button
              @click="btnClick()"
              class="p-2 m-2 w-52 bottom-0 bg-sub rounded-full text-lg text-white hover:ring ring-green-200/50 hover:bg-main"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
    <section class="details">
      <h1 class="text-5xl text-center dark:text-white">Meet the Snappy app.</h1>
      <p
        class="text-lg sm:w-3/5 p-4 dark:text-white text-center mx-auto sm:mb-9"
      >
        A card machine and payment solution that combines sleek design and
        powerful technology – for reliable, fast and secure payments at the
        till, the table or on the move.
      </p>
      <div
        class="text-pink p-6 flex dark:text-white sm:flex-row flex-col justify-between items-center"
      >
        <div class="sm:w-1/2 p-3">
          <div>
            <h3 class="text-4xl font-bold p-3">Take faster payments.</h3>
            <p class="text-2xl p-3">SUPERFAST TRANSACTIONS</p>
            <p class="pl-3">
              Process card transactions 80% faster than the industry average.
              Shorter queues mean happier customers – and a till that won’t stop
              ringing.
            </p>
          </div>
        </div>
        <img
          src="@/assets/images/snappy-faster-payments.jpeg"
          alt=""
          class="sm:rounded-[4rem] sm:w-3/6 rounded-[4rem] p-6 md:h-1/2 sm:h-[14rem]"
        />
      </div>
      <div
        class="text-pink p-6 flex dark:text-white md:flex-row-reverse items-center sm:flex-row flex-col justify-between"
      >
        <div class="sm:w-1/2 p-3">
          <div>
            <h3 class="text-4xl font-bold p-3">Get paid, Today!</h3>
            <p class="text-2xl p-3">SAME-DAY TRANSFERS</p>
            <p class="pl-3">
              Enjoy seamless payment and quick settlement to take your business
              to the next level. Join us as the first payment service in Nigeria
              to offer same day settlements into your preferred account.
            </p>
            <button
              @click="btnClick()"
              class="p-2 mx-3 my-6 w-52 text-white bottom-0 bg-sub rounded-full text-lg hover:ring ring-green-200/50 hover:bg-main"
            >
              Get started
            </button>
          </div>
        </div>
        <img
          src="@/assets/images/snappy-sameday-transfers.jpeg"
          alt=""
          class="sm:rounded-[4rem] sm:w-3/6 rounded-[4rem] p-6 md:h-1/2 sm:h-[14rem]"
        />
      </div>
      <div
        class="text-pink p-6 flex dark:text-white items-center sm:flex-row flex-col justify-between"
      >
        <div class="sm:w-1/2 p-3">
          <div>
            <h3 class="text-4xl font-bold p-3">Enjoy instant insights.</h3>
            <p class="text-2xl p-3">THE SNAPPY APP</p>
            <p class="pl-3">
              Download the Snappy app and get transaction breakdowns and
              transfer notifications wherever, whenever. And with the app, PCI
              compliance takes a matter of minutes.
            </p>
            <button
              @click="btnClick()"
              class="p-2 mx-3 my-6 w-52 text-white bottom-0 bg-sub rounded-full text-lg hover:ring ring-green-200/50 hover:bg-main"
            >
              Get started
            </button>
          </div>
        </div>
        <img
          src="@/assets/images/snappy-instant-app.jpeg"
          alt=""
          class="sm:rounded-[4rem] sm:w-3/6 rounded-[4rem] p-6 md:h-1/2 sm:h-[14rem]"
        />
      </div>
    </section>
    <div class="p-9 text-center dark:text-white flex-col space-y-6">
      <h2 class="text-2xl font-title">SIGN UP</h2>
      <p class="text-lg">
        Signing up requires only your personal information and your BVN in order
        to get you set up on the platform
      </p>
      <button
        @click="btnClick()"
        class="p-2 w-52 bottom-0 text-white bg-sub rounded-full text-lg hover:ring ring-green-200/50 hover:bg-main"
      >
        Get Started
      </button>
    </div>
  </main>
  <footer class="bg-gray-700 w-full p-4 font-sans">
    <div
      class="font-bold flex flex-col md:flex-row items-center justify-center mb-1 w-full text-white rounded-full relative text-center p-1"
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
