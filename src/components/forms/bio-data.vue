<template>
  <Form @submit="changeStage" class="w-full px-auto dark:text-white p-6" :validation-schema="schema">
    <h1 class="text-xl px-4">Bio-Data</h1>
    <hr class="pb-6 w-3/5" />
    <div class="justify-between w-4/5">
      <div class="">
        <label for="" class="m-3">First Name</label>
        <Field
          v-model.trim="userState.bio.firstName"
          type="text"
          name="firstName"
          class="peer block w-full form-input ml-3 appearance-none border-0 border-b border-green-700 bg-slate-50 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" First Name "
        />
        <ErrorMessage name="firstName" class="text-red-500" />
        <br />
      </div>
      <div class="">
        <label for="" class="m-3">Last Name</label>
        <Field
          v-model.trim="userState.bio.lastName"
          type="text"
          name="lastName"
          class="peer block w-full form-input ml-3 appearance-none border-0 border-b border-green-700 bg-slate-50 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder=" Last Name "
        />
        <ErrorMessage name="lastName" as="div" class="text-red-500" />
        <br />
      </div>
    </div>
    <div class="w-4/5">
      <label for="" class="m-3">Email Address</label>
      <Field
        v-model.trim="userState.bio.emailAddress"
        type="text"
        name="emailAddress"
        class="peer block w-full mx-0 form-input ml-3 appearance-none border-0 border-b border-green-700 bg-slate-50 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
        placeholder="Email Address"
        :rules="validEmail"
      />
      <ErrorMessage name="emailAddress" class="text-red-500" />
      <br />
    </div>
    <div class="justify-between w-4/5">
      <div>
        <label for="" class="m-3">Phone Number</label>
        <Field
          v-model.trim="userState.bio.phoneNumber"
          type="text"
          name="phoneNumber"
          :maxlength="11"
          class="peer block w-full form-input ml-3 appearance-none border-0 border-b border-green-700 bg-slate-50 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder="Phone Number"
        />
        <ErrorMessage name="phoneNumber" class="text-red-500" />
        <br />
      </div>
      <div>
        <label for="" class="m-3">BVN</label>
        <Field
          v-model="userState.bio.bvn"
          type="text"
          name="bvn"
          @change="validBVN()"
          :maxlength="11"
          class="peer block w-full form-input ml-3 appearance-none border-0 border-b border-green-700 bg-slate-50 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder="BVN"
        />
        <ErrorMessage name="bvn" as="div" class="text-red-500" />
        <br />
      </div>
    </div>
    <!-- <button @click="signIn()">Button here</button> -->
    <div class="flex justify-center w-full">
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
      emailAddress: yup.string().required().email().label("Email"),
      firstName: yup.string().required().label("First Name"),
      lastName: yup.string().required().label("Last Name"),
      bvn: yup.string().length(11).required().label("BVN"),
      phoneNumber: yup.string().length(11).required().label("Phone Number"),
    });
    return {
      schema,
      error: "",
    };
  },
  methods: {
    signIn: function () {
      this.$store.dispatch("userModule/login");
      console.log(this.userState.account);
    },
    validEmail: function (email) {
      var re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email);
    },
    changeStage() {
      this.$store.dispatch("userModule/changeStage");
    },
    validBVN() {
      if (this.userState.bio.bvn && this.userState.bio.bvn.length == 11) {
        return;
      } else {
        return (this.error = true);
      }
    },
  },
  computed: mapGetters({
    userState: "getUserState",
  }),
};
</script>
