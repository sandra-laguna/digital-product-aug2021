<template>
  <div class="bg-yellow-500 py-10 lg:py-24">
    <h1 class="font-display font-bold text-3xl text-black text-center leading-none tracking-title lg:text-5xl">
      ¿estabas esperando una señal para lanzarte? <br />
      es esta 👇
    </h1>
    <div class="flex flex-col items-center text-center">
      <div class="py-8 px-4">
        <p class="font-bold text-xl lg:text-2xl tracking-title">
          tu mvp en <span class="text-pink-700 font-extrabold">un mes</span> por
          <span class="text-gray-400 line-through">16.990€</span>
          ahora por solo
        </p>
        <p class="pt-4 text-pink-700 font-black text-6xl tracking-title lg:text-7xl">11.990€</p>
        <p class="text-sm pl-40">hasta el 01/10/21</p>
      </div>
      <v-button color="pink" @click="openModal"> dámelo todo </v-button>
    </div>
  </div>
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
