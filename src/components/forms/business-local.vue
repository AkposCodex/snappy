<template>
  <h1 class="text-2xl p-4 dark:text-white">Business Location</h1>
  <hr class="pb-6 w-3/5" />
  <Form
    @submit="changeStage"
    class="dark:text-white"
    :validation-schema="schema"
  >
    <label for="" class="m-3">Address</label>
    <textarea
      v-model="userState.businessLocal.address"
      rows="3"
      type="text"
      name="address"
      class="peer block w-4/5 form-input p-4 my-3 ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
      placeholder="Business Address"
    ></textarea>
    <ErrorMessage name="address" as="div" class="text-red-500" />
    <div class="md:flex  md:space-x-20">
      <div>
        <label for="" class="m-3">State</label>
        <Field
          v-model="userState.businessLocal.state"
          type="text"
          name="state"
          class="peer block md:w-min w-4/5 form-input my-3 ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder="State"
        />
        <ErrorMessage name="state" as="div" class="text-red-500" />
      </div>
      <div>
        <label for="" class="m-3">Country</label>
        <Field
          v-model="userState.businessLocal.country"
          type="text"
          name="country"
          class="peer block md:w-min w-4/5 form-input my-3 ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder="Country"
        />
        <ErrorMessage name="country" as="div" class="text-red-500" />
      </div>
    </div>
    <label for="" class="m-3">Local Government</label>
    <Field
      v-model="userState.businessLocal.localGovernment"
      type="text"
      name="localGovernment"
      class="peer block md:w-min w-4/5 form-input my-3 ml-3 appearance-none border-0 border-b border-green-700 bg-slate-100 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
      placeholder="Local Government"
    />
    <ErrorMessage name="localGovernment" as="div" class="text-red-500" />
    <div class="flex justify-end w-full">
      <button
        type="submit"
        class="p-2 m-6 shadow-md w-52 bottom-0 mb-6 align-top bg-green-800 text-white rounded-full text-lg hover:ring ring-green-200/50 hover:bg-green-700"
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
      localGovernment: yup.string().required().label("LGA"),
      country: yup.string().required().label("Country"),
      state: yup.string().required().label("State"),
      // address: yup.string().required().label("Address"),
    });
    return {
      schema,
    };
  },
  methods: {
    signIn: function () {
      this.$store.dispatch("userModule/login");
      console.log(this.userState.account);
    },
    changeStage() {
      this.$store.dispatch("userModule/changeStage");
    },
    next: function () {
      this.userState.stage += 1;
    },
  },
  computed: mapGetters({
    stage: "getStage",
    userState: "getUserState",
  }),
};
</script>
