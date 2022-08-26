<template>
  <div class="w-full h-min md:flex bg-gray-100">
    <div class="hidden md:block w-1/2 text-center p-6">
      <h1 class="text-4xl text-zinc-500 w-max mx-auto">One Last Step!</h1>
      <p>
        Please confirm the details of your rental and complete the checkout.
      </p>
      <div class="w-4/5 h-[90%] mx-auto">
        <img
          class="w-[35rem] mx-auto"
          :src="productState.products.image"
          alt=""
        />
        <p class="font-title text-2xl text-center">
          {{ productState.products.product }}
        </p>
      </div>
    </div>

    <div class="h-full bg-white p-10 md:w-1/2">
      <h1 class="text-6xl">Welcome, {{ userState.bio.firstName }}</h1>
      <h1 class="text-3xl">Order Details</h1>
      <div class="" v-if="productState.products.length <= 0">
        <h1>You don't have any Items added</h1>
        <span
          >Return to <i>Product</i> to rent a
          <a href="/productsv2" class="text-green-900 font-bold">POS</a></span
        >
      </div>
      <div
        v-if="steps == 1"
        class="mt-12"
        v-for="items in productState.products"
      >
        <ul class="grid grid-cols-2 items-center bg-slate-50">
          <li class="m-3 text-lg">Item name</li>
          <li class="m-3 font-bold">{{ items.product }}</li>
          <li class="m-3 text-lg">Price</li>
          <li class="m-3 font-bold">N{{ items.price }}</li>
          <li class="m-3 text-lg">Quantity</li>
          <li class="m-3 font-bold">{{ items.qty }}</li>
        </ul>
        <button @click="clear(items.index)">Clear product</button>
        <!-- <ul class="grid grid-cols-2 items-center mt-2 bg-slate-50">
          <li class="m-3 text-lg">Customer</li>
          <li class="m-3 font-bold">
            {{ userState.bio.firstName }} {{ userState.bio.lastName }}
          </li>
          <li class="m-3 text-lg">Business Name</li>
          <li class="m-3 font-bold">
            {{ userState.businessDetails.businessName }}
          </li>
        </ul> -->
      </div>
      <div
        class="bg-slate-50 mt-2 p-4"
        v-if="productState.products.length > 0 && (!steps == 2 || steps == 1)"
      >
        <h1 class="text-xl">Delivery Options</h1>
        <div class="flex justify-start mt-3">
          <button
            @click="pay()"
            class="p-2 rounded-lg text-sm hover:text-white bg-white mr-3 mt-1 shadow-md border hover:bg-teal-500 border-none border border-zinc-400"
          >
            In-person Delivery
          </button>
          <button
            @click="btnClick()"
            class="p-2 text-sm rounded-lg hover:text-white bg-white mt-1 shadow-md border-none border hover:bg-teal-500 border-zinc-400"
          >
            Dispatch drop-off
          </button>
        </div>
      </div>

      <div
        v-if="steps == 3"
        class="w-4/5 rounded-lg bg-opacity-80 p-7 h-full mx-auto"
      >
        <div
          class="bg-icon w-[10rem] rounded-full my-6 mx-auto bg-cover shadow-md h-[10rem]"
        ></div>
        <p class="text-center">
          Click the button below to complete your rental
        </p>
        <div class="flex items-center">
          <button
            @click="home()"
            class="p-3 rounded-lg bg-blue-400 mx-auto shadow-md border bg-white border-solid border"
          >
            Checkout
          </button>
          <!-- <paystack
            :amount="amount * 100"
            :email="email"
            :paystackkey="PUBLIC_KEY"
            :callback="callback()"
            :close="close()"
            :reference="reference"
          >
            Make Payment({{ amount }})
          </paystack> -->
        </div>
      </div>

      <div class="justify-end mt-6" v-if="steps == 2">
        <p>
          <span class="font-bold">Note: </span>Drop-off delivery is handled by a
          third-party courier service. As such the price for the service is
          yours to bear.
        </p>
        <input type="checkbox" v-model="useData" /><label class="m-3" for=""
          >Use saved information(registration details)?</label
        >
        <div v-if="useData" class="mt-12">
          <ul class="grid grid-cols-2 items-center bg-slate-50">
            <li class="m-3 text-lg">First Name</li>
            <li class="m-3 font-bold">{{ userState.bio.firstName }}</li>
            <li class="m-3 text-lg">Last Name</li>
            <li class="m-3 font-bold">{{ userState.bio.lastName }}</li>
            <li class="m-3 text-lg">Phone Number</li>
            <li class="m-3 font-bold">{{ userState.bio.phoneNumber }}</li>
            <li class="m-3 text-lg">Email Address</li>
            <li class="m-3 font-bold">{{ userState.bio.emailAddress }}</li>
            <li class="m-3 text-lg">Address</li>
            <li class="m-3 font-bold">
              {{ userState.businessLocal.address }}
            </li>
          </ul>
        </div>
        <form action="" v-if="!useData">
          <div class="flex flex-col">
            <div class="">
              <label for="" class="m-3">First Name</label>
              <input
                type="text"
                name="email"
                class="peer block w-full form-input my-3 md:ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" First Name "
              />
            </div>
            <div class="">
              <label for="" class="m-3">Last Name</label>
              <input
                type="text"
                name="email"
                class="peer block w-full form-input my-3 md:ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                placeholder=" Last Name "
              />
            </div>
          </div>
          <label for="" class="m-3">Phone Number</label>
          <input
            type="text"
            name="email"
            :maxlength="11"
            class="peer block w-full form-input my-3 md:ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder="Phone Number"
          />
          <label for="" class="m-3">Email Address</label>
          <input
            type="text"
            name="email"
            class="peer block w-full form-input my-3 md:ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder="Email Address"
          />
          <label for="" class="m-3">Address</label>
          <textarea
            rows="3"
            type="text"
            name="email"
            class="peer block w-full form-input my-3 md:ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder="Address"
          ></textarea>
        </form>
        <!-- <div class="flex">
          <button
            @click="prev()"
            class="p-3 px-6 rounded-lg hover:text-white text-black m-4 shadow-md border-solid border hover:bg-teal-500 border-zinc-400"
          >
            Prev
          </button>
        </div> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import paystack from "vue-paystack";
