<style src="@vueform/multiselect/themes/default.css"></style>
<template>
  <Form
    class="h-min dark:text-white"
    @submit="signIn"
    :validation-schema="schema"
  >
    <h1 class="text-2xl p-4">Settlement Account Details</h1>
    <hr class="pb-6 w-3/5" />
    <div class="mt-3">
      <label for="" class="m-3">Bank</label>
      <Multiselect
        placeholder="Select your bank"
        v-model="userState.account.bank"
        label="name"
        class="block border-green-700 w-4/5 border-0 border-b dark:text-black bg-gray-100 focus:border-blue-600 focus:outline-none focus:ring-0 mt-3 ml-3"
        valueProp="id"
        :min-chars="1"
        :searchable="true"
        :options="banks[0].data"
      />
      <!-- [<p
          :value="option.id"
          v-for="option in banks[0].data"
          :key="option.id"
        >
          ("{{ option.name }}",{{option.id}}),
        </p>] -->
      <ErrorMessage name="bank" as="div" class="ml-3 text-red-500" />
    </div>
    <div class="mt-3">
      <label for="" class="m-3">Account Name</label>
      <Field
        v-model="userState.account.accountName"
        type="text"
        name="accountName"
        class="peer block w-4/5 form-input mt-3 ml-3 appearance-none border-0 border-b border-green-700 bg-gray-100 py-2 px-3 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
        placeholder="Account Name"
      />
      <ErrorMessage name="accountName" as="div" class="ml-3 text-red-500" />
    </div>
    <div class="mt-3">
      <label for="" class="m-3">Account Number</label>
      <Field
        v-model="userState.account.accountNumber"
        type="text"
        name="accountNumber"
        :maxlength="10"
        class="peer block w-4/5 form-input mt-3 ml-3 appearance-none border-0 border-b border-green-700 bg-gray-100 py-2 px-3 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
        placeholder="Account Number"
      />
      <ErrorMessage name="accountNumber" as="div" class="ml-3 text-red-500" />
    </div>
    <!-- <button @click="signIn()">Button here</button> -->
    <div class="flex justify-center w-full p-4">
      <button
        class="w-3/5 shadow-md p-2 align-top bg-main text-white rounded-full text-lg; hover:ring ring-green-200/50 hover:bg-green-700"
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
import { useToast } from "vue-toastification";
import { v4 as uuidv4 } from "uuid";
import Multiselect from "@vueform/multiselect";
import paystackService from "@/services/snappyService/paystackService";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
    Multiselect,
  },
  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },
  data() {
    const schema = yup.object({
      // bank: yup.required().label("Bank"),
      accountNumber: yup.string().required().label("Account Number"),
      bankOptions: "",
      accountName: yup.string().required().label("Account Name"),
    });
    return { schema };
  },
  methods: {
    signIn: function () {
      this.$store.dispatch("userModule/login").then(() => {
        this.$store.dispatch("userModule/updateID", uuidv4().toString());
        // this.$router.push({ name: pricing });
        this.toast.success("Login Successful", { timeout: 1500 });
        setTimeout(() => {
          this.$router.replace({ name: "pricing" });
        }, 2000);
      });
      console.log(this.userState.isLoggedIn, this.userState.id);
    },
    next: function () {
      this.userState.stage -= 1;
    },
    changeStage() {
      this.$store.dispatch("userModule/changeStage");
    },
  },
  computed: {
    ...mapGetters({
      userState: "getUserState",
      banks: "getBanks",
      stage: "getStage",
    }),
  },
};
</script>
