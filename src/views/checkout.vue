<template>
  <div class="text-center dark:text-white">
    <h1 class="text-6xl">Welcome, {{ userState.bio.firstName }}</h1>
    <!-- <a href="/products">Go to geocoder</a> -->
    <button @click="log()">HERE!</button>
    <div class="text-2xl" v-if="productState.order.products.length <= 0">
      <h1>You don't have any Items added,</h1>
      <span
        >Return to <i>Product</i> to rent a
        <a href="/buy-now" class="text-main font-bold">POS</a></span
      >
    </div>
  </div>
  <div id="last-step" class="hidden md:block text-center dark:text-white p-6">
    <h1 class="text-4xl text-zinc-500 w-max mx-auto hidden">One Last Step!</h1>
    <p v-if="productState.order.products.length != 0">
      Please confirm the details of your rental and complete the checkout.
    </p>
  </div>
  <div class="w-full h-min md:flex dark:text-white">
    <div id="order-details" class="h-full mx-auto bg-whitep-8 w-4/5 md:w-[90%]">
      <div
        id="details"
        class="w-full"
        v-if="productState.order.products.length != 0"
      >
        <h1 class="text-3xl mx-3 my-6">Order Details</h1>
        <div
          class=""
          :class="{
            'grid gap-9 grid-cols-2 h-min md:grid-rows-1 grid-rows-2':
              isShipping,
          }"
        >
          <table
            class="md:table-auto table-fixed w-full"
            :class="{
              'md:col-span-1 col-span-2 md:col-start-2 row-start-1': isShipping,
            }"
          >
            <thead>
              <tr>
                <th
                  class="border-b border-slate-300 text-left font-bold text-xl"
                >
                  Package
                </th>
                <th
                  class="border-b border-slate-300 text-left font-bold text-xl"
                >
                  Price
                </th>
                <th
                  class="border-b border-slate-300 text-left font-bold text-xl"
                >
                  Sum Total
                </th>
                <th
                  class="border-b border-slate-300 text-left font-bold text-xl"
                >
                  Quantity
                </th>
                <th class="border-b border-slate-300 py-3"></th>
              </tr>
            </thead>
            <tbody calss="bg-slate-300">
              <tr
                v-for="(items, index) in productState.order.products"
                :key="items.product"
                class="p-3"
              >
                <td class="border-b border-slate-300 py-1">
                  {{ items.product }}
                </td>
                <td class="border-b border-slate-300 py-1">
                  {{ items.price / items.qty }}
                </td>
                <td class="border-b border-slate-300 py-1">
                  {{ items.price }}
                </td>
                <td class="border-b border-slate-300 py-1">{{ items.qty }}</td>
                <td class="border-b border-slate-300 py-1">
                  <button
                    @click="clear(index, items.price)"
                    class="shadow-md md:w-40 w-min p-3 dark:bg-main dark:bg-opacity-40 bottom-0 bg-sub text-white rounded-md text-lg hover:bg-main"
                    :class="{ 'w-min': isShipping }"
                  >
                    Clear product
                  </button>
                </td>
              </tr>
              <tr>
                <td class="border-b border-slate-300"></td>
                <td class="border-b border-slate-300"></td>
                <td
                  class="font-bold text-lg border-b border-slate-300 text-right p-1"
                >
                  Total
                </td>
                <td
                  class="font-bold text-lg border-b border-slate-300 text-right py-1"
                >
                  {{ getTotal }}
                </td>
                <td class="border-b border-slate-300 py-1"></td>
              </tr>
              <tr v-if="isShipping">
                <td class="border-b border-slate-300"></td>
                <td class="border-b border-slate-300"></td>
                <td
                  class="font-bold text-lg border-b border-slate-300 text-right p-1"
                >
                  Shipping
                </td>
                <td
                  class="font-bold text-lg border-b border-slate-300 text-right py-1"
                >
                  {{ filled }}
                </td>
                <td class="border-b border-slate-300 py-3"></td>
              </tr>
              <tr>
                <td class="border-b border-slate-300"></td>
                <td class="border-b border-slate-300"></td>
                <td
                  class="font-bold text-lg border-b border-slate-300 text-right p-1"
                >
                  Grand Total - Inclusive of VAT(7.5%)
                </td>
                <td
                  class="font-bold text-lg border-b border-slate-300 text-right py-1"
                  v-if="!isShipping"
                >
                  {{ getTotal + getTotal * 0.075 }}
                </td>
                <td
                  class="font-bold text-lg border-b border-slate-300 text-right py-1"
                  v-if="isShipping"
                >
                  {{ filled + getTotal + getTotal * 0.075 }}
                </td>
                <td class="border-b border-slate-300 py-1"></td>
              </tr>
            </tbody>
          </table>
          <div
            id="dispatch"
            class="justify-end"
            :class="{
              'md:col-span-1 col-span-2 col-start-1 md:row-start-1 row-start-2':
                isShipping,
            }"
            v-if="steps == 2"
          >
            <!-- <h1 class="text-4xl text-center">Delivery via Dispatch</h1> -->
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
            <p class="text-sm py-3">
              <span class="font-bold">Note: </span>Drop-off delivery is handled
              by a third-party courier service. As such the price for the
              service is yours to bear.
            </p>
            <div class="">
              <!-- <button @click="orderLoader" class="bg-gray-100 p-3 rounded-lg">
              <b>Get Shipment Quote</b>
            </button> -->
              <button
                class="bg-sub dark:bg-main dark:bg-opacity-40 text-white p-3 rounded-lg"
                @click="payInfo()"
              >
                <paystack
                  :disabled="!useData"
                  buttonText="Complete Shipment"
                  :publicKey="paystackKey"
                  :email="userState.bio.emailAddress"
                  :amount="shipping"
                  :reference="reference"
                  :onSuccess="onSuccessfulPayment"
                  :onCancel="onCancelledPayment"
                ></paystack>
              </button>
              <p>*Shipping fees included</p>
            </div>
            <!-- <p>Total cost of Shipping is: N{{ response }}</p> -->
          </div>
        </div>
        <div
          id="delivery-opt"
          class="bg-slate-50 mt-2 p-4"
          v-if="
            productState.order.products.length > 0 &&
            (!steps == 2 || steps == 1)
          "
        >
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
          <h1 class="text-xl">Delivery Options</h1>
          <div class="flex justify-start mt-3">
            <button
              @click="pay()"
              class="p-2 rounded-lg text-sm hover:text-white bg-white dark:bg-main dark:bg-opacity-40 mr-3 mt-1 shadow-md border hover:bg-teal-500 border-none border border-zinc-400"
            >
              <paystack
                :disabled="!orderID"
                buttonText="Pick Up"
                :publicKey="paystackKey"
                :email="userState.bio.emailAddress"
                :amount="amount"
                :reference="reference"
                :onSuccess="onSuccessfulPayment"
                :onCancel="onCancelledPayment"
              ></paystack>
            </button>
            <button
              @click="btnClick()"
              class="p-2 text-sm rounded-lg hover:text-white bg-white dark:bg-main dark:bg-opacity-40 mt-1 shadow-md border-none border hover:bg-teal-500 border-zinc-400"
            >
              Dispatch drop-off
            </button>
          </div>
        </div>
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
// import { sum } from "lodash";
import { useToast } from "vue-toastification";


