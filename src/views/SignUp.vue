<template lang="">
  <div class="flex w-full justify-between">
    <div
      class="w-[30rem] hidden md:block h-min m-9 after:content-['Finna act up'] after:text-9xl after:text-red-200 block after:rounded-full after:w-[15rem] after:bg-green-500 after:bg-opacity-40 after:shadow-lg after:h-[15rem] after:bottom-36 after:right-[-6rem] after:absolute after:backdrop-blur text-center"
    >
      <div
        class="rounded-full shadow-lg relative bg-[url('https://images.unsplash.com/photo-1594025741471-7710d7249113?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cG9zJTIwdGVybWluYWx8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60')] h-[30rem] bg-center bg-cover"
      ></div>
    </div>
    <div class="md:w-1/2 w-full" v-if="signUp">
      <div class="md:pt-6 p-6">
        <h1 class="text-4xl text-green-700">Create a New Account</h1>
        <!-- <p class="text-2xl">Welcome to RO<span class="text-teal-800 font-title text-4xl text-[2rem]">k</span>U</p> -->
        <p>
          Create a new account with us today to start making transactions faster
          than ever before.
        </p>
      </div>
      <BioData v-if="stage == 1"></BioData>
      <BusinessDetails v-if="stage == 2"></BusinessDetails>
      <BusinessLocal v-if="stage == 3"></BusinessLocal>
      <AccountDetails v-if="stage == 4"></AccountDetails>
      <div class="flex justify-end w-full">
        <!-- <button
          v-if="stage < 4"
          @click="changeStage()"
          class="p-2 m-6 shadow-md w-52 bottom-0 mb-6 align-top bg-green-800 text-white rounded-full text-lg hover:ring ring-green-200/50 hover:bg-green-700"
        >
          Next
        </button> -->
      </div>
      <!-- <div class="flex justify-center w-full">
        <button
          v-if="stage == 4"
          @click="signIn()"
          class="p-2 m-6 w-full bottom-0 shadow-md align-top bg-green-800 text-white rounded text-lg hover:ring ring-green-200/50 hover:bg-green-700"
        >
          Sign Up
        </button>
      </div> -->
    </div>
    <div class="md:w-1/2 w-full p-9" v-if="!signUp">
      <h1 class="text-2xl">Log In</h1>
      <Form
        @submit="changeStage"
        class="w-full p-6"
        :validation-schema="schema"
      >
        <div class="my-4">
          <label for="email">Email Address</label>
          <Field
            v-model.trim="userState.bio.emailAddress"
            type="text"
            name="emailAddress"
            class="peer block w-4/5 form-input mx-auto appearance-none border-0 border-b border-green-700 bg-slate-50 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder="Email Address"
          />
          <ErrorMessage name="emailAddress" as="div" class="text-red-500" />
        </div>
        <div class="my-4">
          <label for="password">Password</label>
          <Field
            v-model.trim="userState.bio.password"
            type="text"
            name="password"
            class="peer block w-4/5 form-input mx-auto appearance-none border-0 border-b border-green-700 bg-slate-50 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder="Password"
          />
          <ErrorMessage name="password" as="div" class="text-red-500" />
        </div>
        <div class="flex flex-col items-center">
          <button
            type="submit"
            class="p-2 shadow-md w-52 bottom-0 align-top bg-green-800 text-white rounded-full text-lg hover:bg-green-700"
          >
            Log In</button
          >Dont't have an account?<button
            @click="toggle()"
            class="text-green-900"
          >
            Sign Up
          </button>
        </div>
      </Form>
    </div>
  </div>
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

  print() {
    this.$store.userState;
  },
  data() {
    const schema = yup.object({
      emailAddress: yup.string().required().email().label("Email"),
      password: yup.string().required().label("Password"),
    });
    return {
      signUp: false,
      schema,
    };
  },
  methods: {
    signIn: function () {
      this.$store.dispatch("userModule/login");
    },
    changeStage() {
      this.$store.dispatch("userModule/changeStage");
    },
    showStage: function () {
      console.log(this.stage);
    },
    toggle() {
      this.signUp = true;
    },
  },
  computed: mapGetters({
    userState: "getUserState",
    // accountDetails: userState.user.account
    stage: "getStage",
  }),
};
</script>
