<template>
  <div class="dark:text-white h-[100vh] overflow-scroll w-full bg-[#F2F2F2]">
    <div
      id="sidebar"
      class="md:w-64 md:fixed h-[100vh] z-50 lg:block hidden bg-white shadow-md border-[#C8C8C8] dark:bg-opacity-40 p-2 text-white relative"
    >
      <div id="top" class="">
        <div
          class="w-[10rem] mt-[2rem] bg-center bg-cover rounded-xl md:w-[10rem] mx-auto my-4"
        >
          <a href="/">
            <img
              src="@/assets/icons/snappypayv1.svg"
              class="h-16 mx-auto rounded-lg"
            />
          </a>
        </div>
        <ul>
          <li class="w-4/5 mx-auto">
            <button
              class="rounded-xl text-left px-1 py-4 w-full"
              :class="{ 'bg-black bg-opacity-10': tile == 1 }"
              @click="tile = 1"
            >
              <div class="flex space-x-2 items-center">
                <img
                  src="@/assets/icons/home.png"
                  alt=""
                  width="32"
                  height="32"
                />
                <p class="text-lg text-black">Home</p>
              </div>
            </button>
          </li>
          <br />
          <li class="w-4/5 mx-auto">
            <button
              class="rounded-xl text-left px-1 py-4 w-full"
              :class="{ 'bg-black bg-opacity-10': tile == 4 }"
              @click="tile = 4"
            >
              <div class="flex space-x-2 items-center">
                <img
                  src="@/assets/icons/purchase-order.png"
                  width="32"
                  height="32"
                  alt=""
                />
                <p class="text-lg text-black">Orders</p>
              </div>
            </button>
          </li>
          <br />
          <li class="w-4/5 mx-auto">
            <button
              class="rounded-xl text-left px-1 py-4 w-full"
              :class="{ 'bg-black bg-opacity-10': tile == 2 }"
              @click="tile = 2"
            >
              <div class="flex space-x-2 items-center">
                <img
                  src="@/assets/icons/delivered-box.png"
                  width="32"
                  height="32"
                  alt=""
                />
                <p class="text-lg text-black">Inventory</p>
              </div>
            </button>
          </li>
          <br />
          <li class="w-4/5 mx-auto">
            <button
              class="rounded-xl text-left px-1 py-4 w-full"
              :class="{ 'bg-black bg-opacity-10': tile == 3 }"
              @click="tile = 3"
            >
              <div class="flex space-x-2 items-center">
                <img
                  src="@/assets/icons/order-history.png"
                  width="32"
                  height="32"
                  alt=""
                />
                <p class="text-lg text-black">Transaction History</p>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div
      id="hd-top"
      class="bg-main lg:hidden fixed shadow-md w-full z-20 h-auto"
    >
      <div class="flex justify-end">
        <button class="p-2" @click="visible = !visible">
          <img src="@/assets/icons/menu-50.png" alt="" width="32" height="32" />
        </button>
      </div>
      <div v-if="visible">
        <ul>
          <li class="mx-3">
            <button
              class="rounded-md p-3 text-white w-full"
              :class="{ 'bg-white bg-opacity-40': tile == 1 }"
              @click="
                tile = 1;
                visible = false;
              "
            >
              Home
            </button>
          </li>
          <br />
          <li class="mx-3">
            <button
              class="rounded-md p-3 text-white w-full"
              :class="{ 'bg-white bg-opacity-40': tile == 4 }"
              @click="
                tile = 4;
                visible = false;
              "
            >
              Orders
            </button>
          </li>
          <br />
          <li class="mx-3">
            <button
              class="rounded-md p-3 text-white w-full"
              :class="{ 'bg-white bg-opacity-40': tile == 2 }"
              @click="
                tile = 2;
                visible = false;
              "
            >
              Inventory
            </button>
          </li>
          <br />
          <li class="mx-3">
            <button
              class="rounded-md p-3 text-white w-full"
              :class="{ 'bg-white bg-opacity-40': tile == 3 }"
              @click="
                tile = 3;
                visible = false;
              "
            >
              Transaction History
            </button>
          </li>
        </ul>
      </div>
    </div>
    <DashedNav></DashedNav>
    <div class="lg:ml-64 p-6" v-if="tile == 4" id="order-history">
      <section class="head bg-white rounded-xl dark:text-white">
        <h1 class="text-5xl p-6">This is your Order History</h1>
        <div class="p-6">
          <div class="flex w-full justify-center">
            <img
              src="../assets/svg/undraw_wishes_icyp.svg"
              alt=""
              width="300"
            />
          </div>
          <p class="text-center">
            You haven't bought anything yet. When you make a purchase or rent a
            terminal your orders will show up here
          </p>
        </div>
      </section>
      <div id="bot" class="w-[20rem] hidden p-2 mx-auto my-9">
        <img src="../assets/svg/undraw_delivery_truck_vt6p.svg" alt="" />
      </div>
      <section class="orders">
        <div
          class="grid gap-3 sm:gap-9 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mx-3 my-9"
        >
          <div
            v-for="orders in order.order"
            class="dark:bg-opacity-40 bg-white p-6 rounded-3xl dark:text-gray-50 w-full"
          >
            <img
              src="@/assets/images/products/Payment-Tablet-Terminal.png"
              alt=""
              class="sm:h-[150px] h-[90px] mx-auto w-[90px] md:w-[150px]"
            />
            <div class="">
              <p class="font-bold text-lg">{{ orders.packageName }}</p>
              <div class="flex items-center space-x-3">
                <img
                  src="@/assets/icons/calendar-24.png"
                  class="h-[18px] w-[18px]"
                  alt=""
                />
                <p>{{ orders.date }}</p>
              </div>
              <!-- <p>{{ orders.price }}</p>
              <p>{{ orders.qty }}</p> -->
              <br />
              <p
                :class="{
                  'dark:text-red-300 text-red-700': orders.status == 'PENDING',
                  'dark:text-[#64B6AC] text-[#00690C]':
                    orders.status == 'DELIVERED',
                  'text-[#008F6D]': orders.status == 'DUE',
                  'dark:text-gray-500 text-black': orders.status == 'DONE',
                }"
                class="text-md"
              >
                {{ orders.status }}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div
      class="lg:ml-64 p-6 w-full lg:w-4/5"
      v-if="tile == 3"
      id="transaction-history"
    >
      <div class="md:block md:p-9 p-3 rounded-xl mx-auto bg-white">
        <h1 class="text-left p-3 text-3xl">Transaction History</h1>
        <div
          class="border-solid justify-between items-center w-full mx-auto rounded-t-lg px-6 py-4 border-2 border-slate"
        >
          <p class="text-lg">Filters</p>
          <div class="flex form justify-between items-center w-full">
            <div class="flex flex-col w-max">
              <label for="">Transaction Type</label>
              <select name="" id="" v-model="filter" class="hidden">
                <option value="PURCHASE">PURCHASE</option>
                <option value="TRANSFER">TRANSFER</option>
              </select>
              <Multiselect
                placeholder="Trans. Type"
                v-model="filter"
                label="name"
                class="block border-green-700 w-full border-0 border-b dark:text-black bg-black focus:border-blue-600 focus:outline-none focus:ring-0"
                valueProp="id"
                :min-chars="1"
                :searchable="true"
                :options="['PURCHASE', 'TRANSFER']"
              />
            </div>
            <div class="flex flex-col">
              <label for="">Date</label>
              <input
                type="text"
                class="peer block w-full form-input appearance-none border-0 border-b border-green-700 bg-gray-100 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                name=""
                id=""
                v-model="type"
              />
            </div>
            <div class="flex flex-col">
              <label for="">RRN</label>
              <input
                type="text"
                class="peer block w-full form-input appearance-none border-0 border-b border-green-700 bg-gray-100 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                name=""
                id=""
                v-model="rrn"
              />
            </div>
            <a
              href="#transaction-history"
              class="border-solid w-min p-1 rounded-2xl border-2 border-[#E1E0E0]"
              v-on:click="search(type, filter, rrn)"
              >Search</a
            >
          </div>
        </div>
        <div class="overflow-x-scroll w-full z-10">
          <VueTableLite
            v-if="!isSearching"
            :is-loading="table.isLoading"
            :columns="table.columns"
            :rows="table.rows"
            :is-re-search="table.isReSearch"
            :total="table.totalRecordCount"
            :sortable="table.sortable"
            :messages="table.messages"
            @do-search="doSearch"
            @is-finished="table.isLoading = false"
          />
          <VueTableLite
            v-if="isSearching"
            :is-loading="table.isLoading"
            :columns="table.columns"
            :rows="row"
            :is-re-search="table.isReSearch"
            :total="table.totalRecordCount"
            :sortable="row.sortable"
            :messages="table.messages"
            @is-finished="table.isLoading = false"
          />
        </div>
      </div>
    </div>
    <div
      class="lg:ml-64 p-6 lg:w-min w-full xl:w-4/5 flex flex-col space-y-3"
      v-if="tile == 2"
      id="inventory"
    >
      <div
        class="p-9 rounded-xl mx-auto w-full xl:w-full lg:w-min lg:mx-0 bg-white"
        id="overview"
      >
        <h1 class="text-left uppercase text-3xl">Overview</h1>
        <!-- bg-gradient-to-bl shadow-lg col-span-2 to-[#F7A8C3] from-[#FFDFDF] -->
        <div
          class="flex flex-col md:flex-row md:space-x-6 md:space-y-0 space-y-6 items-center xl:justify-center mt-6"
        >
          <div
            class="bg-white drop-shadow-lg rounded-lg flex flex-col justify-between bg-white w-max border border-2 border-[#C8C8C8] p-6 h-46"
          >
            <img
              src="@/assets/icons/warning.png"
              alt=""
              width="52"
              height="52"
            />
            <p class="text-xl text-left font-bold text-black">Low on Stock</p>
            <ul class="text-[#008C7C]">
              <li>Bread Loaf 30/50</li>
              <li>Heinz Mayonaise 10/30</li>
            </ul>
          </div>
          <div
            class="bg-white drop-shadow-lg rounded-lg flex flex-col justify-between bg-white w-max border border-2 border-[#C8C8C8] p-6 h-46"
          >
            <img
              src="@/assets/icons/good-quality.png"
              alt=""
              width="64"
              height="64"
            />
            <p class="text-xl text-left font-bold text-black">Fully Stocked</p>
            <ul class="text-[#008C7C]">
              <li>Bread Loaf 30/50</li>
              <li>Heinz Mayonaise 10/30</li>
            </ul>
          </div>
          <div
            class="bg-white drop-shadow-lg rounded-lg flex flex-col justify-between bg-white w-max border border-2 border-[#C8C8C8] p-6 h-46"
          >
            <img src="@/assets/icons/sold.png" alt="" width="52" height="52" />
            <p class="text-xl text-left font-bold text-black">Recent Sale</p>
            <ul class="text-[#008C7C]">
              <li>Bread Loaf 30/50</li>
              <li>Heinz Mayonaise 10/30</li>
            </ul>
          </div>
        </div>
      </div>
      <div class="lg:w-full md:p-9 p-3 rounded-xl bg-white">
        <div id="header" class="flex justify-between p-3">
          <h1 class="text-left uppercase text-3xl">Inventory</h1>
          <button
            @click="show()"
            class="w-10 h-10 border-solid border-2 border-black dark:border-white dark:text-white text-black text-lg rounded-lg"
          >
            +
          </button>
        </div>
        <table class="table-auto w-full">
          <thead class="border-b text-sm md:text-xl border-[#C8C8C8]">
            <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">
              Product Name
            </td>
            <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">
              Stock
            </td>
            <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">
              Cost Price(₦)
            </td>
            <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">
              Unit Price(₦)
            </td>
            <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">
              Actions
            </td>
          </thead>
          <tbody>
            <tr>
              <td
                class="border-b border-[#C8C8C8] text-sm md:text-base md:p-3 mx-auto"
              >
                Cream Cheese
              </td>
              <td
                class="border-b border-[#C8C8C8] text-sm md:text-base md:p-3 mx-auto"
              >
                500
              </td>
              <td
                class="border-b border-[#C8C8C8] text-sm md:text-base md:p-3 mx-auto"
              >
                200
              </td>
              <td
                class="border-b border-[#C8C8C8] text-sm md:text-base md:p-3 mx-auto"
              >
                500
              </td>
              <td
                class="border-b border-[#C8C8C8] text-sm md:text-base md:p-3 mx-auto"
              >
                <button @click="clear(index, items.price)" class="w-full">
                  <img
                    src="@/assets/icons/trash.svg"
                    class="mx-auto"
                    alt=""
                    width="15"
                    height="15"
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                Cream Cheese
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                500
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                200
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                500
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                <button @click="clear(index, items.price)" class="w-full">
                  <img
                    src="@/assets/icons/trash.svg"
                    class="mx-auto"
                    alt=""
                    width="15"
                    height="15"
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                Cream Cheese
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                500
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                200
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                500
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                <button @click="clear(index, items.price)" class="w-full">
                  <img
                    src="@/assets/icons/trash.svg"
                    class="mx-auto"
                    alt=""
                    width="15"
                    height="15"
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                Cream Cheese
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                500
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                200
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                500
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                <button @click="clear(index, items.price)" class="w-full">
                  <img
                    src="@/assets/icons/trash.svg"
                    class="mx-auto"
                    alt=""
                    width="15"
                    height="15"
                  />
                </button>
              </td>
            </tr>
            <tr>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                Final Fantasy VII
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                500
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                1300
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                1700
              </td>
              <td
                class="border-b border-[#C8C8C8] md:p-3 text-sm md:text-base mx-auto"
              >
                <button @click="clear(index, items.price)" class="w-full">
                  <img
                    src="@/assets/icons/trash.svg"
                    class="mx-auto"
                    alt=""
                    width="15"
                    height="15"
                  />
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <transition name="modal">
        <ModalComponent
          v-if="showModal"
          @close="transition"
          Header=""
          Body="Login Successful"
          Footer=""
        >
          <template v-slot:header>
            <h1 class="text-4xl font-sans">Update Inventory</h1>
          </template>
          <template v-slot:body>
            <form action="" class="font-sans">
              <label for="name">Product Name</label>
              <input
                type="text"
                class="rounded-lg mb-4 w-4/5 block border-gray-300 focus:ring-2 focus:ring-gray-500 focus:outline-none focus:ring-opacity-50"
                name="name"
                id="productName"
              />
              <label for="quantity">Quantity</label>
              <input
                type="number"
                class="rounded-lg mb-4 w-2/5 block border-gray-300 focus:ring-2 focus:ring-gray-500 focus:outline-none focus:ring-opacity-50"
                name="quantity"
                id="quantity"
              />
              <div class="flex space-x-3 w-max rounded-lg">
                <div class="">
                  <label for="CostPrice">Cost Price</label>
                  <input
                    type="text"
                    class="rounded-lg w-full block border-gray-300 focus:ring-2 focus:ring-gray-500 focus:outline-none focus:ring-opacity-50"
                    name="CostPrice"
                    id="costPrice"
                  />
                </div>
                <div class="">
                  <label for="price">Price</label>
                  <input
                    type="text"
                    class="rounded-lg mb-4 w-full block border-gray-300 focus:ring-2 focus:ring-gray-500 focus:outline-none focus:ring-opacity-50"
                    name="price"
                    id="price"
                  />
                </div>
              </div>
            </form>
          </template>
          <template v-slot:footer>
            <div class="flex w-full justify-between">
              <button
                @click="showModal = false"
                class="p-3 bg-main text-white rounded-lg"
              >
                Add Product
              </button>
              <button
                @click="showModal = false"
                class="p-3 border-gray-400 border-2 text-black rounded-lg"
              >
                Cancel
              </button>
            </div>
          </template>
        </ModalComponent>
      </transition>
    </div>
    <div class="lg:ml-64 p-6 mx-auto" id="profile" v-if="tile == 1">
      <div class="grid gap-6 md:grid-cols-3 md:grid-rows-2 mx-auto w-full">
        <div
          class="bg-gradient-to-bl shadow-lg col-span-2 to-main from-[#88E7DB] rounded-lg flex flex-col justify-between bg-white w-full py-2 px-4 h-46"
        >
          <img src="@/assets/icons/time.png" alt="" width="52" height="52" />
          <p class="text-8xl text-center text-white">500</p>
          <p class="text-xl text-right font-bold text-white">
            Transactions Today
          </p>
        </div>
        <div
          class="rounded-lg flex flex-col w-full justify-between bg-white px-4 py-6 h-46"
        >
          <img src="@/assets/icons/money.png" alt="" width="52" height="52" />
          <p class="md:text-5xl text-4xl text-center text-[#C7F5C7]">500,000</p>
          <p class="text-xl text-right font-bold text-black">Total Volume</p>
        </div>
        <div
          class="rounded-lg flex flex-col w-full justify-between bg-white px-4 py-6 h-46"
        >
          <img src="@/assets/icons/pos.png" alt="" width="52" height="52" />
          <p class="text-5xl text-center text-[#216C63]">4</p>
          <p class="text-xl text-right font-bold text-black">Terminals</p>
        </div>
        <div
          class="rounded-lg flex flex-col col-span-2 w-full justify-between bg-white px-4 py-6 h-46"
        >
          <div class="flex items-center justify-between text-2xl text-main">
            <img
              src="@/assets/icons/failed.png"
              alt=""
              width="52"
              height="52"
            />
            <p>96% Success rate</p>
          </div>
          <p class="text-7xl text-center text-red">4</p>
          <p class="text-xl text-right font-bold text-black">
            Failed Transactions
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
import { mapGetters } from "vuex";
import Multiselect from "@vueform/multiselect";
import { Field } from "vee-validate";
import VueTableLite from "vue3-table-lite";
import { defineComponent, reactive } from "vue";

const sampleData1 = (offst, limit) => {
  let newDate = new Date().toDateString();
  offst = offst + 1;
  let data = [];
  for (let i = offst; i <= limit; i++) {
    i % 2 == 0
      ? data.push({
          description: "TEST" + i,
          quantity: i * 5,
          rrn: "1023561" + Math.random(),
          date: newDate.replace("2022", "22'"),
          type: "PURCHASE",
          amount: 300 + i * 2,
        })
      : data.push({
          description: "TEST" + i,
          quantity: i * 5,
          rrn: "7104137" + Math.random(),
          date: newDate.replace("2022", "22'"),
          type: "TRANSFER",
          amount: 300 + i * 2,
        });
  }
  return data;
};
// Fake Data for 'desc' sortable
const sampleData2 = (offst, limit) => {
  let newDate = new Date().toDateString();
  let data = [];
  for (let i = limit; i > offst; i--) {
    i % 2 == 0
      ? data.push({
          description: "TEST" + i,
          quantity: i * 5,
          rrn: "1023561" + Math.random().toString(),
          date: newDate.replace("2022", "22'"),
          type: "PURCHASE",
          amount: 300 + i * 2,
        })
      : data.push({
          description: "TEST" + i,
          quantity: i * 5,
          rrn: "7104137" + Math.random(),
          date: newDate.replace("2022", "22'"),
          type: "TRANSFER",
          amount: 300 + i * 2,
        });
  }
  return data;
};
export default {
  components: {
    VueTableLite,
    Field,
    Multiselect,
  },
  setup() {
    // Get toast interface
    const toast = useToast();
    const table = reactive({
      isLoading: false,
      isReSearch: false,
      columns: [
        {
          label: "Description",
          field: "description",
          width: "3%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Quantity",
          field: "quantity",
          width: "3%",
          sortable: true,
          display: function (row) {
            return (
              '<a href="javascript:void(0)" data-id="' +
              row.id +
              '" class="is-rows-el name-btn">' +
              row.quantity +
              "</a>"
            );
          },
        },
        {
          label: "Date",
          field: "date",
          width: "10%",
          sortable: true,
        },
        {
          label: "RRN",
          field: "rrn",
          width: "10%",
          sortable: true,
          isKey: true,
        },
        {
          label: "Transaction Type",
          field: "type",
          width: "3%",
          sortable: true,
        },
        {
          label: "Amount",
          field: "amount",
          width: "3%",
          sortable: true,
        },
      ],
      rows: [],
      totalRecordCount: 0,
      sortable: {
        order: "id",
        sort: "asc",
      },
      messages: {
        pagingInfo: "Showing {0}-{1} of {2}",
        pageSizeChangeLabel: "Row count:",
        gotoPageLabel: "Go to page:",
        noDataAvailable: "No data",
      },
    });
    const doSearch = (offset, limit, order, sort) => {
      table.isLoading = true;
      setTimeout(() => {
        table.isReSearch = offset == undefined ? true : false;
        if (offset >= 10 || limit >= 20) {
          limit = 20;
        }
        if (sort == "asc") {
          table.rows = sampleData1(offset, limit);
        } else {
          table.rows = sampleData2(offset, limit);
        }
        table.totalRecordCount = 20;
        table.sortable.order = order;
        table.sortable.sort = sort;
      }, 600);
    };
    const tableLoadingFinish = (elements) => {
      table.isLoading = false;
      Array.prototype.forEach.call(elements, function (element) {
        if (element.classList.contains("name-btn")) {
          element.addEventListener("click", function () {
            console.log(this.dataset.id + " name-btn click!!");
          });
        }
        if (element.classList.contains("quick-btn")) {
          element.addEventListener("click", function () {
            console.log(this.dataset.id + " quick-btn click!!");
          });
        }
      });
    };
    const updateCheckedRows = (rowsKey) => {
      console.log(rowsKey);
    };
    // First get data
    doSearch(0, 10, "id", "asc");
    return {
      table,
      doSearch,
      tableLoadingFinish,
      updateCheckedRows,
      toast,
    };
  },
  data() {
    let newDate = new Date().toDateString();
    return {
      row: [],
      filter: null,
      type: null,
      rrn: null,
      isSearching: false,
      date: newDate.replace("2022", "22'"),
      showModal: false,
      isEditing: false,
      tile: 1,
      visible: false,
      editable1: false,
      editable2: false,
      editable3: false,
      tab: 1,
    };
  },
  computed: {
    ...mapGetters({
      user: "getUserState",
      order: "getOrderState",
    }),
  },
  methods: {
    show() {
      this.showModal = !this.showModal;
    },
    search(tye, fill, rrn) {
      this.isSearching = true;
      this.row.length = 0;
      console.log("type:" + tye, "date" + fill);
      console.log(this.table);
      for (let i = 0; i < this.table.rows.length; i++) {
        if (this.table.rows.length >= 1 && this.search) {
          if (
            this.table.rows[i].rrn.match(rrn) ||
            this.table.rows[i].type.match(fill) ||
            (this.table.rows[i].date.match(tye) &&
              this.table.rows[i].type.match(fill))
          ) {
            if (this.row.includes(this.table.rows[i])) {
            } else {
              console.log(this.row);
              this.row.push(this.table.rows[i]);
            }
          }
        }
      }
      this.table.totalRecordCount = this.row.length;
    },
    editing() {
      if (!this.isEditing) {
        this.toast.warning("You are now editing your profile", {
          timeout: 1500,
        });
        // this.editing = !this.editing;
      } else {
        this.toast.success("You are no longer editing your profile", {
          timeout: 1500,
        });
      }
    },
  },
};
</script>
<style scoped>
::v-deep(.vtl-table .vtl-thead .vtl-thead-th) {
  color: #fff;
  background-color: #64b6ac;
  border-color: #6ecfc3;
}
::v-deep(.vtl-table td),
::v-deep(.vtl-table tr) {
  border: none;
}
::v-deep(.vtl-paging-info) {
  color: #ffae03;
}
::v-deep(.vtl-paging-count-label),
::v-deep(.vtl-paging-page-label) {
  color: #ffae03;
}
::v-deep(.vtl-paging-pagination-page-link) {
  border: none;
}
</style>
