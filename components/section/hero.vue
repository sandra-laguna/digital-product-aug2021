<template>
  <section
    class="
      relative
      w-full
      max-w-screen-xl
      mx-auto
      py-12
      px-4
      flex flex-col
      items-center
      space-y-12
      overflow-hidden
      sm:py-24
      md:flex-row
      lg:px-10
    "
  >
    <div class="text-center space-y-6 sm:space-y-8 md:text-left md:space-y-10 lg:space-y-12 xl:space-y-14">
      <h1 class="relative font-normal text-3xl tracking-tight text-gray-900 sm:text-6xl xl:text-7xl">
        crea tu <span class="font-black">producto digital</span> de la manera más
        <span class="font-black">rápida</span> y <span class="font-black">económica</span>
      </h1>

      <p class="font-medium text-black-500 sm:text-lg sm:max-w-2xl md:mt-5 md:text-xl md:max-w-4xl xl:text-3xl">
        si quieres emprender y tienes una idea en mente, <br class="hidden sm:inline" />
        no esperes a que se te adelanten, sabemos lo que necesitas,

        <br class="inline sm:hidden" />
        ¿te lo contamos?
      </p>

      <div class="md:mt-8">
        <v-button color="pink" @click="openModal"> empecemos ya </v-button>
      </div>
    </div>
    <div class="w-full mx-auto">
      <img class="h-auto lg:hidden" src="@/assets/images/mockups/hero-mobile.png" />
      <img class="hidden h-auto lg:block" src="@/assets/images/mockups/hero-desktop.png" />
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$store.dispatch("modals/open", {
        component: "modal-form",
        props: { name: "*tu nombre", email: "*tu mail" }
      });
    }
  }
};
</script>
