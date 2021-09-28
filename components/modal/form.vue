<template>
  <div class="w-full max-w-lg">
    <form @submit.prevent="submit" class="h-full p-4 bg-white pointer-events-auto px-8 border-2 shadow-lg rounded-lg">
      <h1 class="text-2xl tracking-tight font-black text-gray-900 text-center pt-4 md:text-3xl">
        comencemos a crear juntos
      </h1>
      <p class="text-center pb-4">
        contactaremos contigo para que nos cuentes tu idea. <br />
        nada de spam, palabrita 👼
      </p>
      <div>
        <label for="first_name" class="block text-gray-700 text-sm font-bold mb-2"> *tu nombre</label>
        <input
          type="text"
          id="first_name"
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3m
            text-gray-700
            leading-tight
            focus:outline-none
            focus:shadow-outline
          "
          autocomplete="given-name"
          tabindex="1"
          v-model="first_name"
          required
        />
      </div>
      <div class="my-4">
        <label for="email" class="block text-gray-700 text-sm font-bold mb-2"> *tu email </label>
        <input
          type="email"
          id="email"
          class="
            shadow
            appearance-none
            border
            rounded
            w-full
            py-2
            px-3
            text-gray-700
            leading-tight
            focus:outline-none
            focus:shadow-outline
          "
          autocomplete="email"
          tabindex="2"
          v-model="email"
          required
        />
        <div class="my-4">
          <label class="flex items-center space-x-2">
            <input type="checkbox" required tabindex="3" />
            <span class="leading-none"
              >He leído y acepto
              <a href="/aviso-legal" target="_blank" class="text-blue-500 hover:underline">
                la política de protección de datos.
              </a>
            </span>
          </label>
        </div>
      </div>
      <div class="flex justify-center">
        <button
          type="submit"
          tabindex="4"
          class="
            rounded-full
            h-10
            my-2
            px-10
            font-body font-bold
            text-white text-xl
            tracking-button
            bg-pink-700
            border-2 border-black-900
            shadow-down
            hover:shadow-none
            hover:-translate-x-1
            hover:translate-y-0.5
          "
        >
          hablemos
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return { first_name: null, email: null };
  },
  methods: {
    submit() {
      const { first_name, email } = this;
      const payload = { first_name, email };
      this.$webhook("74498eb3-d674-4c8f-9f17-d246c7714661", payload);
      this.$router.push(`/gracias?first_name=${first_name}`);
      this.$emit("close");
    }
  }
};
</script>
