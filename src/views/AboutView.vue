<template>
  <div
    class="w-full md:h-[30rem] bg-[url('@/assets/images/snappy-about-header.jpeg')] bg-center bg-cover"
  >
    <div
      class="md:h-full text-center backdrop-brightness-[.5] md:py-9 py-20 px-3"
    >
      <div class="flex justify-end">
        <img
          src="@/assets/icons/snappypayv1.svg"
          alt=""
          class="w-3/5 mt-10 right"
        />
      </div>
      <p class="hidden w-full md:text-4xl text-2xl text-right text-white">
        Choose from our selection of POS terminal devices. From the iconic
        <i>PAX-90</i> terminal to the modern <i>SRS-90</i> Android terminal
      </p>
    </div>
  </div>
  <div class="text-center py-20 dark:text-white">
    <h1 class="text-3xl font-bold dark:text-white text-black">
      Payment in a <span class="text-sub font-bold">S</span>nap!
    </h1>
    <p class="text-xl">
      Take payments faster than ever before with Sanppy Pay.
    </p>
    <p class="text-xl">
      Whether it's business in the shop or at events all around the country,
      Snappy Pay has you coverred.
    </p>
  </div>
  <div
    class="text-pink p-6 flex items-center sm:flex-row flex-col justify-between"
  >
    <div class="sm:w-1/2 p-3 dark:text-white">
      <div>
        <h3 class="text-4xl font-bold p-3">Get paid, Today!</h3>
        <p class="text-2xl p-3">SAME-DAY TRANSFERS</p>
        <p class="pl-3">
          Enjoy seamless payment and quick settlement to take your business to
          the next level. Join us as the first payment service in Nigeria to
          offer same day settlements into your preferred account.
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
    class="text-pink p-6 flex dark:text-white md:flex-row-reverse sm:flex-row flex-col justify-between items-center"
  >
    <div class="sm:w-1/2 p-3">
      <div>
        <h3 class="text-4xl font-bold p-3">Speak to a human.</h3>
        <p class="text-2xl p-3">24/7 CUSTOMER SUPPORT</p>
        <p class="pl-3">
          Our friendly round-the-clock support team is on hand to help 24/7, and
          we’ll pick up the phone in seconds. Most issues can be fixed remotely,
          so your business keeps moving no problem.
        </p>
      </div>
    </div>
    <img
      src="@/assets/images/snappy-support.jpeg"
      alt=""
      class="sm:rounded-[4rem] sm:w-3/6 rounded-[4rem] p-6 md:h-1/2 sm:h-[14rem]"
    />
  </div>
  <div
    class="text-pink p-6 flex dark:text-white sm:flex-row flex-col justify-between items-center"
  >
    <div class="sm:w-1/2 p-3">
      <div>
        <h3 class="text-4xl font-bold p-3">Take faster payments.</h3>
        <p class="text-2xl p-3">FASTER TRANSACTIONS</p>
        <p class="pl-3">
          With Snappy Pay you can take card payments 80% faster than the
          industry average – so there are just two seconds between you and
          another happy customer.
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
    class="text-pink p-6 flex dark:text-white md:flex-row-reverse sm:flex-row flex-col justify-between items-center"
  >
    <div class="sm:w-1/2 p-3">
      <div>
        <h3 class="text-4xl font-bold p-3">Keep connected, always.</h3>
        <p class="text-2xl p-3">MOBILE CONNECTIVITY</p>
        <p class="pl-3">
          Wi-Fi connectivity comes as standard, so temperamental Mobile networks
          woes won’t affect your customers’ payment experience – no matter where
          they’re seated.
        </p>
      </div>
    </div>
    <img
      src="@/assets/images/snappy-instant-app.jpeg"
      alt=""
      class="sm:rounded-[4rem] sm:w-3/6 rounded-[4rem] p-6 md:h-1/2 sm:h-[14rem]"
    />
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  methods: {
    purchase: function (price, product, image, qty) {
      this.$store.dispatch("productModule/updateProducts", {
        price,
        product,
        image,
        qty,
      });
      console.log(price, product, image);
      console.log(this.productState.products);
      window.alert(product + " \ added to cart");
    },
    checkout() {
      this.$router.push("buy-now");
    },
    clear() {
      this.$store.dispatch("productModule/clearProducts");
      console.log(this.productState.products);
    },
  },
  data() {
    return {
      open: false,
    };
  },
  computed: {
    ...mapGetters({
      productState: "getProductState",
    }),
  },
};
</script>
<style>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
}
</style>
