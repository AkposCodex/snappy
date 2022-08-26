<template lang="">
  <div class="w-full mx-auto pt-10">
    <!-- <h1 class="text-black text-4xl p-[3rem] font-title">RO<span
              class="text-teal-800 text-6xl">k</span>U</h1> -->
    <div class="px-9">
      <h1 class="text-center font-bold text-black text-3xl">
        Purchase the Key to a Greater Business Solution
      </h1>
      <p class="text-center">
        Below are our plans to get you started on the path to success. <br />
        Choose from any of the plans to get started.
      </p>
    </div>

    <main class="flex flex-col space-y-10 w-4/5 justify-center mx-auto my-12 pt-6">
      <div class="card flex">
        <img src="@/assets/images/products/POS.png" class="md:w-2/5 w-2/5 mx-auto" alt="" />
        <div class="w-2/5" id="details">
            <p class="name">Starter</p>
            <span class="pricing">N2500</span>
            <span>/Day</span>
          <ul>
            <li class="flex items-start my-3">You receive the POS for a single day to to do transactions.</li>
            <li>Units: {{productState.starter_qty}}</li>
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
          </ul>
          <button

            @click="checkout(2500, 'Starter Package' ,'@/assets/images/products/POS.png',productState.starter_qty)"
            class="bg-green-400 text-white rounded-full hover:shadow-md px-6 py-2 mt-6"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div class="card flex">
        <img src="@/assets/images/products/POS.png" class="md:w-2/5 w-2/5 mx-auto" alt="" />
        <div class="w-2/5" id="details">
          <div>
            <span class="pricing hover:shadow-inner">N30000</span>
            <p class="name">Enterprise</p>
          </div>
          <ul>
            <li>You recieve the POS for a month to do business.</li>
            <li>Units: {{productState.enterprise_qty}}</li>
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
          </ul>
          <button
            @click="checkout(30000, 'Enterprise Package' ,'@/assets/images/products/POS.png',productState.enterprise_qty)"
            class="bg-green-400 text-white rounded-full hover:shadow-md px-6 py-2 mt-6"
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div class="card flex justify-between">
        <img src="@/assets/images/products/POS.png" class="md:w-2/5 w-2/5 mx-auto" alt="" />
        <div class="w-2/5" id="details">
          <div>
            <span class="pricing">N120000</span>
            <p class="name">Bespoke</p>
          </div>
          <ul>
            <p>Up front purchase of the terminal unit</p>
            <li>Units: {{productState.bespoke_qty}}</li>
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
          </ul>
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
        this.$store.dispatch("productModule/updateProducts", {
        price,
        product,
        image,
        qty,
      });
      window.alert(product + " \ added to cart");
      console.log(price, product, image);
      console.log(this.productState.products);
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
    padding: theme("spacing.6");
    /* box-shadow: theme("boxShadow.md"); */
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
