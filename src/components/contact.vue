<script setup lang="ts">
import { reactive, ref } from "vue";

const state = reactive({
  subject: "",
  body: "",
});

const mailSent = ref(false);
const loading = ref(false);

const submit = async () => {
  try {
    loading.value = true;
    const data = await fetch("https://server-b654.onrender.com/mails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        body: `subject: ${state.subject} | 
      body: ${state.body}`,
      }),
    });

    const resJSON = await data.json();
    mailSent.value = true;
    loading.value = false;
    console.log({ resJSON });
  } catch (error) {
    loading.value = false;
    console.log("Err", error);
  }
};
</script>

<template>
  <div>
    <h1
      class="text-center text-3xl lg:text-5xl tracking-wider text-gray-900 mb-12 lg:mb-24"
    >
      {{ mailSent ? "Mail sent" : "Contact me" }}
    </h1>

    <form
      v-if="!mailSent"
      @submit.prevent="submit"
      class="w-full max-w-lg mx-auto"
    >
      <div class="mb-6">
        <label
          for="subject"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Subject</label
        >
        <input
          type="text"
          id="subject"
          v-model="state.subject"
          class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Subject..."
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="message"
          class="block mb-2 text-sm font-medium text-gray-900"
          >Your message</label
        >
        <textarea
          id="message"
          rows="4"
          v-model="state.body"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Send a message..."
        ></textarea>
      </div>
      <button
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        :class="loading && 'bg-blue-400 cursor-not-allowed pointer-events-none'"
      >
        {{ loading ? "pending..." : "Send" }}
      </button>
    </form>
    <p v-else class="flex items-center justify-center">
      <img
        src="../assets/success-Icon.svg"
        alt="success icon"
        class="w-28 md:w-40"
      />
    </p>
  </div>
</template>
