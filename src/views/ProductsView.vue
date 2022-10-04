<template lang="">
  <div class="w-full mx-auto pt-10">
    <!-- <h1 class="text-black text-4xl p-[3rem] font-title">RO<span
              class="text-teal-800 text-6xl">k</span>U</h1> -->
    <div class="px-9 dark:text-white">
      <h1 class="text-center font-bold dark:text-white text-3xl">
        Purchase the Key to a Greater Business Solution
      </h1>
      <h1 class="text-xl text-center dark:text-gray-200 pt-3">
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

    <main class="flex flex-col space-y-10 items-center w-full mx-auto  my-12 pt-6">
      <div class="dark:bg-opacity-40 bg-white p-6 shadow-md rounded-3xl w-[95%] " id="starter">
        <div class="md:border-dashed md:w-full md:border-2 md:border-[#F1F1F2] md:p-5 md:rounded-2xl flex flex-col md:flex-row space-y-3 md:space-x-9 md:justify-center items-center">
          <img src="@/assets/images/snappy-pos.png" class="md:w-2/5 w-4/5 h-4/5 " alt="" />
          <div class="flex flex-col w-full dark:text-white space-y-3 items-center">
            <div class="">
              <p class="name text-center md:text-4xl">Starter</p>
              <span class="pricing text-3xl md:text-3xl">N2,500 / <span class="text-2xl">Day</span></span>
            </div>
            <div class="rounded-3xl border-[#F1F1F2] border-dashed w-full /*border-double*/ p-3 md:p-9 border-2 ">
            <ul>
            <li class="p-1">
                Recommended for trade fairs and parties that only go on for a few
              days</li>
            </ul>
              <ul id="features" class="flex items-start space-y-2 flex-col">
                <li class="flex justify-center space-x-2 items-center">
                  <div class="w-[24px] h-[24px] bg-[url('@/assets/icons/light-light.svg')] dark:bg-[url('@/assets/icons/light-dark.svg')]"></div><p class="text-[14px] md:text-lg">No minimum transaction volume</p>
                </li>
                <li class="flex justify-center space-x-2 items-center">
                  <div class="w-[24px] h-[24px] bg-[url('@/assets/icons/light-light.svg')] dark:bg-[url('@/assets/icons/light-dark.svg')]"></div><p class="text-[14px] md:text-lg">24Hr Customer Support</p>
                </li>
                <li class="flex justify-center space-x-2 items-center">
                  <div class="w-[24px] h-[24px] bg-[url('@/assets/icons/light-light.svg')] dark:bg-[url('@/assets/icons/light-dark.svg')]"></div><p class="text-[14px] md:text-lg">1.5% transaction fees capped at N1000 </p>
                </li>
              </ul>
            </div>
            <div class="w-full flex flex-col items-center space-y-3" v-if="user">
              <div class="flex space-x-4" >
                  <button
                      class="font-bold rounded-full bg-sub text-white px-2"
                      @click="incrStarter()"
                  >+</button>
                  <p>{{productState.starter_qty}}</p>
                  <button
                      class="font-bold rounded-full bg-sub text-white px-2"
                      @click="decrStarter"
                  >-</button>
              </div>
              <button
                    @click="checkout(2500, 'Starter Package' ,productState.starter_qty)"
                    class="bg-sub text-white flex space-x-4 items-center justify-center  dark:bg-sub w-4/5 rounded-full shadow-md py-2"
                  >
                  <img
                src="@/assets/icons/shopping-cart-24.png"
                class="h-[24px] w-[24px]"
                alt=""
              /> <p>Add to Cart</p>
                  </button>
            </div>
            
          </div>
        </div>
      </div>
      <div class="dark:bg-opacity-40 bg-white p-6 shadow-md rounded-3xl w-[95%]" id="enterprise">
        <div class="md:border-dashed md:w-full md:border-2 md:border-[#F1F1F2] md:p-5 md:rounded-2xl flex flex-col md:flex-row space-y-3 md:space-x-9 md:justify-center items-center">
          <img src="https://www.horizonpay.ng/assets/img/partner6.png" class="md:w-2/5 w-4/5 h-4/5 " alt="" />
          <div class="flex flex-col w-full dark:text-white space-y-3 items-center">
            <div class="">
              <p class="name text-center md:text-4xl">Enterprise</p>
              <span class="pricing text-3xl md:text-3xl">N30,000 / <span class="text-2xl">Month</span></span>
            </div>
            <div class="rounded-3xl border-[#F1F1F2] w-full border-dashed  /*border-double*/ p-3 md:p-9 border-2 ">
              <ul>
              <li class="p-1">
                  Recommended for Seasonal businesses </li>
            </ul>
              <ul class="flex items-start space-y-2 flex-col">
                <li class="flex justify-center space-x-2 items-center">
                  <div class="w-[24px] h-[24px] bg-[url('@/assets/icons/light-light.svg')] dark:bg-[url('@/assets/icons/light-dark.svg')]"></div><p class="text-[14px] md:text-lg">No minimum transaction volume</p>
                </li>
                <li class="flex justify-center space-x-2 items-center">
                  <div class="w-[24px] h-[24px] bg-[url('@/assets/icons/light-light.svg')] dark:bg-[url('@/assets/icons/light-dark.svg')]"></div><p class="text-[14px] md:text-lg">24Hr Customer Support</p>
                </li>
                <li class="flex justify-center space-x-2 items-center">
                  <div class="w-[24px] h-[24px] bg-[url('@/assets/icons/light-light.svg')] dark:bg-[url('@/assets/icons/light-dark.svg')]"></div><p class="text-[14px] md:text-lg">1% transaction fees capped at N1000 </p>
                </li>
              </ul>
            </div>
            <div class="w-full flex flex-col items-center space-y-3" v-if="user">
              <div class="flex space-x-4">
                  <button
                      class="font-bold rounded-full bg-sub text-white px-2"
                      @click="incrEnterprise()"
                  >+</button>
                  <p>{{productState.enterprise_qty}}</p>
                  <button
                      class="font-bold rounded-full bg-sub text-white px-2"
                      @click="decrEnterprise()"
                  >-</button>
              </div>
              <button
                    @click="checkout(30000, 'Enterprise Package' ,productState.enterprise_qty)"
                    class="bg-sub text-white flex space-x-4 items-center justify-center  dark:bg-sub w-4/5 rounded-full shadow-md py-2"
                  >
                  <img
                src="@/assets/icons/shopping-cart-24.png"
                class="h-[24px] w-[24px]"
                alt=""
              /> <p>Add to Cart</p>
                  </button>
            </div>
            
          </div>
        </div>
      </div>
      <div class="dark:bg-opacity-40 bg-white p-6 shadow-md rounded-3xl w-[95%]" id="bespoke">
        <div class="md:border-dashed md:w-full md:border-2 md:border-[#F1F1F2] md:p-5 md:rounded-2xl flex flex-col md:flex-row space-y-3 md:space-x-9 md:justify-center items-center">
          <img src="https://www.horizonpay.ng/assets/img/partner6.png" class="md:w-2/5 w-4/5 h-4/5 " alt="" />
          <div class="flex flex-col w-full dark:text-white space-y-3 items-center">
            <div class="">
              <p class="name text-center md:text-4xl">Bespoke</p>
              <span class="pricing text-3xl md:text-3xl">N120,000<span class="text-2xl"></span></span>
            </div>
            <div class="rounded-3xl border-[#F1F1F2] w-full border-dashed /*border-double*/ p-3 md:p-9 border-2 ">
              <ul>
            <li>Up front purchase of the terminal unit</li>
          </ul>
              <ul class="flex items-start space-y-2 flex-col">
                <li class="flex justify-center space-x-2 items-center">
                  <div class="w-[24px] h-[24px] bg-[url('@/assets/icons/light-light.svg')] dark:bg-[url('@/assets/icons/light-dark.svg')]"></div><p class="text-[14px] md:text-lg">No minimum transaction volume</p>
                </li>
                <li class="flex justify-center space-x-2 items-center">
                  <div class="w-[24px] h-[24px] bg-[url('@/assets/icons/light-light.svg')] dark:bg-[url('@/assets/icons/light-dark.svg')]"></div><p class="text-[14px] md:text-lg">24Hr Customer Support</p>
                </li>
                <li class="flex justify-center space-x-2 items-center">
                  <div class="w-[24px] h-[24px] bg-[url('@/assets/icons/light-light.svg')] dark:bg-[url('@/assets/icons/light-dark.svg')]"></div><p class="text-[14px] md:text-lg">0.5% transaction fees capped at N1000 </p>
                </li>
              </ul>
            </div>
            <div class="w-full flex flex-col items-center space-y-3" v-if="user">
              <div class="flex space-x-4" >
                  <button
                      class="font-bold rounded-full bg-sub text-white px-2"
                      @click="incrBespoke()"
                  >+</button>
                  <p>{{productState.bespoke_qty}}</p>
                  <button
                      class="font-bold rounded-full bg-sub text-white px-2"
                      @click="decrBespoke()"
                  >-</button>
              </div>
              <button
                    @click="checkout(120000, 'Bespoke Package' ,productState.bespoke_qty)"
                    class="bg-sub text-white flex space-x-4 items-center justify-center  dark:bg-sub w-4/5 rounded-full shadow-md py-2"
                  >
                  <img
                src="@/assets/icons/shopping-cart-24.png"
                class="h-[24px] w-[24px]"
                alt=""
              /> <p>Add to Cart</p>
                  </button>
            </div>
          </div>
        </div>
      </div>
    </main>

    <div class="bg-green-600 hidden text-white font-bold text-3xl text-center p-9">
        <h1>What are the benefits of <span class="font-title">Snappy?</span></h1>
        <p class="text-2xl">- &#128293 FIRE MARKETTING</p>
        <p class="text-2xl">- &#128293 FIRE MARKETTING</p>
        <p class="text-2xl">- &#128293 FIRE MARKETTING</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { useToast } from "vue-toastification";