export default {
  data() {
    return {
      start: "18th August",
      end: "25th August",
      cost: this.price,
      prod: this.product,
      img: this.image,
      steps: 1,
      useData: false,
      amount: 200,
      PUBLIC_KEY: "pk_test_5cab6f608a6febecb6107d24c24d4ada68649f2a",
      email: "litle1akp@gmail.com",
      // reference:
      //   "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
    };
  },
  components: {
    paystack,
  },

  computed: {
    ...mapGetters({
      productState: "getProductState",
      userState: "getUserState",
    }),
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (let i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    },
    // amount() {
    //   let cost = 0;
    //   this.productState.products.forEach((element) => {
    //     cost += element.price;
    //   });
    //   return cost;
    // },
  },

  methods: {
    btnClick() {
      this.steps = 2;
      console.log(this.steps);
    },

    home() {
      this.steps = 1;
    },

    clear(index) {
      this.$store.dispatch("productModule/removeItem", index);
      console.log(this.productState.products);
    },

    prev: function () {
      this.steps -= 1;
    },

    callback: function (response) {
      console.log(response);
    },
    close: function () {
      console.log("Payment closed");
    },
    pay() {
      this.steps = 3;
    },
  },
};
</script>
<style>
.card {
  background-color: theme("colors.white");
  border-radius: theme("borderRadius.lg");
  padding: theme("spacing.6");
  /* box-shadow: theme("boxShadow.md"); */
}

.pricing {
  padding-bottom: theme("spacing.6");
  font-size: theme("fontSize.4xl");
}

.name {
  font-size: theme("fontSize.2xl");
}
</style>
