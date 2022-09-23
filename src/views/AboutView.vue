<template>
  <div
    class="w-full md:h-[30rem] bg-[url('@/assets/images/snappy-about-header.jpeg')] bg-center bg-cover"
  >
    <div
      class="md:h-full text-center backdrop-brightness-[.5] md:py-9 py-20 px-3"
    >
      <!-- <h1
        class="text-white text-3xl text-5xl md:text-9xl text-right md:py-9 md:pt-5 font-title"
      >
        RO<span class="text-teal-800 md:text-9xl text-6xl md:text-[10rem]"
          >k</span
        >U
      </h1> -->
      <div class="flex justify-end"><img src="@/assets/icons/snappypayv1.svg" alt="" class="w-3/5 mt-10 right"></div>
      <p class="hidden w-full md:text-4xl text-2xl text-right text-white">
        Choose from our selection of POS terminal devices. From the iconic
        <i>PAX-90</i> terminal to the modern <i>SRS-90</i> Android terminal
      </p>
    </div>
  </div>
  <div class="text-center py-20 dark:text-white">
    <h1 class="text-3xl font-bold text-black">
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
  <LandingComponent
    title="Get Paid, Today!"
    sub_title="SAME-DAY TRANSFERS"
    content="Enjoy seamless payment and quick settlement to take your business to the next level. Join us as the first payment service in Nigeria to offer same day settlements into your preferred account."
    class="dark:text-white text-gray-800"
    image="/src/assets/images/snappy-sameday-transfers.jpeg"
  />
  <LandingComponent
    title="Speak to a human."
    sub_title="24/7 CUSTOMER SUPPORT"
    content="Our friendly round-the-clock support team is on hand to help 24/7, and we’ll pick up the phone in seconds. Most issues can be fixed remotely, so your business keeps moving no problem."
    class="md:flex-row-reverse text-gray-800 dark:text-white"
    image="/src/assets/images/snappy-support.jpeg"

  />
  <LandingComponent
    title="Take payments in seconds."
    sub_title="FASTER TRANSACTIONS"
    content="With Snappy Pay you can take card payments 80% faster than the industry average – so there are just two seconds between you and another happy customer."
    class="dark:text-white text-gray-800"
    image="/src/assets/images/snappy-faster-payments.jpeg"

  />
  <LandingComponent
    title="Keep connected, always."
    sub_title="MOBILE CONNECTIVITY"
    content="Wi-Fi connectivity comes as standard, so temperamental Mobile networks woes won’t affect your customers’ payment experience – no matter where they’re seated."
    class="dark:text-white text-gray-800 md:flex-row-reverse"
    image="/src/assets/images/snappy-instant-app.jpeg"
  />
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
      // this.$router.push({
      //   name: "checkout",
      //   params: { price: price, product: product, image: image },
      // });
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
