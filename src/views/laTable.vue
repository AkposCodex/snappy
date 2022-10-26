<script>
import { defineComponent, reactive } from "vue";
export default {
  setup() {
    const table = reactive({
      rows: [
        {
          id: 1,
          date: "Onigiri",
          type: "40",
          rrn: "1000",
          amount: "10000",
        },
        {
          id: 2,
          date: "Cadbury Chocolate",
          type: "40",
          rrn: "1000",
          amount: "10000",
        },
        {
          id: 3,
          date: "Capri-Sun",
          type: "40",
          rrn: "1000",
          amount: "10000",
        },
        {
          id: 4,
          date: "Coke",
          type: "40",
          rrn: "1000",
          amount: "10000",
        },
      ],
    });
    return { table };
  },
  data() {
    return { row: [], filter: null, type: null, isSearching: false };
  },
  methods: {
    search(tye, fill) {
      this.isSearching = true;
      this.row.length = 0;
      for (let i = 0; i < this.table.rows.length; i++) {
        if (
          this.table.rows.length >= 1 &&
          this.table.rows[i].date.match(tye) &&
          this.table.rows[i].type.match(fill)
        ) {
          if (this.row.includes(this.table.rows[i])) {
          } else {
            this.row.push(this.table.rows[i]);
          }
        }
      }
    },
  },
};
</script>
<template>
  <div
    class="flex border-solid justify-between items-center w-full sm:w-4/5 md:w-3/5 mx-auto rounded-md px-3 py-2 border-2 border-[#f2f2f2]"
  >
    <p>Filters</p>
    <div class="flex space-x-3">
      <input type="text" name="" id="" v-model="filter" class="rounded-lg" />
      <select name="" id="" class="rounded-lg" v-model="type">
        <option value="20">20</option>
        <option value="30">30</option>
        <option value="40">40</option>
        <option value="50">50</option>
      </select>
    </div>
    <button
      @click="search(filter, type)"
      class="rounded-xl bg-main text-white px-4 py-2"
    >
      Search
    </button>
  </div>
  <table v-if="!isSearching">
    <thead>
      <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">Date</td>
      <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">
        Transaction Type
      </td>
      <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">RRN</td>
      <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">Amount</td>
    </thead>
    <tbody>
      <tr v-for="(rows, index) in table.rows" :key="rows.id">
        <td>{{ rows.date }}</td>
        <td>{{ rows.type }}</td>
        <td>{{ rows.rrn }}</td>
        <td>{{ rows.amount }}</td>
      </tr>
    </tbody>
  </table>
  <table v-if="isSearching">
    <thead>
      <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">Date</td>
      <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">
        Transaction Type
      </td>
      <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">RRN</td>
      <td class="border-b border-[#C8C8C8] md:p-4 text-[#8A8888]">Amount</td>
    </thead>
    <tbody>
      <tr v-for="(row, index) in row" :key="row.type">
        <td>{{ row.date }}</td>
        <td>{{ row.type }}</td>
        <td>{{ row.rrn }}</td>
        <td>{{ row.amount }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style></style>
