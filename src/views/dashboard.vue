<template>
  <div class="md:grid md:grid-cols-4 auto-cols-min grid-flow-col w-full">
    <div
      class="md:w-full h-full md:block hidden bg-main dark:bg-opacity-40 p-2 text-white relative"
    >
      <div id="top" class="">
        <div
          class="w-[10rem] h-[10rem] md:h-[10rem] bg-[url('https://images.unsplash.com/photo-1512372923090-7b14fb496d44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80')] bg-center bg-cover rounded-xl md:w-[10rem] mx-auto my-4"
        >
          <!-- <img src="https://images.unsplash.com/photo-1512372923090-7b14fb496d44?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" class="h-16 mx-auto rounded-lg"/> -->
        </div>
        <ul>
          <li>
            <button
              class="rounded-md p-3 w-full"
              :class="{ 'bg-white bg-opacity-40': tile == 1 }"
              @click="tile = 1"
            >
              Orders
            </button>
          </li>
          <br />
          <li>
            <button
              class="rounded-md p-3 w-full"
              :class="{ 'bg-white bg-opacity-40': tile == 4 }"
              @click="tile = 4"
            >
              Profile
            </button>
          </li>
          <br />
          <li>
            <button
              class="rounded-md p-3 w-full"
              :class="{ 'bg-white bg-opacity-40': tile == 2 }"
              @click="tile = 2"
            >
              Inventory
            </button>
          </li>
          <br />
          <li>
            <button
              class="rounded-md p-3 w-full"
              :class="{ 'bg-white bg-opacity-40': tile == 3 }"
              @click="tile = 3"
            >
              Transaction History
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div id="hd-top" class="bg-main md:hidden w-full z-20 h-auto">
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
              Orders
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
              Profile
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
    <div class="col-span-3" v-if="tile == 1" id="order-history">
      <section class="head dark:text-white">
        <h1 class="text-5xl p-6">This is your Order History</h1>
        <div class="p-6" v-if="order.order.length == 0">
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
      <div
        id="bot"
        class="w-[20rem] p-2 mx-auto my-9"
        v-if="!order.order.length == 0"
      >
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
    <div class="col-span-3 py-3" v-if="tile == 3" id="transaction-history">
      <div class="md:hidden">
        <h1 class="text-center text-3xl">Transaction History</h1>
        <!-- <div
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
        </div> -->
        <div
          class="rounded-3xl shadow-sm justify-between px-3 py-6 bg-gray-100 m-3 flex"
        >
          <p>PURCHASE</p>
          <div class="">
            <P>Dano Milk 500g</P>
            <p class="text-gray-500">15 Units</p>
          </div>
          <p class="text-green-700">₦130000</p>
        </div>
        <div
          class="rounded-3xl shadow-sm justify-between px-3 py-6 bg-gray-100 m-3 flex"
        >
          <p>TRANSFER</p>
          <div class="">
            <P>SUCCESS</P>
            <p class="text-gray-500">1 units</p>
          </div>
          <p class="text-green-700">₦300</p>
        </div>
        <div
          class="rounded-3xl shadow-sm justify-between px-3 py-6 bg-gray-100 m-3 flex"
        >
          <p>TRANSFER</p>
          <div class="">
            <P>SUCCESS</P>
            <p class="text-gray-500">1 units</p>
          </div>
          <p class="text-green-700">₦300</p>
        </div>
        <div
          class="rounded-3xl shadow-sm justify-between px-3 py-6 bg-gray-100 m-3 flex"
        >
          <p>TRANSFER</p>
          <div class="">
            <P>SUCCESS</P>
            <p class="text-gray-500">1 units</p>
          </div>
          <p class="text-green-700">₦300</p>
        </div>
      </div>
      <div class="hidden md:block">
        <h1 class="text-left p-6 text-3xl">Transaction History</h1>
        <table class="table-auto w-full ml-3">
          <thead class="border-b md:text-xl text-gray-500 border-gray-300">
            <td>Description</td>
            <td>Quantity</td>
            <td>Date</td>
            <td>Transaction Type</td>
            <td>Amount</td>
          </thead>
          <tbody>
            <tr>
              <td class="m-0 p-3 border-b border-gray-300">
                <div class="flex space-x-3 items-center">
                  <img
                    src="@/assets/icons/pos-64.png"
                    alt=""
                    width="40"
                    height="40"
                    class="bg-gray-100 p-0.5 rounded-lg"
                  />
                  <p>Dano Milk</p>
                </div>
              </td>
              <td class="p-3 border-b border-gray-300">20</td>
              <td class="p-3 border-b border-gray-300">2022-09-30 12:00</td>
              <td class="p-3 border-b border-gray-300">PURCHASE</td>
              <td class="p-3 border-b border-gray-300 text-green-500">3500</td>
            </tr>
            <tr>
              <td class="m-0 p-3 border-b border-gray-300">
                <div class="flex space-x-3 items-center">
                  <img
                    src="@/assets/icons/pos-64.png"
                    alt=""
                    width="40"
                    height="40"
                    class="bg-gray-100 p-0.5 rounded-lg"
                  />
                  <p>Dano Milk</p>
                </div>
              </td>
              <td class="p-3 border-b border-gray-300">10</td>
              <td class="p-3 border-b border-gray-300">2022-09-30 12:00</td>
              <td class="p-3 border-b border-gray-300">PURCHASE</td>
              <td class="p-3 border-b border-gray-300 text-green-500">3500</td>
            </tr>
            <tr>
              <td class="m-0 p-3 border-b border-gray-300">
                <div class="flex space-x-3 items-center">
                  <img
                    src="@/assets/icons/send-64.png"
                    alt=""
                    width="40"
                    height="40"
                    class="bg-gray-100 p-0.5 rounded-lg"
                  />
                  <p>Akpos David</p>
                </div>
              </td>
              <td class="p-3 border-b border-gray-300">1</td>
              <td class="p-3 border-b border-gray-300">2022-09-30 12:00</td>
              <td class="p-3 border-b border-gray-300">TRANSFER</td>
              <td class="p-3 border-b border-gray-300 text-orange-500">3500</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="col-span-3" v-if="tile == 2" id="inventory">
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
      <table class="table-auto w-full ml-3">
        <thead class="border-b md:text-xl border-gray-300">
          <td class="border-b border-gray-300 md:p-4 text-gray-500">S/N</td>
          <td class="border-b border-gray-300 md:p-4 text-gray-500">
            Product Name
          </td>
          <td class="border-b border-gray-300 md:p-4 text-gray-500">Stock</td>
          <td class="border-b border-gray-300 md:p-4 text-gray-500">
            Cost Price(₦)
          </td>
          <td class="border-b border-gray-300 md:p-4 text-gray-500">
            Unit Price(₦)
          </td>
          <td class="border-b border-gray-300 md:p-4 text-gray-500">Actions</td>
        </thead>
        <tbody>
          <tr>
            <td class="border-b border-gray-200 md:p-3 mx-auto">1</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">
              Cream Cheese
            </td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">500</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">200</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">500</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">
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
            <td class="border-b border-gray-200 md:p-3 mx-auto">2</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">
              Cream Cheese
            </td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">500</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">200</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">500</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">
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
            <td class="border-b border-gray-200 md:p-3 mx-auto">3</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">
              Cream Cheese
            </td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">500</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">200</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">500</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">
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
            <td class="border-b border-gray-200 md:p-3 mx-auto">4</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">
              Cream Cheese
            </td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">500</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">200</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">500</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">
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
            <td class="border-b border-gray-200 md:p-3 mx-auto">5</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">
              Final Fantasy VII
            </td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">500</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">1300</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">1700</td>
            <td class="border-b border-gray-200 md:p-3 mx-auto">
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
    <div class="col-span-3 w-full p-3 mx-auto" id="profile" v-if="tile == 9">
      <div class="flex justify-between">
        <img
          src="@/assets/svg/undraw_personal_info_re_ur1n.svg"
          width="600"
          height="100"
          alt=""
        />
        <div class="p-6">
          <div class="border-2 p-4 rounded-md">
            <div
              class="bg-main border-2 p-3 rounded-md text-white border-main bg-opacity-60"
            >
              <p class="font-bold">Completed Orders</p>
              <p class="font-bold">13</p>
            </div>
            <p class="font-bold">Uncompleted Orders</p>
            <p>2</p>
            <p class="font-bold">Total</p>
            <p>15</p>
          </div>
        </div>
      </div>
      <div class="ml-9 grid grid-cols-2">
        <div class="">
          <h1 class="text-xl font-bold">Personal Info</h1>
          <label for="firstname">First name</label>
          <p id="firstname" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.bio.firstName }}
          </p>
          <label for="">Last name</label>
          <p id="lastname" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.bio.lastName }}
          </p>
          <label for="emailaddress">Email Address </label>
          <div class="flex">
            <!-- <p id="emailaddress" class="p-3 border-2 w-3/5 rounded-md">
              {{ user.bio.emailAddress }}
            </p> -->
            <input
              :disabled="!editable1"
              class="p-3 border-2 border-gray-200 w-3/5 rounded-md"
              type="text"
              name=""
              id=""
              v-model="user.bio.emailAddress"
            />
            <div class="w-[24px]">
              <button
                @click="
                  editable1 = !editable1;
                  editing();
                  isEditing = !isEditing;
                "
              >
                <img src="@/assets/icons/pencil-48.png" widht="20" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="">
          <h1 class="text-xl font-bold">Business Details</h1>
          <label for="businessname">Business Type </label>
          <p id="businessname" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.businessDetails.businessType }}
          </p>
          <label for="businessname">Business Name </label>
          <p id="businessname" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.businessDetails.businessName }}
          </p>
          <label for="phonenumber">Phone Number</label>
          <div class="flex">
            <!-- <p id="phonenumber" class="p-3 border-2 w-3/5 rounded-md">
              {{ user.bio.phoneNumber }}
            </p> -->
            <input
              :disabled="!editable2"
              class="p-3 border-2 border-gray-200 w-3/5 rounded-md"
              type="text"
              name=""
              id=""
              v-model="user.bio.phoneNumber"
            />
            <div class="w-[24px]">
              <button
                @click="
                  editable2 = !editable2;
                  editing();
                  isEditing = !isEditing;
                "
              >
                <img src="@/assets/icons/pencil-48.png" widht="20" alt="" />
              </button>
            </div>
          </div>
          <label for="address">Address</label>
          <div class="flex">
            <!-- <p id="address" class="p-3 border-2 w-3/5 rounded-md">
              {{ user.mainAddress }}
            </p> -->
            <textarea
              disabled="true"
              class="p-3 border-2 border-gray-200 w-3/5 rounded-md"
              type="text"
              name=""
              id=""
              v-model="user.mainAddress"
            ></textarea>
            <div class="w-[24px]">
              <button
                @click="
                  editable2 = !editable2;
                  isEditing = !isEditing;
                  editing();
                "
              >
                <img src="@/assets/icons/pencil-48.png" widht="20" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="">
          <div class="flex">
            <h1 class="text-xl font-bold">Bank Details</h1>
            <div class="w-[24px]">
              <button
                @click="
                  editable3 = !editable3;
                  editing();
                  isEditing = !isEditing;
                "
              >
                <img src="@/assets/icons/pencil-48.png" widht="20" alt="" />
              </button>
            </div>
          </div>
          <label for="address">Bank Code</label>
          <!-- <p id="address" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.account.bank }}
          </p> -->
          <br />
          <input
            :disabled="!editable3"
            class="p-3 border-2 border-gray-200 w-3/5 rounded-md"
            type="text"
            name=""
            id=""
            v-model="user.account.bank"
          />
          <br />
          <label for="address">Acount Name</label>
          <!-- <p id="address" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.account.accountName }}
          </p> --><br />
          <input
            :disabled="!editable3"
            class="p-3 border-2 border-gray-200 w-3/5 rounded-md"
            type="text"
            name=""
            id=""
            v-model="user.account.accountName"
          /><br />
          <label for="address">Acount Number</label>
          <!-- <p id="address" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.account.accountNumber }}
          </p> --><br />
          <input
            :disabled="!editable3"
            class="p-3 border-2 border-gray-200 w-3/5 rounded-md"
            type="text"
            name=""
            id=""
            v-model="user.account.accountNumber"
          />
        </div>
      </div>
    </div>
    <div class="col-span-3 w-full p-3 mx-auto" id="profile" v-if="tile == 4">
      <div class="tabs">
        <div class="w-full p-4 bg-gray-200 mb-4">
          <ul class="flex justify-between w-3/5 mx-auto">
            <li>
              <button
                @click="tab = 1"
                :class="{ 'bg-white bg-opacity-70': tab == 1 }"
                class="p-2 rounded-md"
              >
                Personal Info
              </button>
            </li>
            <li>
              <button
                @click="tab = 2"
                :class="{ 'bg-white bg-opacity-70': tab == 2 }"
                class="p-2 rounded-md"
              >
                Business Details
              </button>
            </li>
            <li>
              <button
                @click="tab = 3"
                :class="{ 'bg-white bg-opacity-70': tab == 3 }"
                class="p-2 rounded-md"
              >
                Bank Details
              </button>
            </li>
          </ul>
        </div>
        <div class="" v-if="tab == 1">
          <label for="firstname">First name</label>
          <p id="firstname" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.bio.firstName }}
          </p>
          <br />
          <label for="">Last name</label>
          <p id="lastname" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.bio.lastName }}
          </p>
          <br />
          <label for="emailaddress">Email Address </label>
          <div class="flex">
            <!-- <p id="emailaddress" class="p-3 border-2 w-3/5 rounded-md">
                {{ user.bio.emailAddress }}
              </p> -->
            <input
              :disabled="!editable1"
              class="p-3 border-2 border-gray-200 w-3/5 rounded-md"
              type="text"
              name=""
              id=""
              v-model="user.bio.emailAddress"
            />
            <div class="w-[24px]">
              <button
                @click="
                  editable1 = !editable1;
                  editing();
                  isEditing = !isEditing;
                "
              >
                <img src="@/assets/icons/pencil-48.png" widht="20" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="" v-if="tab == 2">
          <label for="businessname">Business Type </label>
          <p id="businessname" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.businessDetails.businessType }}
          </p>
          <br />
          <label for="businessname">Business Name </label>
          <p id="businessname" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.businessDetails.businessName }}
          </p>
          <br />
          <label for="phonenumber">Phone Number</label>
          <div class="flex">
            <!-- <p id="phonenumber" class="p-3 border-2 w-3/5 rounded-md">
                {{ user.bio.phoneNumber }}
              </p> -->
            <input
              :disabled="!editable2"
              class="p-3 border-2 border-gray-200 w-3/5 rounded-md"
              type="text"
              name=""
              id=""
              v-model="user.bio.phoneNumber"
            />
            <div class="w-[24px]">
              <button
                @click="
                  editable2 = !editable2;
                  editing();
                  isEditing = !isEditing;
                "
              >
                <img src="@/assets/icons/pencil-48.png" widht="20" alt="" />
              </button>
            </div>
          </div>
          <br />
          <label for="address">Address</label>
          <div class="flex">
            <!-- <p id="address" class="p-3 border-2 w-3/5 rounded-md">
                {{ user.mainAddress }}
              </p> -->
            <textarea
              disabled="true"
              class="p-3 border-2 border-gray-200 w-3/5 rounded-md"
              type="text"
              name=""
              id=""
              v-model="user.mainAddress"
            ></textarea>
            <div class="w-[24px]">
              <button
                @click="
                  editable2 = !editable2;
                  isEditing = !isEditing;
                  editing();
                "
              >
                <img src="@/assets/icons/pencil-48.png" widht="20" alt="" />
              </button>
            </div>
          </div>
        </div>
        <div class="" v-if="tab == 3">
          <label for="address">Bank Code</label>
          <!-- <p id="address" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.account.bank }}
          </p> -->
          <br />
          <input
            :disabled="!editable3"
            class="p-3 border-2 border-gray-200 w-3/5 rounded-md"
            type="text"
            name=""
            id=""
            v-model="user.account.bank"
          />
          <br /><br />
          <label for="address">Acount Name</label>
          <!-- <p id="address" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.account.accountName }}
          </p> --><br />
          <input
            :disabled="!editable3"
            class="p-3 border-2 border-gray-200 w-3/5 rounded-md"
            type="text"
            name=""
            id=""
            v-model="user.account.accountName"
          /><br />
          <br />
          <label for="address">Acount Number</label>
          <!-- <p id="address" class="p-3 border-2 w-3/5 rounded-md">
            {{ user.account.accountNumber }}
          </p> --><br />
          <input
            :disabled="!editable3"
            class="p-3 border-2 border-gray-200 w-3/5 rounded-md"
            type="text"
            name=""
            id=""
            v-model="user.account.accountNumber"
          />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { useToast } from "vue-toastification";
import { mapGetters } from "vuex";
export default {
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  data() {
    let newDate = new Date().toDateString();
    return {
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
    ...mapGetters({ order: "getOrderState", user: "getUserState" }),
  },
  methods: {
    show() {
      this.showModal = !this.showModal;
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
<style></style>
