<template>
  <div class="w-full m-0 pt-12 pb-8 px-6 flex flex-col items-center text-center bg-gray-300">
    <p class="text-black-900 text-xl lg:font-normal">
      si has llegado hasta aquí, danos una última oportunidad para convencerte
    </p>
    <v-button class="lg:w-44 lg:h-12" color="pink" @click="openModal"> venga </v-button>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$store.dispatch("modals/open", {
        component: "modal-form"
      });
    }
  }
};
</script>
