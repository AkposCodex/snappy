<template lang="">
  <div class="w-full mx-auto pt-10">
    <!-- <h1 class="text-black text-4xl p-[3rem] font-title">RO<span
              class="text-teal-800 text-6xl">k</span>U</h1> -->
    <div class="px-9">
      <h1 class="text-center font-bold text-black text-3xl">
        Purchase the Key to a Greater Business Solution
      </h1>
      <h1 class="text-xl text-center text-gray-800 p-6">
      Our Pricing Plans provide a degree of flexibility for businesses of all
      sizes
    </h1>
    <p class=" text-center">
      Rent our POS for a period of time or even purchase it outright to access
      our payment platform for your business needs
    </p>
      <!-- <p class="text-center">
        Below are our plans to get you started on the path to success. <br />
        Choose from any of the plans to get started.
      </p> -->
    </div>

    <main class="flex flex-col space-y-10 w-full justify-center mx-auto items-center my-12 pt-6">
      <div class="card flex flex-col md:flex-row w-4/5 justify-center space-x-9 items-center">
        <img src="https://www.horizonpay.ng/assets/img/partner6.png" class="md:w-2/5 w-full h-4/5 " alt="" />
        <div class="md:w-2/5 w-full" id="details">
            <p class="name">Starter</p>
            <span class="pricing">N2500</span>
          <ul>
            <li class="flex items-start p-1">  You receive the POS for a single day to to do transactions.</li>
            <li class="p-1">
                Recommended for trade fairs and parties that only go on for a few
              days</li>
          </ul>
          <hr class="my-3 w-full">
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
              <p>1.5% card fees capped at N150</p>
            </li>
          </ul>
          <p>Units: {{productState.starter_qty}}</p>
          <div class="flex space-x-9">
            <button
              class="font-bold rounded-full bg-green-700 text-white px-2"
              @click="incrStarter()"
            >
              +
            </button>
            <button
              class="font-bold rounded-full bg-green-700 text-white px-2"
              v-if="productState.starter_qty > 0"
              @click="decrStarter"
            >
              -
            </button>
          </div>
          
          <button

            @click="checkout(2500, 'Starter Package' ,'https://www.horizonpay.ng/assets/img/partner6.png',productState.starter_qty)"
            class="bg-green-400 text-white rounded-full hover:shadow-md px-6 py-2 mt-6"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div class="card flex flex-col md:flex-row w-4/5 justify-center space-x-9 items-center">
        <img src="https://www.horizonpay.ng/assets/img/partner6.png" class="md:w-2/5  w-full h-4/5 mx-auto" alt="" />
        <div class="md:w-2/5 w-full" id="details">
          <div>
            <p class="name">Enterprise</p>
            <span class="pricing hover:shadow-inner">N30000</span>
          </div>
          <ul>
            <li>You recieve the POS for a month to do business.</li>
          </ul>
          <hr class="my-3 w-full">
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
              <p>1.5% card fees capped at N150</p>
            </li>
          </ul>
          <p>Units: {{productState.enterprise_qty}}</p>
          <div class="flex space-x-9">
            <button
              class="font-bold rounded-full bg-green-700 text-white px-2"
              @click="incrEnterprise()"
            >
              +
            </button>
            <button
              class="font-bold rounded-full bg-green-700 text-white px-2"
              v-if="productState.enterprise_qty > 0"
              @click="decrEnterprise"
            >
              -
            </button>
          </div>
          <button
            @click="checkout(30000, 'Enterprise Package' ,'@/assets/images/products/POS.png',productState.enterprise_qty)"
            class="bg-green-400 text-white rounded-full hover:shadow-md px-6 py-2 mt-6"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div class="card flex flex-col md:flex-row w-4/5 justify-center space-x-9 items-center">
        <img src="https://www.horizonpay.ng/assets/img/partner6.png" class="md:w-2/5  w-full h-4/5 mx-auto" alt="" />
        <div class="md:w-2/5 w-full mx-auto" id="details">
          <div>
            <p class="name">Bespoke</p>
            <span class="pricing">N120000</span>
          </div>
          <ul>
            <li>Up front purchase of the terminal unit</li>
          </ul>
          <hr class="my-3 w-full">

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
              <span>1% card fees capped at N100</span>
            </li>
          </ul>
          <p>Units: {{productState.bespoke_qty}}</p>
          <div class="flex space-x-9">
            <button
              class="font-bold rounded-full bg-green-700 text-white px-2"
              @click="incrBespoke()"
            >
              +
            </button>
            <button
              class="font-bold rounded-full bg-green-700 text-white px-2"
              v-if="productState.bespoke_qty > 0"
              @click="decrBespoke()"
            >
              -
            </button>
          </div>
          <button
            @click="checkout(120000, 'Bespoke Package' ,'@/assets/images/products/POS.png',productState.bespoke_qty)"
            class="bg-green-400 text-white rounded-full hover:shadow-md px-6 py-2 mt-6"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>

    <div class="bg-green-600 hidden text-white font-bold text-3xl text-center p-9">
        <h1>What are the benefits of <span class="font-title">ROkU?</span></h1>
        <p class="text-2xl">- &#128293 FIRE MARKETTING</p>
        <p class="text-2xl">- &#128293 FIRE MARKETTING</p>
        <p class="text-2xl">- &#128293 FIRE MARKETTING</p>
    </div>

    <div class="w-full text-center hidden">
    <div
      class="flex md:grid-cols-3 md:grid gap-3 flex-col md:sapce-y-9 sm:justify-between border-md my-9 px-6"
    >
      <div
        class="card flex sm:flex-row sm:justify-between items-center md:justify-normal md:flex-col sm:my-9 my-9"
      >
        <!-- <img
          src="@/assets/images/products/POS.png"
          class="md:w-[15rem] w-[15rem] mx-auto"
          alt=""
        /> -->
        <div class="w-[16rem] h-3/5" id="details">
          <div>
            <p class="name">Bespoke</p>
            <span class="pricing hover:shadow-inner">N120000</span>
            <p>Up front purchase of the terminal unit.</p>
          </div>
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
              <span>1% card fees capped at N100</span>
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
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { Products } from "../services/productsv2.service";
export default {
  props: ["price"],
  methods: {
    checkout: function (price, product, image, qty) {
      if(qty<=0){
      window.alert("Add an item to the cart pls");

      }else{
        this.$store.dispatch("productModule/updateorder", {
        price: price *qty,
        product,
        image,
        qty,
      }).then(()=>{
        console.log(price, product, image);
        this.$store.dispatch("productModule/updateTotal",price*qty);
        this.$store.dispatch("productModule/clearQty");
      });
      window.alert(product + " \ added to cart");
      console.log(this.productState.order.products);
      }
      // this.$router.push({
      //   name: "checkout",
      //   params: { price: price, product: product, image: image },
      // });
    },
    incrStarter(){
      this.$store.dispatch("productModule/incrementStarter");
    },
    decrStarter(){
      this.$store.dispatch("productModule/decrementStarter");
    },
    incrEnterprise(){
      this.$store.dispatch("productModule/incrementEnterprise");
    },
    decrEnterprise(){
      this.$store.dispatch("productModule/decrementEnterprise");
    },
    incrBespoke(){
      this.$store.dispatch("productModule/incrementBespoke");
    },
    decrBespoke(){
      this.$store.dispatch("productModule/decrementBespoke");
    },
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
    padding: theme("spacing.3");
    box-shadow: theme("boxShadow.md");
  }

  .price {
  }

  .pricing {
    padding-bottom: theme("spacing.6");
    font-size: theme("fontSize.4xl");
  }

  .name {
    font-size: theme("fontSize.2xl");
  }

  .subscript{
    font-size: theme("fontSize.sm");
    color: theme("colors.yellow.900")
  }
}
</style>
