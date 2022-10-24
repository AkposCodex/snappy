<template lang="">
  <combinedNav></combinedNav>
  <div class="flex w-full justify-between">
    <div
      class="w-[20rem] md:w-[30rem] hidden md:block h-min m-9 before:content-['Finna act up'] before:text-9xl before:text-red-200 block before:rounded-full before:w-[15rem] before:bg-sub before:bg-opacity-40 before:shadow-lg before:h-[15rem] before:bottom-5 before:right-[-6rem] before:absolute before:backdrop-blur text-center"
    >
      <div
        class="rounded-full shadow-lg relative bg-[url('https://3geepay.com.ng/wp-content/uploads/2020/07/3gpay-thumb-14.jpg')] h-[30rem] bg-center bg-cover"
      ></div>
    </div>
    <div class="md:w-1/2 w-full" v-if="signUp == 'true'">
      <div class="md:pt-6 p-6">
        <h1 class="text-4xl text-green-700 dark:text-white">
          Let's Get you Started
        </h1>
        <!-- <p class="text-2xl">Welcome to RO<span class="text-teal-800 font-title text-4xl text-[2rem]">k</span>U</p> -->
        <p class="dark:text-white">
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
    <transition name="modal">
      <ModalComponent
        v-if="showModal"
        @close="transition"
        Header=""
        Body="Login Successful"
        Footer=""
      >
        <template v-slot:body>
          <div class="flex flex-col justify-between items-center">
            <p class="text-2xl font-sans">Login Successful</p>
            <img src="@/assets/icons/checkmark-96.png" alt="" />
          </div>
        </template>
        <template v-slot:footer>
          <div></div>
        </template>
      </ModalComponent>
    </transition>
    <div class="md:w-1/2 w-full p-9" v-if="signUp == 'false'">
      <Form
        @submit="signIn()"
        class="w-full p-6 flex-col flex items-center"
        :validation-schema="schema"
      >
        <h1
          class="text-2xl dark:text-white underline decoration-bluu underline-offset-8"
        >
          Log In
        </h1>
        <div class="w-full">
          <div class="my-4 dark:text-white">
            <label for="email" class="">Email Address</label>
            <Field
              v-model.trim="userState.bio.emailAddress"
              type="text"
              name="emailAddress"
              class="peer block w-full form-input appearance-none border-0 border-b border-green-700 bg-gray-100 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder="Email Address"
            />
            <ErrorMessage name="emailAddress" as="div" class="text-red-500" />
          </div>
          <div class="my-4 dark:text-white">
            <label for="password" class="">Password</label>
            <Field
              v-model.trim="userState.bio.password"
              name="password"
              type="password"
              autocomplete="current password"
              class="peer block w-full form-input appearance-none border-0 border-b border-green-700 bg-gray-100 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder="Password"
            />
            <ErrorMessage name="password" as="div" class="text-red-500" />
          </div>
        </div>
        <div class="flex justify-center w-4/5">
          <button
            type="submit"
            class="p-2 shadow-md w-52 bottom-0 align-top bg-sub text-white rounded-full text-lg hover:bg-main"
          >
            Log In
          </button>
          <!-- <a
            href="/buy-now"
            class="p-2 text-center m-6 w-full bottom-0 shadow-md align-top bg-sub text-white rounded-full text-lg hover:ring ring-green-200/50 hover:bg-green-700"
            >Log In</a
          > -->
        </div>
      </Form>
      <div class="flex flex-col items-center dark:text-white">
        Dont't have an account?<button @click="toggle()" class="text-bluu">
          Sign Up
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
import encryptor from "../services/snappyService/encryptionService";
import * as yup from "yup";
import { useToast } from "vue-toastification";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },

  setup() {
    // Get toast interface
    const toast = useToast();
    return { toast };
  },

  props: ["signUp"],

  print() {
    this.$store.userState;
  },
  data() {
    const schema = yup.object({
      emailAddress: yup.string().required().email().label("Email"),
      password: yup.string().required().label("Password"),
    });
    return {
      // signUp: false,
      showModal: false,
      schema,
    };
  },
  methods: {
    signIn: function () {
      this.$store.dispatch("userModule/login").then(() => {
        // this.showModal = true;
        let pack = {
          pass: this.userState.bio.password,
          email: this.userState.bio.emailAddress,
        };
        let data = encryptor.aesEncrypt(JSON.stringify(pack));
        // let pass = encryptor.aesEncrypt(this.userState.bio.password);
        // let email = encryptor.aesEncrypt(this.userState.bio.emailAddress);
        console.log(data);
        console.log(encryptor.aesDecrypt(data));
        console.log(this.userState.isLoggedIn);
        this.toast.success("Login Successful", { timeout: 1500 });
        setTimeout(() => {
          this.$router.replace({ path: "/dash" });
        }, 2000);
      });
    },
    // transition() {
    //   this.$router.replace({ path: "/dash" });
    // },
    changeStage() {
      this.$store.dispatch("userModule/changeStage");
    },
    showStage: function () {
      console.log(this.stage);
    },
    toggle() {
      this.$router.push({ name: "signup", params: { signUp: "true" } });
    },
  },
  computed: {
    ...mapGetters({
      userState: "getUserState",
      // accountDetails: userState.user.account
      stage: "getStage",
    }),
    // signUp: this.$routes.params.signUp
  },
};
</script>
