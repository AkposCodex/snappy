<template>
  <div class="">
    <div class="text-center">
      <h1>FAQ: Frequently Asked Questions</h1>
      <p>
        Before reaching out to us please take a look at our FAQ to try and
        troubleshoot whatever issues you have.
      </p>
    </div>
    
  </div>
  <div class="flex w-full justify-between p-14 items-center">
    <div class="w-1/2">
      <h1>Contact Us</h1>
      <p class="w-3/5">
        Feel free to send us a message to inquire about anything relagted to
        Snappy Pay
      </p>
      <Form>
        <div class="my-4 dark:text-white w-3/5">
          <label for="email" class="">Email Address</label>
          <Field
            v-model.trim="emailAddress"
            type="text"
            name="emailAddress"
            class="peer block w-full form-input appearance-none border-0 border-b border-green-700 bg-slate-50 px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder="Email Address"
          />
          <ErrorMessage name="emailAddress" as="div" class="text-red-500" />
        </div>
        <div class="my-4 dark:text-white">
          <label for="email" class="">Full Name</label>
          <Field
            v-model.trim="fullName"
            type="text"
            name="name"
            class="peer block w-4/5 form-input appearance-none border-0 border-b border-green-700 bg-slate-50 px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder="Full Name"
          />
          <ErrorMessage name="emailAddress" as="div" class="text-red-500" />
        </div>
        <div class="my-4 dark:text-white">
          <label for="email" class="">Phone number</label>
          <Field
            v-model.trim="phone"
            type="text"
            name="name"
            class="peer block w-4/5 form-input appearance-none border-0 border-b border-green-700 bg-slate-50 px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
            placeholder="Phone Number"
          />
          <ErrorMessage name="emailAddress" as="div" class="text-red-500" />
        </div>
        <button>SEND</button>
      </Form>
    </div>
    <div class="w-1/2">
      <div class="">
        <h3>Opening Hours</h3>
        <p>Monday - Friday</p>
        <p>8am - 5pm</p>
        <p>Weekend</p>
        <p>closed</p>
      </div>
      <div class="">
        <h3>Address</h3>
        <p>
          26B Ibeju Lekki Street,<br />
          Dolphin Estate,<br />
          Ikoyi Obalende,<br />
          Lagos Nigeria.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  components: {
    Form,
    Field,
    ErrorMessage,
  },
};
</script>
