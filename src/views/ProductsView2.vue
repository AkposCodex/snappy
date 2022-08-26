<template>
  <div
    class="w-full md:h-[30rem] bg-[url('https://3geepay.com.ng/wp-content/uploads/2020/07/shutterstock_1411978127-1.jpg')] bg-center bg-cover"
  >
    <div
      class="md:h-full text-center backdrop-brightness-[.8] md:py-9 py-20 px-3"
    >
      <h1
        class="text-white text-3xl text-5xl md:text-9xl text-right md:py-9 md:pt-5 font-title"
      >
        RO<span class="text-teal-800 md:text-9xl text-6xl md:text-[10rem]"
          >k</span
        >U
      </h1>
      <p class="w-full md:text-4xl text-2xl text-right text-white">
        Choose from our selection of POS terminal devices. From the iconic
        <i>PAX-90</i> terminal to the modern <i>SRS-90</i> Android terminal
      </p>
    </div>
  </div>
  <div class="text-center py-20">
    <h1 class="text-3xl font-bold text-gray-800">
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
    content="Enjoy seamless payment and quick settlement to take your business to the next level. Join us as the first payment service in Nigeria to offer same day settlements"
    class="dark:text-white text-gray-800"
    image="https://3geepay.com.ng/wp-content/uploads/2020/07/shutterstock_600927191.jpg"
  />
  <LandingComponent
    title="Speak to a human."
    sub_title="24/7 CUSTOMER SUPPORT"
    content="Our friendly round-the-clock support team is on hand to help 24/7, and we’ll pick up the phone in seconds. Most issues can be fixed remotely, so your business keeps moving no problem."
    class="md:flex-row-reverse text-gray-800 dark:text-white"
    image="https://3geepay.com.ng/wp-content/uploads/2020/07/3gp-thumb4.jpg"
  />
  <LandingComponent
    title="Take payments in seconds."
    sub_title="FASTER TRANSACTIONS"
    content="With Snappy Pay you can take card payments 80% faster than the industry average – so there are just two seconds between you and another happy customer."
    class="dark:text-white text-gray-800"
    image="https://3geepay.com.ng/wp-content/uploads/2020/07/3gpay-thumb-14.jpg"
  />
  <LandingComponent
    title="Keep connected, always."
    sub_title="MOBILE CONNECTIVITY"
    content="Wi-Fi connectivity comes as standard, so temperamental Mobile networks woes won’t affect your customers’ payment experience – no matter where they’re seated."
    class="dark:text-white text-gray-800 md:flex-row-reverse"
    image="https://3geepay.com.ng/wp-content/uploads/2020/07/3gp-thumb3.jpg"
  />
  <div class="w-full text-center">
    <h1 class="text-2xl text-gray-800 p-6">
      Our Pricing Plans provide a degree of flexibility for businesses of all
      sizes
    </h1>
    <p>
      Rent out our POS for a period of time or even purchase it outright to
      access our payment platform for your business needs
    </p>
    <div class="flex sm:flex-row flex-col sapce-y-9 border-md my-9 px-6">
      <div class="card flex sm:flex-row sm:my-0 my-9">
        <div class="w-[16rem]" id="details">
          <p class="name">Starter</p>
          <span class="pricing">N2500</span>
          <span>/Day</span>
          <li class="flex flex-col items-center items-start my-3">
            Rent our POS for a single day to use in your business.
            <span
              >Recommended for trade fairs and parties that only go on for a few
              days</span
            >
          </li>
        </div>
        <div class="">
          <ul class="md:w-[15rem] sm:w-min">
            <li class="flex items-start">
              <svg
                class="w-6 h-6 text-green-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>No minimum transaction volume</p>
            </li>
            <li class="flex items-start">
              <svg
                class="w-6 h-6 text-green-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>1.5% Credit & Debit card fees capped at N150</p>
            </li>
          </ul>
          <button
            @click="checkout"
            class="bg-green-400 text-white rounded-full hover:shadow-md px-6 py-2 mt-6"
          >
            Buy Now
          </button>
        </div>
      </div>
      <div class="card flex sm:flex-row sm:my-0 my-9">
        <!-- <img
          src="@/assets/images/products/POS.png"
          class="md:w-[15rem] w-[15rem] mx-auto"
          alt=""
        /> -->
        <div class="w-[16rem]" id="details">
          <div>
            <p class="name">Enterprise</p>
            <span class="pricing">N30000</span>
            <span>/Month</span>
            <p>Rent our POS for a month to use in your business.</p>
            <p class="subscript"></p>
          </div>
        </div>
        <div class="">
          <ul class="sm:w-min md:w-[15rem]">
            <li class="flex items-start">
              <svg
                class="w-6 h-6 text-green-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <p>Fire Marketting</p>
            </li>
          </ul>
          <button
            @click="checkout"
            class="bg-green-400 text-white rounded-full hover:shadow-md px-6 py-2 mt-6"
          >
            Buy Now
          </button>
        </div>
      </div>
      <div class="card flex sm:flex-row sm:my-0 my-9">
        <!-- <img
          src="@/assets/images/products/POS.png"
          class="md:w-[15rem] w-[15rem] mx-auto"
          alt=""
        /> -->
        <div class="w-[16rem]" id="details">
          <div>
            <p class="name">Bespoke</p>
            <span class="pricing hover:shadow-inner">N120000</span>
            <p>Up front purchase of the terminal unit.</p>
          </div>
        </div>
        <div class="">
          <ul class="md:w-[15rem] sm:w-min">
            <li class="flex justify-between items-start">
              <svg
                class="w-6 h-6 text-green-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>24Hr customer support</span>
            </li>
            <li class="flex items-start">
              <svg
                class="w-6 h-6 text-green-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
              <span>1% Debit & Credit card fees capped at N100</span>
            </li>
          </ul>
          <button
            @click="checkout"
            class="bg-green-400 text-white rounded-full hover:shadow-md px-6 py-2 mt-6"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="p-6">
    <div
      class="w-full flex flex-col"
      v-for="product in productList"
      :key="product.id"
    >
      <img :src="product.image" class="md:w-[25rem] w-[15rem] mx-auto" alt="" />
      <div class="">
        <h1
          class="text-2xl md:text-4xl text-center dark:text-white text-black font-title"
        >
          {{ product.packageName }}
        </h1>
        <div
          id="main"
          class="flex flex-col md:flex-row justify-center space-y-9 md:space-x-9"
        >
          <div class="card" :key="product.id">
            <span class="">N{{ product.price }}</span>
            <p>
              {{ product.description }}
            </p>
            <p>Now buying: {{ product.qty }}</p>
            <div class="flex space-x-9">
              <button
                class="font-bold rounded-full bg-green-700 text-white px-2"
                @click="product.qty += 1"
              >
                +
              </button>
              <button
                class="font-bold rounded-full bg-green-700 text-white px-2"
                v-if="product.qty > 0"
                @click="product.qty -= 1"
              >
                -
              </button>
            </div>
            <p class="subscript">
              Note: each transaction has a 0.5% fee attached to it.
            </p>
            <button
              :disabled="product.qty <= 0"
              class="bg-green-400 disabled text-white rounded-full hover:shadow-md px-6 py-2 mt-6"
              @click="
                purchase(
                  product.price * product.qty,
                  product.packageName,
                  product.image,
                  product.qty
                )
              "
            >
              Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  </div> -->
</template>
<script>
import { mapGetters } from "vuex";
import { Products } from "../services/productsv2.service";

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
      productList: Products.getProductList(),
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
  .card {
    background-color: theme("colors.white");
    border-radius: theme("borderRadius.lg");
    padding: theme("spacing.6");
    box-shadow: theme("boxShadow.lg");
  }

  .price {
  }

  .pricing {
    padding-bottom: theme("spacing.2");
    font-size: theme("fontSize.lg");
  }

  .name {
    font-size: theme("fontSize.xl");
    font-weight: theme("fontWeight.bold");
  }

  .subscript {
    font-size: theme("fontSize.sm");
    color: theme("colors.gray.400");
  }
}
</style>
