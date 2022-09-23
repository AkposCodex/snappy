<template>
  <div class="md:grid md:grid-cols-4 auto-cols-min grid-flow-col w-full">
    <div
      class="md:w-full h-[100vh] md:block hidden bg-main dark:bg-opacity-40 p-2 text-white relative"
    >
      <div id="top" class="">
        <div
          class="w-[10rem] h-[10rem] md:h-[10rem] bg-[url('https://images.unsplash.com/photo-1512372923090-7b14fb496d44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')] bg-center bg-cover rounded-xl md:w-[10rem] mx-auto my-4"
        >
          <!-- <img src="https://images.unsplash.com/photo-1512372923090-7b14fb496d44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="h-16 mx-auto rounded-lg"/> -->
        </div>
        <ul>
          <li class="rounded-md bg-white bg-opacity-25 p-3">
            <a href="">Orders</a>
          </li>
          <br />
          <li class="rounded-md p-3"><a href="">Profile</a></li>
          <br />
          <li></li>
        </ul>
      </div>
    </div>
    <div class="col-span-3" v-if="pos" id="order-history">
      <section class="head dark:text-white">
        <h1 class="text-5xl p-6">This is your Order History</h1>
        <div class="grid gap-6 p-6 grid-cols-2">
          <p>
            <span class="text-red-700 font-bold">PENDING</span> : Your order has
            been placed and is pending approval and delivery
          </p>
          <p>
            <span class="text-[#00690C] font-bold">DELIVERED</span> : Your order
            has been delivered and you are using the POS
          </p>
          <p>
            <span class="text-[#008F6D] font-bold">DUE</span> : Your rental
            period has expired and pending return.
          </p>
          <p>
            <span class="text-black dark:text-gray-500 font-bold">DONE</span> :
            Your rental is completed and the POS has been returned.
          </p>
          <!-- <button id="show-modal" @click="showModal = true">Show Modal</button> -->
          <!-- use the modal component -->
          <transition name="modal">
            <ModalComponent
              v-if="showModal"
              @close="showModal = false"
              Header="A new Header"
              Body="Some Body"
              Footer="A new Footer"
            >
              <!-- <template v-slot:header>
                <h3>custom header</h3>
              </template> -->
            </ModalComponent>
          </transition>
        </div>
      </section>
      <div id="bot" class="w-[20rem] p-2 mx-auto my-9">
        <img src="../assets/svg/undraw_delivery_truck_vt6p.svg" alt="" />
        <!-- <img src="@/assets/svg/undraw_in_sync_re_jlqd.svg" alt=""> -->
      </div>
      <section class="orders">
        <div
          class="grid gap-3 sm:gap-9 lg:grid-cols-3 md:grid-cols-2 grid-cols-2 mx-3 my-9"
        >
          <div
            v-for="orders in order.order"
            class="dark:bg-opacity-40 bg-white p-6 shadow-md rounded-3xl dark:text-gray-50 w-full shadow-[0_3px_6px_1px_rgba(0,0,0,0.2)]"
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
    <div class="col-span-3 py-3" v-if="pos" id="order-history">
      <h1 class="text-center text-3xl">Transaction History</h1>
      <!-- <table class="table-fixed w-full">
        <thead class="text-center">
          <tr>
            <td class="bg-main text-white p-3 border-x">S/N</td>
            <td class="bg-main text-white p-3 border-x">Item</td>
            <td class="bg-main text-white p-3 border-x">Quantity</td>
            <td class="bg-main text-white p-3 border-x">rrn</td>
            <td class="bg-main text-white p-3 border-x">Amount</td>
            <td class="bg-main text-white p-3 border-x">Status</td>
            <td class="bg-main text-white p-3 border-x">Response Date</td>
          </tr>
        </thead>
        <tbody calss="bg-slate-300">
          <tr>
            <td class="bg-white text-black text-center p-3 border-x border-black">1</td>
            <td class="bg-white text-black text-center p-3 border-x border-black">Cadbury milk chocolate</td>
            <td class="bg-white text-black text-center p-3 border-x border-black">2</td>
            <td class="bg-white text-black text-center p-3 border-x border-black">3999uj3jjhhnn29</td>
            <td class="bg-white text-black text-center p-3 border-x border-black">₦30,000.00</td>
            <td class="bg-white text-black text-center p-3 border-x border-black">SUCCESS</td>
            <td class="bg-white text-black text-center p-3 border-x border-black">2022-09-23 11:15:31 am</td>
          </tr>
        </tbody>
      </table> -->
      <div
        class="w-auto flex col-span-3 px-6 py-3 justify-center space-x-9 items-center rounded-lg shadow-none bg-white dark:bg-opacity-40"
      >
        <img src="@/assets/icons/pos-64.png" alt="" width="32" height="32" />
        <table class="text-[13px] w-full table-auto">
          <thead class="text-md">
            <tr>
              <td>Dano Milk 500g</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="text-gray-400">15 Units</td>
            </tr>
          </tbody>
        </table>
        <p class="text-md text-main">₦130000</p>
      </div>
      <hr />
      <div
        class="w-auto flex px-6 py-3 justify-center space-x-9 items-center rounded-lg shadow-none bg-white dark:bg-opacity-40"
      >
        <img src="@/assets/icons/send-64.png" alt="" width="32" height="32" />
        <table class="text-[13px] w-full table-auto">
          <thead class="text-md">
            <tr>
              <td>Akpos David</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <p class="text-md text-main">₦300</p>
      </div>
      <hr />
      <div
        class="w-auto flex px-6 py-3 justify-center space-x-9 items-center rounded-lg shadow-none bg-white dark:bg-opacity-40"
      >
        <img src="@/assets/icons/send-64.png" alt="" width="32" height="32" />
        <table class="text-[13px] w-full table-auto">
          <thead class="text-md">
            <tr>
              <td>Akpos David</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <p class="text-md text-main">₦300</p>
      </div>
      <hr />
      <div
        class="w-auto flex px-6 py-3 justify-center space-x-9 items-center rounded-lg shadow-none bg-white dark:bg-opacity-40"
      >
        <img src="@/assets/icons/send-64.png" alt="" width="32" height="32" />
        <table class="text-[13px] w-full table-auto">
          <thead class="text-md">
            <tr>
              <td>Akpos David</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <p class="text-md text-main">₦300</p>
      </div>
      <hr />
      <div
        class="w-auto flex px-6 py-3 justify-center space-x-9 items-center rounded-lg shadow-none bg-white dark:bg-opacity-40"
      >
        <img src="@/assets/icons/send-64.png" alt="" width="32" height="32" />
        <table class="text-[13px] w-full table-auto">
          <thead class="text-md">
            <tr>
              <td>Akpos David</td>
            </tr>
          </thead>
          <tbody></tbody>
        </table>
        <p class="text-md text-main">₦300</p>
      </div>
    </div>
    <div id="inventory" class="col-span-3">
      <div id="header" class="flex justify-between p-3">
        <h1 class="text-left uppercase text-3xl">Inventory</h1>
        <button
          @click="show()"
          class="w-10 h-10 border-solid border-2 border-black text-black text-lg rounded-lg"
        >
          +
        </button>
      </div>
      <transition name="modal">
        <ModalComponent
          v-if="showModal"
          @close="transition"
          Header=""
          Body="Login Successful"
          Footer=""
        >
          <template v-slot:body>
            <form action="">
              <label for="name">Product Name</label><br />
              <input type="text" name="name" id="productName" /><br>
              <label for="quantity">Quantity</label><br />
              <input type="number" name="quantity" id="quantity" /><br>
              <label for="price">Price</label><br />
              <input type="number" name="price" id="price" /><br>
              <label for="CostPrice">Cost Price</label><br />
              <input type="number" name="CostPrice" id="costPrice" /><br>
            </form>
            <button @click="showModal = false">Add Product</button>
            <button @click="showModal = false">Cancel タスケテクダサイマヅ</button>
          </template>
          <template v-slot:footer>
            <div></div>
          </template>
        </ModalComponent>
      </transition>
      <table class="table-fixed w-full ml-3">
        <thead class="border-b md:text-xl border-gray-300">
          <td class="border-r border-gray-300 md:p-4 bg-main text-white">Product Name</td>
          <td class="border-x border-gray-300 md:p-4 bg-main text-white">Stock</td>
          <td class="border-x border-gray-300 md:p-4 bg-main text-white">Cost Price(₦)</td>
          <td class="border-x border-gray-300 md:p-4 bg-main text-white">Unit Price(₦)</td>
        </thead>
        <tbody>
          <tr>
            <td class="border-r border-gray-300 p-3">Cream Cheese</td>
            <td class="border-x border-gray-300 p-3">500</td>
            <td class="border-x border-gray-300 p-3">500</td>
            <td class="border-x border-gray-300 p-3">200</td>
          </tr>
          <tr>
            <td class="border-r border-gray-300 p-3">Cream Cheese</td>
            <td class="border-x border-gray-300 p-3">500</td>
            <td class="border-x border-gray-300 p-3">500</td>
            <td class="border-x border-gray-300 p-3">200</td>
          </tr>
          <tr>
            <td class="border-r border-gray-300 p-3">Cream Cheese</td>
            <td class="border-x border-gray-300 p-3">500</td>
            <td class="border-x border-gray-300 p-3">500</td>
            <td class="border-x border-gray-300 p-3">200</td>
          </tr>
          <tr>
            <td class="border-r border-gray-300 p-3">Cream Cheese</td>
            <td class="border-x border-gray-300 p-3">500</td>
            <td class="border-x border-gray-300 p-3">500</td>
            <td class="border-x border-gray-300 p-3">200</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    let newDate = new Date().toDateString();
    return {
      date: newDate.replace("2022", "22'"),
      showModal: false,
    };
  },
  computed: {
    ...mapGetters({ order: "getOrderState", user: "getUserState" }),
  },
  methods: {
    show() {
      this.showModal = !this.showModal;
    },
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
    border-radius: theme("borderRadius.3xl");
    padding: theme("spacing.3");
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

  .subscript {
    font-size: theme("fontSize.sm");
    color: theme("colors.yellow.900");
  }
}
</style>
