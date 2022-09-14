<template>
  <div class="md:grid md:grid-cols-4 auto-cols-min grid-flow-col w-full">
    <div class="md:w-4/5 w-full bg-sub p-2 text-white relative">
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
    <div class="col-span-3">
      <section class="head">
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
            <span class="text-black font-bold">DONE</span> : Your rental is
            completed and the POS has been returned.
          </p>
          <button id="show-modal" @click="showModal = true">Show Modal</button>
          <!-- use the modal component -->
          <transition name="modal">
            <ModalComponent v-if="showModal" @close="showModal = false">
              <!--
        you can use custom content here to overwrite
        default content
      -->
              <template v-slot:header>
                <h3>custom header</h3>
              </template>
            </ModalComponent>
          </transition>
        </div>
      </section>
      <div id="bot" class="w-[20rem] p-2 mx-auto my-9">
        <img src="../assets/svg/undraw_delivery_truck_vt6p.svg" alt="" />
        <!-- <img src="@/assets/svg/undraw_in_sync_re_jlqd.svg" alt=""> -->
      </div>
      <section class="orders">
        <div class="grid gap-9 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 mx-3 my-9">
          <div
            v-for="orders in order.order"
            class="card w-full shadow-[0_3px_6px_1px_rgba(0,0,0,0.2)]"
          >
            <img
              src="@/assets/images/products/Payment-Tablet-Terminal.png"
              alt=""
              class="h-[150px] mx-auto w-[150px]"
            />
            <div class="">
              <p class="font-bold text-xl">{{ orders.packageName }}</p>
              <div class="flex">
                <img
                  src="@/assets/icons/calendar-24.png"
                  class="h-[24px] w-[24px]"
                  alt=""
                />
                <p>{{ date }}</p>
              </div>
              <!-- <p>{{ orders.price }}</p>
              <p>{{ orders.qty }}</p> -->
              <br />
              <p
                :class="{
                  'text-red-700': orders.status == 'PENDING',
                  'text-[#00690C]': orders.status == 'DELIVERED',
                  'text-[#008F6D]': orders.status == 'DUE',
                  'text-black': orders.status == 'DONE',
                }"
                class="text-xl"
              >
                {{ orders.status }}
              </p>
            </div>
          </div>
        </div>
      </section>
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
    padding: theme("spacing.6");
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
