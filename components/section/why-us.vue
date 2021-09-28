<template>
  <section class="bg-green-500">
    <div
      class="
        w-full
        max-w-screen-xl
        mx-auto
        py-20
        px-6
        text-center
        grid
        gap-10
        justify-items-center
        lg:grid-cols-3 lg:grid-rows-2
      "
    >
      <div class="flex flex-col text-left lg:m-0">
        <h1 class="font-black text-5xl text-black-700 py-2 mb-4">simple, claro y conciso</h1>
        <p class="text-base text-black-900 lg:text-xl">
          Por desgracia, el 90% de las startups no terminan el primer año de vida. Por eso te hace falta un equipo a tu
          disposición, que entiende las necesidades y limitaciones que tienen las startups.
        </p>
        <v-button class="hidden lg:block" color="pink" @click="openModal"> vamos, que nos necesitas </v-button>
      </div>

      <div class="p-8 flex flex-col justify-center rounded-lg shadow-md bg-white lg:m-0">
        <icons-price class="w-20 mx-auto" />
        <h1 class="font-extrabold text-2xl leading-normal text-black-700 py-2">precio cerrado</h1>
        <p class="text-base text-black-500">
          Sin sorpresas al final del camino, porque sabrás exactamente qué vas a recibir cuando se acabe el desarrollo.
        </p>
      </div>

      <div class="flex flex-col justify-center rounded-lg shadow-md p-8 bg-white">
        <icons-date class="w-20 mx-auto" />
        <h1 class="font-extrabold text-2xl leading-normal text-black-700 py-2">plazos fijados</h1>
        <p class="text-base text-black-500">
          Sabrás qué días te entregamos cada parte del proyecto porque nos gusta tener una entrega continua de los
          avances que vamos realizando.
        </p>
      </div>

      <div class="flex flex-col justify-center rounded-lg shadow-md p-8 bg-white lg:m-0">
        <icons-users class="w-20 mx-auto" />
        <h1 class="font-extrabold text-2xl leading-normal text-black-700 py-2">sin intermediarios</h1>
        <p class="text-base text-black-500">
          Basta de hablar con comerciales que no saben cómo va el desarrollo de tu producto. estarás en contacto directo
          con los picateclas para resolver tus dudas.
        </p>
      </div>
      <div class="flex flex-col justify-center rounded-lg shadow-md p-8 bg-white lg:m-0">
        <icons-communication class="w-20 mx-auto lg:mt-0" />
        <h1 class="font-extrabold text-2xl leading-normal text-black-700 py-2">comunicación total</h1>
        <p class="text-base text-black-500">
          Tenemos en consideración cada valoración que nos hagas sobre las entregas, a fin de cuentas, tú eres el dueño
          de la idea.
        </p>
      </div>

      <div class="flex flex-col justify-center rounded-lg shadow-md p-8 bg-white">
        <icons-stats class="w-20 mx-auto" />
        <h1 class="font-extrabold text-2xl leading-normal text-black-700 py-2">experimentados</h1>
        <p class="text-base text-black-500">
          No eres nuestro conejillo de indias, no vamos a probar contigo. somos una squad cohesionada, currante y
          asentada.
        </p>
      </div>

      <v-button class="block lg:hidden" color="pink" @click="openModal"> vamos, que nos necesitas </v-button>
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
