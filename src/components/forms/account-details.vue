<template>
  <Form class="h-min" @submit="signIn" :validation-schema="schema">
    <h1 class="text-2xl p-4">Settlement Account Details</h1>
    <hr class="pb-6 w-3/5" />
    <label for="" class="m-3">Bank</label>
    <Field
      v-model="userState.account.bank"
      type="text"
      name="bank"
      class="peer block w-4/5 form-input my-3 ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
      placeholder="Bank"
    />
    <ErrorMessage name="bank" as="div" class="text-red-500"/>
    <label for="" class="m-3">Account Name</label>
    <Field
      v-model="userState.account.accountName"
      type="text"
      name="accountName"
      class="peer block w-4/5 form-input my-3 ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
      placeholder="Account Name"
    />
    <ErrorMessage name="accountName" as="div" class="text-red-500"/>
    <label for="" class="m-3">Account Number</label>
    <Field
      v-model="userState.account.accountNumber"
      type="text"
      name="accountNumber"
      :maxlength="10"
      class="peer block w-4/5 form-input my-3 ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
      placeholder="Account Number"
    />
    <ErrorMessage name="accountNumber" as="div" class="text-red-500"/>
    <!-- <button @click="signIn()">Button here</button> -->
    <div class="flex justify-center w-full">
      <button
        type="submit"
        class="p-2 m-6 w-full bottom-0 shadow-md align-top bg-green-800 text-white rounded text-lg hover:ring ring-green-200/50 hover:bg-green-700"
      >
        Sign Up
      </button>
    </div>
  </Form>
</template>
<script>
import { mapGetters } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
import * as yup from "yup";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      bank: yup.string().required().label("Bank"),
      accountNumber: yup.string().required().label("Account Number"),
      accountName: yup.string().required().label("Account Name"),
    });
    return { schema };
  },
  methods: {
    signIn: function () {
      this.$store.dispatch("userModule/login").then(() => {
        });
        this.$router.push("/products");
      console.log(this.userState.isLoggedIn);
    },
    next: function () {
      this.userState.stage += 1;
    },
    changeStage() {
      this.$store.dispatch("userModule/changeStage");
    },
  },
  computed: mapGetters({
    userState: "getUserState",
    stage: "getStage",
  }),
};
</script>
