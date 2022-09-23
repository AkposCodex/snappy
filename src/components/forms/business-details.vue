<template>
  <Form
    @submit="changeStage"
    class="dark:text-white"
    :validation-schema="schema"
  >
    <h1 class="text-2xl p-4">Business Details</h1>
    <hr class="pb-6 w-3/5" />
    <label for="type" class="m-3">Business type</label>
    <select
      v-model="userState.businessDetails.businessType"
      name="businessType"
      class="block border-green-700 w-4/5 border-0 border-b dark:text-black bg-gray-100 focus:border-blue-600 focus:outline-none focus:ring-0 my-3 ml-3"
    >
      <option value="">Choose an option</option>
      <option value="SME">Small to Medium sized enterprise</option>
      <option value="CLU">Clubs & Recreational facilities</option>
      <option value="LAV">Large Businesses and Ventures</option>
    </select>
    <label for="business-name" class="m-3">Business name</label>
    <Field
      v-model="userState.businessDetails.businessName"
      type="text"
      name="businessName"
      class="peer block w-4/5 form-input my-3 ml-3 appearance-none border-0 border-b border-green-700 bg-gray-100 py-2 px-2 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
      placeholder="Business name"
    />
    <ErrorMessage name="businessName" as="div" class="text-red-500" />

    <div class="flex justify-end w-full pr-24">
      <button
        type="submit"
        class="p-2 m-6 shadow-md w-52 bottom-0 mb-6 align-top bg-main text-white rounded-full text-lg hover:ring ring-green-200/50 hover:bg-green-700"
      >
        Next
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
      businessName: yup.string().required().label("Business Name"),
    });
    return { schema };
  },
  methods: {
    signIn: function () {
      this.$store.dispatch("userModule/login");
      console.log(this.userState.account);
    },
    next: function () {
      this.userState.stage += 1;
    },
    async changeStage() {
      await this.$store
        .dispatch("loadBanks")
        .then(this.$store.dispatch("userModule/changeStage"));
    },
  },
  computed: mapGetters({
    stage: "getStage",
    userState: "getUserState",
  }),
};
</script>
