<template>
  <h1 class="text-2xl p-4 dark:text-white">Business Location</h1>
  <hr class="pb-6 w-3/5" />
  <Form
    @submit="changeStage(street, city, state)"
    class="dark:text-white"
    :validation-schema="schema"
  >
    <div class="w-full my-3">
      <label for="" class="m-3">Address(Street Address & House Number)</label>
      <Field
        v-model="street"
        rows="3"
        type="text"
        name="address"
        class="peer block w-4/5 form-input p-4 mt-3 ml-3 appearance-none border-0 border-b border-green-700 bg-gray-100 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
        placeholder="ex: 4 federal housing road adetokunbo ademola street"
      ></Field>
      <ErrorMessage name="address" as="div" class="ml-3 text-red-500" />
    </div>
    <div class="w-full my-3">
      <div>
        <label for="" class="m-3">City</label>
        <Field
          v-model="city"
          type="text"
          name="state"
          class="peer block w-4/5 form-input p-4 mt-3 ml-3 appearance-none border-0 border-b border-green-700 bg-gray-100 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder="ex: Victoria Island"
        />
        <ErrorMessage name="state" as="div" class="ml-3 text-red-500" />
      </div>
      <div>
        <label for="" class="m-3">State</label>
        <Field
          v-model="state"
          type="text"
          name="country"
          class="peer block w-4/5 form-input p-4 mt-3 ml-3 appearance-none border-0 border-b border-green-700 bg-gray-100 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
          placeholder="ex: Lagos"
        />
        <ErrorMessage name="country" as="div" class="ml-3 text-red-500" />
      </div>
    </div>
    <div class="w-full my-3">
      <label for="" class="m-3">Local Government</label>
      <Field
        v-model="lga"
        type="text"
        name="localGovernment"
        class="peer block w-4/5 form-input p-4 mt-3 ml-3 appearance-none border-0 border-b border-green-700 bg-gray-100 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
        placeholder="Local Government"
      />
      <ErrorMessage name="localGovernment" as="div" class="ml-3 text-red-500" />
    </div>
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
import authService from "../../services/snappyService/AuthService";
export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
  data() {
    const schema = yup.object({
      localGovernment: yup.string().required().label("LGA"),
      country: yup.string().required().label("state"),
      state: yup.string().required().label("City"),
      address: yup.string().required().label("Address"),
    });
    return {
      schema,
      street: "",
      city: "",
      state: "",
      country: "Nigeria",
      lga: "",
      address: "",
    };
  },
  methods: {
    signIn: function () {
      this.$store.dispatch("userModule/login");
      console.log(this.userState.account);
    },
    changeStage(street, city, state) {
      this.setAddress(street, city, state);
      this.$store.dispatch("userModule/changeStage");
    },
    next: function () {
      this.userState.stage += 1;
    },
    async setAddress(street, city, state) {
      this.address = street + ", " + city + ", " + state + ", " + this.country;
      const response = await this.$store.dispatch("loadPoints", {
        address: this.address,
      });
      this.$store.dispatch("userModule/updateAddress", this.address);
      this.$store.dispatch("userModule/updateLocation", {
        lat: response.lat,
        lon: response.lng,
      });
      console.log("Lat Lng response: " + response.lat + response.lng);
      console.log(this.address);
    },
  },
  computed: {
    ...mapGetters({
      stage: "getStage",
      userState: "getUserState",
    }),
  },
};
</script>
