<template lang="">
  <div class="w-full mx-auto pt-10">
    <!-- <h1 class="text-black text-4xl p-[3rem] font-title">RO<span
              class="text-teal-800 text-6xl">k</span>U</h1> -->
    <h1 class="text-center font-bold text-black text-3xl">
      Purchase the Key to a Greater Business Solution
    </h1>
    <p class="text-center">
      Below are our plans to get you started on the path to success. <br />
      Choose from any of the plans to get started.
    </p>

    <main class="flex space-x-9 w-4/5 justify-center mx-auto my-12 pt-6">
      <div class="card">
        <div>
          <span class="pricing">N5000</span>
          <span>/Day</span>
          <p class="name">Starter</p>
          <p>You receive ownership of the POS for a single day to to do transactions.</p>
          <p class="subscript">Note: each transaction has a 0.5% fee attached to it.</p>
          <hr class="p-4" />
        </div>
        <ul>
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
            <span>Non-renewable</span>
          </li>
        </ul>
        <button
          @click="checkout"
          class="bg-green-400 text-white rounded-full hover:shadow-md px-6 py-2 mt-6"
        >
          Buy Now
        </button>
      </div>
      <div class="card">
        <div>
          <span class="pricing hover:shadow-inner">N15000</span>
          <span>/Week</span>
          <p class="name">Community</p>
          <p>You receive ownership of the POS for a week to to do transactions.</p>
          <p class="subscript">Note: each transaction has a 0.5% fee attached to it.</p>
          <hr class="p-4" />
        </div>
        <ul>
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
            <span>Renewable</span>
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
            <span>Fire Marketting</span>
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
            <span>Fire Marketting</span>
          </li>
        </ul>
        <button
          @click="checkout"
          class="bg-green-400 text-white rounded-full hover:shadow-md px-6 py-2 mt-6"
        >
          Buy Now
        </button>
      </div>
      <div class="card">
        <div>
          <span class="pricing">N30000</span>
          <span>/Month</span>
          <p class="name">Enterprise</p>
          <p>You receive ownership of the POS for a month to to do transactions.</p>
          <p class="subscript">Note: each transaction has a 0.5% fee attached to it.</p>
          <hr class="p-4" />
        </div>
        <ul>
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
            <span>Fire Marketting</span>
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
            <span>Fire Marketting</span>
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
            <span>Fire Marketting</span>
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
            <span>Fire Marketting</span>
          </li>
        </ul>
        <button
          @click="checkout"
          class="bg-green-400 text-white rounded-full hover:shadow-md px-6 py-2 mt-6"
        >
          Buy Now
        </button>
      </div>
    </main>

    <div class="bg-green-600 text-white font-bold text-3xl text-center p-9">
        <h1>What are the benefits of <span class="font-title">ROkU?</span></h1>
        <p class="text-2xl">- &#128293 FIRE MARKETTING</p>
        <p class="text-2xl">- &#128293 FIRE MARKETTING</p>
        <p class="text-2xl">- &#128293 FIRE MARKETTING</p>
    </div>

  </div>
</template>
<script>
export default {
  props: ["price"],
  methods: {
    checkout: function () {
      this.$router.push({ path: "/products" })
    },
  }
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
    padding-bottom: theme("spacing.6");
    font-size: theme("fontSize.4xl");
  }

  .name {
    font-size: theme("fontSize.2xl");
  }

  .subscript{
    font-size: theme("fontSize.sm");
    color: theme("colors.gray.400")
  }
}
</style>
