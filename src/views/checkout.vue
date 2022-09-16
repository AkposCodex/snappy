<template>
  <div class="text-center">
    <h1 class="text-6xl">Welcome, {{ userState.bio.firstName }}</h1>
    <!-- <a href="/products">Go to geocoder</a> -->
    <div class="text-2xl" v-if="productState.order.products.length <= 0">
      <h1>You don't have any Items added,</h1>
      <span
        >Return to <i>Product</i> to rent a
        <a href="/buy-now" class="text-green-900 font-bold">POS</a></span
      >
    </div>
  </div>
  <div id="last-step" class="hidden md:block text-center p-6">
    <h1 class="text-4xl text-zinc-500 w-max mx-auto hidden">One Last Step!</h1>
    <p v-if="productState.order.products.length != 0">
      Please confirm the details of your rental and complete the checkout.
    </p>
  </div>
  <div class="w-full h-min md:flex">
    <div id="order-details" class="h-full mx-auto bg-whitep-8 md:w-4/5">
      <div
        id="details"
        class=""
        v-if="productState.order.products.length != 0 && steps == 1"
      >
        <h1 class="text-3xl">Order Details</h1>
        <div
          id="product-list"
          class="mt-12 bg-gray-100 p-5 rounded-lg"
          v-for="items in productState.order.products"
          :key="items.product"
        >
          <ul class="grid grid-cols-2 items-center bg-slate-50">
            <li class="m-3 text-lg">Item name</li>
            <li class="m-3 font-bold">{{ items.product }}</li>
            <li class="m-3 text-lg">Price</li>
            <li class="m-3 font-bold">N{{ items.price }}</li>
            <li class="m-3 text-lg">Quantity</li>
            <li class="m-3 font-bold">{{ items.qty }}</li>
          </ul>
          <button
            @click="clear(items.index, items.price)"
            class="shadow-md w-40 p-1 bottom-0 bg-sub text-white rounded-md text-lg hover:bg-main"
          >
            Clear product
          </button>
        </div>
        <p v-if="getTotal != 0" class="bg-gray-100 mt-3 p-3 text-xl">
          Sum Total: N{{ getTotal }}
        </p>
        <div class="mt-3">
          <input
            type="checkbox"
            name="confirmation"
            id=""
            @change="completeorder()"
            aria-label="Confirm order Detils"
            class="m-2"
          /><label for="confimation">Confirm Order Details</label>
          <details>
            <summary>Attestation</summary>
            <ul>
              <li>I agree that the above details are correct</li>
              <li>I agree to pay the above sum immediately</li>
              <li>
                I agree to return the products after their alloted time has
                expired
              </li>
            </ul>
          </details>
        </div>
        <div
          id="delivery-opt"
          class="bg-slate-50 mt-2 p-4"
          v-if="
            productState.order.products.length > 0 &&
            (!steps == 2 || steps == 1)
          "
        >
          <h1 class="text-xl">Delivery Options</h1>
          <div class="flex justify-start mt-3">
            <button
              @click="pay()"
              class="p-2 rounded-lg text-sm hover:text-white bg-white mr-3 mt-1 shadow-md border hover:bg-teal-500 border-none border border-zinc-400"
            >
              <paystack
                :disabled="!orderID"
                @mouseenter="pay()"
                buttonText="Complete shipment"
                :publicKey="publicKey"
                :email="userState.bio.emailAddress"
                :amount="amount"
                :reference="reference"
                :onSuccess="onSuccessfulPayment"
                :onCancel="onCancelledPayment"
              ></paystack>
            </button>
            <button
              @click="btnClick()"
              class="p-2 text-sm rounded-lg hover:text-white bg-white mt-1 shadow-md border-none border hover:bg-teal-500 border-zinc-400"
            >
              Dispatch drop-off
            </button>
          </div>
        </div>
      </div>

      <div id="dispatch" class="justify-end mt-6" v-if="steps == 2">
        <h1 class="text-4xl text-center">Delivery via Dispatch</h1>
        <p class="text-sm py-3">
          <span class="font-bold">Note: </span>Drop-off delivery is handled by a
          third-party courier service. As such the price for the service is
          yours to bear.
        </p>
        <input type="checkbox" v-model="useData" /><label class="m-3" for=""
          >Use saved information(registration details)?</label
        >
        <div id="default-data" v-if="useData" class="mt-12">
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
              {{ userState.mainAddress }}
            </li>
          </ul>
        </div>
        <form id="computed-data" v-if="!useData">
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
          <div class="">
            <label for="" class="m-3">Phone Number</label>
            <input
              type="text"
              name="email"
              :maxlength="11"
              class="peer block w-full form-input my-3 md:ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder="Phone Number"
            />
          </div>
          <div class="">
            <label for="" class="m-3">Email Address</label>
            <input
              type="text"
              name="email"
              class="peer block w-full form-input my-3 md:ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder="Email Address"
            />
          </div>
          <div class="">
            <label for="" class="m-3">Address</label>
            <textarea
              rows="3"
              type="text"
              name="address"
              v-model="address"
              class="peer block w-full form-input my-3 md:ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder="Address"
            ></textarea>
          </div>
        </form>
        <div class="">
          <!-- <button @click="orderLoader" class="bg-gray-100 p-3 rounded-lg">
            <b>Get Shipment Quote</b>
          </button> -->
          <button class="bg-sub text-white p-3 rounded-lg" @click="payInfo()">
            <paystack
              :disabled="!useData"
              buttonText="Complete shipment"
              :publicKey="publicKey"
              :email="userState.bio.emailAddress"
              :amount="amount"
              :reference="reference"
              :onSuccess="onSuccessfulPayment"
              :onCancel="onCancelledPayment"
            ></paystack>
          </button>
          <p>*Shipping fees included </p>
        </div>
        <!-- <p>Total cost of Shipping is: N{{ response }}</p> -->
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
// import paystack from "vue-paystack";
import paystack from "vue3-paystack";
import { v4 as uuidv4 } from "uuid";
import shippingService from "../services/snappyService/ShippingService";
import { sum } from "lodash";

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
      // amount: 20000,
      publicKey: "process.env.VITE_PAYSTACKKEY_PUBLIC",
      email: "litle1akp@gmail.com",
      address: "",
      response: "",
      orderID: false,
      filled: "",
      first: () => {
        sum(this.productState.order.products.price);
      },
    };
  },

  components: {
    paystack,
  },

  computed: {
    ...mapGetters({
      productState: "getProductState",
      userState: "getUserState",
      mainAddress: "getAddress",
      orderState: "getOrderState",
      getTotal: "getTotal",
    }),

    reference: function () {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    },
    amount: function () {
      var amount = (this.filled + this.getTotal) * 100;
      return amount;
    },
  },

  methods: {
    home() {
      this.steps = 1;
    },

    payOff() {
      this.steps = 4;
    },

    log() {
      console.log(process.env.VUE_APP_PAYSTACKKEY_PUBLIC);
    },

    clear(index, price) {
      this.$store.dispatch("productModule/removeItem", { index, price });
      console.log(this.productState.order.products);
      if (this.productState.order.products.length == 0) {
        this.$store.dispatch("productModule/cleartotal");
      }
    },

    onSuccessfulPayment: function () {
      for (let i = 0; i < this.productState.order.products.length; i++) {
        this.$store.dispatch("orderModule/fillOrder", {
          uid: this.userState.id,
          oid: uuidv4(),
          packageName: this.productState.order.products[i].product,
          price: this.productState.order.products[i].price,
          qty: this.productState.order.products[i].qty,
          status: "PENDING",
        });
      }
      this.$store.dispatch("productModule/clearorder");
      this.$router.push("/dash");
      console.log(this.orderState);
      window.alert("Fired off");
    },

    onCancelledPayment: function () {
      console.log("Payment cancelled by user");
      window.alert("Cut off");
    },

    prev: function () {
      this.steps -= 1;
    },

    total: () => {
      for (item in productState.order.products.price)
        summ += productState.order.products.price;
      return this.summ;
    },

    callback: function (response) {
      console.log(response);
    },

    close: function () {
      console.log("Payment closed");
    },

    async btnClick() {
      if (!this.orderID == "") {
        this.steps = 2;
        this.filled = await this.$store.dispatch("loadShipmentPrice", {
          ReceiverAddress: this.mainAddress,
          CustomerCode: "ECO001449",
          SenderLocality: "Eti Osa",
          SenderAddress:
            "26B Ibeju Lekki Street, Dolphin Estate, Ikoyi Obalende, Lagos, Nigeria",
          VehicleType: "BIKE",
          ReceiverPhoneNumber: this.userState.bio.phoneNumber,
          SenderPhoneNumber: "07043151949",
          SenderName: "SNAPPY PAY",
          UserId: "f02ff192-11af-46b6-bd0a-bf118d0c3d47",
          ReceiverStationId: "4",
          SenderStationId: "4",
          ReceiverLocation: this.userState.geoLocation,
          SenderLocation: shippingService.senderLocation,
          PreShipmentItems: this.productState.order.products,
        });
      } else {
        window.alert("Please confirm your order");
      }
    },

    goBack() {
      this.steps = 1;
    },

    pay() {
      if (this.orderID == false) {
        window.alert("Please confirm your order");
      } else return;
    },

    payInfo() {
      if (this.useData == false) {
        window.alert("Please confirm your address");
      } else return;
    },

    quote: async function () {
      if (this.address != "") {
        this.response = await this.$store.dispatch("loadPoints", {
          address: this.address,
        });
      } else {
        this.response = await this.$store.dispatch("loadPoints", {
          address: this.userState.mainAddress,
        });
        console.log(this.response);
      }
    },
    GIG: async () => {
      recieverAddress = response.data.result[0].formatted_address;
    },
    completeorder() {
      this.orderID = !this.orderID;
      // this.$store.dispatch("productModule/completeorder", this.orderID);
    },
    orderLoader() {
      this.response = this.filled;
      console.log(this.filled);
    },
  },
};
</script>
<style>
.card {
  background-color: theme("colors.white");
  border-radius: theme("borderRadius.lg");
  padding: theme("spacing.6");
}

.pricing {
  padding-bottom: theme("spacing.6");
  font-size: theme("fontSize.4xl");
}

.name {
  font-size: theme("fontSize.2xl");
}
</style>