export default {
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  data() {
    return {
      steps: 1,
      useData: false,
      // amount: 20000,
      address: "",
      response: "",
      orderID: false,
      filled: 1500,
      first: () => {
        sum(this.productState.order.products.price);
      },
      isShipping: false,
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
    paystackKey: function () {
      return import.meta.env.VITE_PAYSTACKKEY_PUBLIC;
    },

    reference: function () {
      var text = "";
      var possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

      for (var i = 0; i < 10; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      }
      return text;
    },
    shipping: function () {
      var total = this.getTotal + this.getTotal * 0.075;
      var amount = (this.filled + total) * 100;
      return amount;
    },
    amount: function () {
      var total = this.getTotal + this.getTotal * 0.075;
      var amount = total * 100;
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
      console.log(import.meta.env);
      console.log(this.getTotal);
    },

    clear(index, price) {
      this.$store.dispatch("productModule/removeItem", { index, price });
      console.log(this.productState.order.products, index);
      if (this.productState.order.products.length == 0) {
        this.$store.dispatch("productModule/cleartotal");
      }
    },

    onSuccessfulPayment: function () {
    let newDate = new Date().toDateString();
    // date: newDate.replace("2022", "22'"),
      for (let i = 0; i < this.productState.order.products.length; i++) {
        this.$store.dispatch("orderModule/fillOrder", {
          uid: this.userState.id,
          oid: uuidv4(),
          date: newDate.replace("2022", "22'"),
          packageName: this.productState.order.products[i].product,
          price: this.productState.order.products[i].price,
          qty: this.productState.order.products[i].qty,
          status: "PENDING",
        });
      }
      this.$store.dispatch("productModule/clearorder");
      this.$router.push("/dash");
      console.log(this.orderState);
    },

    onCancelledPayment: function () {
      this.toast.warning("You've cancelled your order", { timeout: 1500 });
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
      if (this.orderID) {
        this.isShipping = !this.isShipping;
        console.log(this.isShipping);
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
        this.toast.warning("Please confirm your order", { timeout: 1500 });
      }
    },

    goBack() {
      this.steps = 1;
    },

    pay() {
      if (this.orderID == false) {
        this.toast.warning("Please confirm your order", { timeout: 1500 });
      } else return;
    },

    payInfo() {
      if (this.useData == false) {
        this.toast.warning("Please confirm your address", { timeout: 1500 });
      } else return (this.shipping += 1500);
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
/* .card {
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
} */
</style>