export default {
  props: ["price"],
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  methods: {
    checkout: function (price, product, qty) {
      if(qty<=0){
        this.toast.warning("Please pick a Quantity", {timeout:2000});
      }else{
        this.$store.dispatch("productModule/updateorder", {
        price: price *qty,
        product,
        qty,
      }).then(()=>{
        console.log(price, product, image);
        this.$store.dispatch("productModule/updateTotal",price*qty);
        this.$store.dispatch("productModule/clearQty");
      });
      this.toast.success("Item added to cart", {timeout:1500});
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
      if(this.productState.starter_qty<=0){
        return;
      }this.$store.dispatch("productModule/decrementStarter");
    },
    incrEnterprise(){
      this.$store.dispatch("productModule/incrementEnterprise");
    },
    decrEnterprise(){
      if(this.productState.enterprise_qty<=0){
        return;
      }this.$store.dispatch("productModule/decrementEnterprise");
    },
    incrBespoke(){
      this.$store.dispatch("productModule/incrementBespoke");
    },
    decrBespoke(){
      if(this.productState.bespoke_qty<=0){
        return;
      }else{this.$store.dispatch("productModule/decrementBespoke");}
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
      user: "getUser"
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
    /* border-radius: theme("borderRadius.lg");
    padding: theme("spacing.3");
    box-shadow: theme("boxShadow.md"); */
  }

  .price {
  }

  .pricing {
    padding-bottom: theme("spacing.6");
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
