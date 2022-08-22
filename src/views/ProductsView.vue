<template>
  <div class="w-full h-[30rem] bg-about bg-center bg-cover">
    <div class="h-full text-center backdrop-blur backdrop-brightness-[.3]">
      <h1 class="text-white text-6xl md:text-9xl text-center pt-36 font-title">
        RO<span class="text-teal-800 text-8xl md:text-[10rem]">k</span>U
      </h1>
      <p class="w-full text-2xl text-white">
        Choose from our selection of POS terminal devices. From the iconic
        <i>PAX-90</i> terminal to the modern <i>SRS-90</i> Android terminal
      </p>
    </div>
  </div>
  <div class="p-6">
    <div
      class="w-full flex flex-col"
      v-for="product in productState.list"
      :key="product.id"
    >
      <img :src="product.image" class="w-[25rem] mx-auto" alt="" />
      <div class="">
        <h1 class="text-4xl text-center font-title">
          {{ product.productName }}
        </h1>
        <div class="flex space-x-9">
          <div
            class="card"
            v-for="plan in product.plans"
            :key="product.plans.id"
          >
            <p class="pricing">{{ plan.name }}</p>
            <span class="">N{{ plan.price }}</span>
            <!-- <span>/Month</span><br /> -->
            <p>
              {{ plan.description }}
            </p>
            <p class="subscript">
              Note: each transaction has a 0.5% fee attached to it.
            </p>
            <button
              class="bg-green-400 text-white rounded-full hover:shadow-md px-6 py-2 mt-6"
              @click="purchase(plan.price, product.productName, product.image)"
            >
              Rent
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { ProductService } from "../services/products.service";

export default {
  methods: {
    purchase: function (price, product, image) {
      this.$store.dispatch("productModule/updateProducts", {
        price,
        product,
        image,
      });
      console.log(price, product, image);
      this.$router.push({
        name: "checkout",
        // params: { price: price, product: product, image: image },
      });
    },
  },
  computed: mapGetters({
    productState: "getProductState",
  }),
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
    box-shadow: theme("boxShadow.md");
  }

  .price {
  }

  .pricing {
    padding-bottom: theme("spacing.2");
    font-size: theme("fontSize.lg");
  }

  .name {
    font-size: theme("fontSize.xl");
  }

  .subscript {
    font-size: theme("fontSize.sm");
    color: theme("colors.gray.400");
  }
}
</style>
