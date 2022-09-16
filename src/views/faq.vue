<template>
  <section class="" id="faq">
    <div class="text-center text-2xl p-16">
      <h1 class="font-bold text-3xl uppercase mb-6">
        FAQ: Frequently Asked Questions
      </h1>
      <p>
        Before reaching out to us please take a look at our <i>FAQ</i> to try
        and troubleshoot whatever issues you have.
      </p>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 p-4 gap-6 lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
    >
      <details class="mb-2 bg-gray-200 rounded-md h-min">
        <summary class="font-semibold bg-gray-100 rounded-md py-2 px-4">
          How Long can I rent the terminals for?
        </summary>

        <span> The rental period is dependent on which packages you buy. </span>
      </details>
      <details class="mb-2 bg-gray-200 rounded-md h-min">
        <summary class="font-semibold bg-gray-100 rounded-md py-2 px-4">
          Can I change the account details on my profile?
        </summary>

        <span class="px-4 py-2">
          Your bank account details can be changed once you've created an
          account as long as you provide proof of ownership of the account.
        </span>
      </details>
      <details class="mb-2 bg-gray-200 rounded-md h-min">
        <summary class="font-semibold bg-gray-100 rounded-md py-2 px-4">
          How many terminals I can rent at once?
        </summary>

        <span class="px-4 py-2"> As many as you need. </span>
      </details>
      <details class="mb-2 bg-gray-200 rounded-md h-min">
        <summary class="font-semibold bg-gray-100 rounded-md py-2 px-4">
          How can I communicate with you?
        </summary>

        <span class="px-4 py-2 w-[full]">
          Contact us using the contact form below or by calling our support
          hotlines: <span class="font-bold">+234 7043151949</span>
        </span>
      </details>
      <!-- <details class="mb-2">
        <summary class="font-semibold bg-gray-100 rounded-md py-2 px-4">
          Can I install/upload anything I want on there?
        </summary>

        <span>
          Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex
          aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud
          pariatur culpa magna in aute.
        </span>
      </details> -->
      <!-- <details class="mb-2">
        <summary class="font-semibold bg-gray-100 rounded-md py-2 px-4">
          How can I migrate to another site?
        </summary>

        <span>
          Laboris qui labore cillum culpa in sunt quis sint veniam. Dolore ex
          aute deserunt esse ipsum elit aliqua. Aute quis minim velit nostrud
          pariatur culpa magna in aute.
        </span>
      </details> -->
    </div>
  </section>
  <section
    id="contact"
    class="before:content-['Finna act up'] flex items-center after:content-['Finna act up'] after:text-9xl after:text-red-200 block after:rounded-full after:w-[15rem] after:bg-bluu after:bg-opacity-40 after:shadow-lg after:h-[15rem] after:bottom-[15rem] after:left-[1rem] after:absolute after:backdrop-blur p-6 md:p-14"
  >
    <div class="w-full justify-between relative">
      <div
        class="w-full md:w-4/5 mx-auto shadow-xl bg-white z-20 p-6 rounded-lg"
      >
        <h1
          class="text-lg font-bold text-black w-max p-2 my-3"
        >
          Contact Us
        </h1>
        <p class="w-full text-lg">
          Feel free to send us a message to inquire about anything related to
          Snappy Pay
        </p>
        <Form>
          <div class="my-4 dark:text-white">
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
              v-model.trim="name"
              type="text"
              name="name"
              class="peer block w-full form-input appearance-none border-0 border-b border-green-700 bg-slate-50 px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder="Full Name"
            />
            <ErrorMessage name="emailAddress" as="div" class="text-red-500" />
          </div>
          <div class="my-4 dark:text-white">
            <label for="email" class="">Phone number</label>
            <Field
              v-model.trim="phone"
              type="text"
              name="phone"
              class="peer block w-full form-input appearance-none border-0 border-b border-green-700 bg-slate-50 px-0 py-2.5 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
              placeholder="Phone Number"
            />
            <ErrorMessage name="emailAddress" as="div" class="text-red-500" />
          </div>
          <button class="bg-sub py-2 px-3 text-white shadow-sm rounded-md">
            SEND
          </button>
        </Form>
      </div>
    </div>
    <div
      class="md:w-3/5 bg-white p-6 mx-auto h-min my-9 z-20 flex flex-col items-center"
    >
      <div class="text-center">
        <h3 class="text-2xl">Opening Hours</h3>
        <p class="text-xl">Monday - Tuesday - Wednesday - Thursday - Friday</p>
        <p class="text-xl font-bold">8am - 5pm</p>
        <p class="text-xl">Weekends - Closed</p>
        <!-- <p class="text-xl">closed</p> -->
      </div>
      <div class="text-center z-20">
        <h3 class="text-2xl">Address</h3>
        <p class="text-xl">
          26B Ibeju Lekki Street, Dolphin Estate, Ikoyi Obalende,<br />
          Lagos Nigeria.
        </p>
      </div>
    </div>
  </section>
  <p class="font-bold w-full text-center text-xl">Contact us</p>
  <div
    class="font-bold flex items-center justify-center mb-4 w-full text-black rounded-full relative text-center p-2"
  >
    <span class="font-bold text-lg">Mobile|WhatsApp:</span>
    <p class="text-lg mr-4">+234 7043151949</p>
    <span class="font-bold text-lg">Email:</span>
    <p class="text-lg">frontdesk@snappy.com.ng</p>
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

  data() {
    return { name: "", emailAddress: "", phone: "" };
  },
};
</script>
