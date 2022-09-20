<script>
import Landingbutton from "../components/landingbutton.vue";
import { RouterLink, RouterView } from "vue-router";
import { mapGetters } from "vuex";

export default {
  components: { Landingbutton },
  methods: {
    btnClick: function () {
      if (!this.user) {
        // this.$router.go()
        this.$router.push({ name: "signup", params: { signUp: true } });
        console.log(this.user);
      } else {
        this.$router.push({ path: "/about-us" });
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
      class="relative bg-[url('@/assets/images/clay-banks-unsplash.jpeg')] h-[100vh] md:h-[25rem] bg-center bg-cover"
    >
      <div class="h-full /*backdrop-brightness-[.5]*/ w-full relative">
        <div
          class="text-black absolute bg-white bg-opacity-70 w-[100vw] bottom-0 container text-center py-2 px-4 z-50"
        >
          <!-- <img
            src="@/assets/icons/snappypayv1.svg"
            alt=""
            class="w-4/5 mt-3 mx-auto"
          /> -->
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
          <!-- <img
            src="https://www.horizonpay.ng/assets/img/partner6.png"
            class=" mx-auto w-[350px] h-4/5"
            alt=""
          /> -->
          
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
      <LandingComponent
        title="Sync your transactions."
        sub_title="INTEGRATED PAYMENTS"
        content="Enjoy effortless integrated payments – software that wirelessly connects your card machine to your EPOS in the cloud. For a smooth experience and easy end-of-day reporting."
        class="md:flex-row-reverse hidden dark:bg-red-700"
        image="https://dojo.tech/media/ypjiwmgn/homepage-asset_01.jpg?center=0.4999819679846001,0.47394164354520407&mode=crop&quality=70&width=640&height=441&rnd=132918143489800000"
      />
      <LandingComponent
        title="Take faster payments."
        sub_title="SUPERFAST TRANSACTIONS"
        content="Process card transactions 80% faster than the industry average. Shorter queues mean happier customers – and a till that won’t stop ringing."
        reversed="w-[12rem]"
        class="dark:text-white"
        image="https://3geepay.com.ng/wp-content/uploads/2020/07/3gpay-thumb-14.jpg"
      />
      <Landingbutton
        title="Get paid, Today!"
        sub_title="SAME-DAY TRANSFERS"
        content="Enjoy seamless payment and quick settlement to take your business to the next level. Join us as the first payment service in Nigeria to offer same day settlements into your preferred account."
        reversed="w-[12rem]"
        class="md:flex-row-reverse dark:text-white"
        inner_html="Get started"
        image="https://3geepay.com.ng/wp-content/uploads/2020/07/shutterstock_600927191.jpg"
      />

      <Landingbutton
        title="Enjoy instant insights."
        sub_title="THE SNAPPY APP"
        content="Download the Snappy app and get transaction breakdowns and transfer notifications wherever, whenever. And with the app, PCI compliance takes a matter of minutes."
        reversed="w-[12rem]"
        inner_html="Get started"
        class="dark:text-white"
        image="https://3geepay.com.ng/wp-content/uploads/2020/07/3gp-thumb3.jpg"
      />
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
</template>
