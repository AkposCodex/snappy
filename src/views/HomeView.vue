<script>
import Landingbutton from "../components/landingbutton.vue";
import { RouterLink, RouterView } from "vue-router";
import { mapGetters } from "vuex";

export default {
  components: { Landingbutton },
  methods: {
    btnClick: function () {
      if (!this.user) {
        this.$router.push({ path: "/sign-up" });
        console.log(this.user);
      } else {
        this.$router.push({ path: "/products" });
        console.log(this.user);
      }
    },
  },
  computed: mapGetters({
    user: "getUser",
  }),
};
</script>
<style>
.details {
  padding-top: theme("spacing.20");
}
</style>

<template>
  <main>
    <div
      id="hero"
      class="relative bg-[url('@/assets/images/clay-banks-unsplash.jpeg')] h-full md:h-[35rem] bg-center bg-cover"
    >
      <div class="h-full backdrop-brightness-[.3]">
        <div
          class="text-white flex-col space-y-6 container mx-auto text-center right-2 py-6 px-4 z-50"
        >
          <h1
            class="text-white text-6xl md:text-9xl text-center pt-[1rem] md:pt-[5rem] font-title"
          >
            RO<span class="text-teal-800 text-8xl md:text-[10rem]">k</span>U
          </h1>
          <h1 class="w-full text-4xl">
            Empowering you to do business on your terms
          </h1>
          <p class="text-xl right-0">
            Powered by 3Gee Pay, licensed under CBN for PTSP serveices
          </p>
          <button
            @click="btnClick()"
            class="p-2 w-52 bottom-0 bg-green-800 rounded-full text-lg hover:ring ring-green-200/50 hover:bg-green-700"
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
    <section class="details">
      <h1 class="text-5xl text-center dark:text-white">Meet the Roku app.</h1>
      <p class="text-lg sm:w-3/5 p-4 dark:text-white text-center mx-auto sm:mb-9">
        A card machine that combines sleek design and powerful technology – for
        reliable, fast and secure payments at the till, the table or on the
        move.
      </p>
      <LandingComponent
        title="Sync your transactions."
        sub_title="INTEGRATED PAYMENTS"
        content="Enjoy effortless integrated payments – software that wirelessly connects your card machine to your EPOS in the cloud. For a smooth experience and easy end-of-day reporting."
        class="md:flex-row-reverse dark:text-white"
        image="https://dojo.tech/media/ypjiwmgn/homepage-asset_01.jpg?center=0.4999819679846001,0.47394164354520407&mode=crop&quality=70&width=640&height=441&rnd=132918143489800000"
      />
      <LandingComponent
        title="Take faster payments."
        sub_title="SUPERFAST TRANSACTIONS"
        content="Process card transactions 80% faster than the industry average. Shorter queues mean happier customers – and a till that won’t stop ringing."
        reversed="w-[12rem]"
        class="dark:text-white"
        image="https://dojo.tech/media/0cyo4333/homepage-asset_02.jpg?anchor=center&mode=crop&quality=70&width=640&height=441&rnd=132875130902500000"
      />
      <Landingbutton
        title="Get paid, tomorrow."
        sub_title="NEXT-DAY TRANSFERS"
        content="Get your takings the very next day. For free, even on weekends and bank holidays – we're the only UK payments provider that doesn't charge you for the privilege."
        reversed="w-[12rem]"
        class="md:flex-row-reverse dark:text-white"
        inner_html="Get started"
        image="https://dojo.tech/media/zawjsigw/homepage-asset_03.jpg?anchor=center&mode=crop&quality=70&width=640&height=441&rnd=132875131197130000"
      />

      <Landingbutton
        title="Enjoy instant insights."
        sub_title="THE ROKU APP"
        content="Download the Dojo app or view it on your web browser and get transaction breakdowns and transfer notifications wherever, whenever. And with the app, PCI compliance takes a matter of minutes."
        reversed="w-[12rem]"
        inner_html="Get started"
        class="dark:text-white"
        image="https://dojo.tech/media/lcrfvujg/adobestock_226083031.jpg?anchor=center&mode=crop&quality=70&width=640&height=427&rnd=132875131442730000"
      />
    </section>
    <div class="p-9 text-center flex-col space-y-6">
      <h2 class="text-2xl font-title">SIGN UP</h2>
      <p class="text-lg dark:text-white">
        Signing up requires only your personal information and your BVN in order
        to get you set up on the platform
      </p>
      <button
        @click="btnClick()"
        class="p-2 w-52 bottom-0 text-white bg-green-800 rounded-full text-lg hover:ring ring-green-200/50 hover:bg-green-700"
      >
        Get Started
      </button>
    </div>
  </main>
</template>
