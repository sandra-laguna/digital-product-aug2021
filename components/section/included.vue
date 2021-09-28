<template>
  <section class="w-full max-w-screen-xl mx-auto py-14 px-6 space-y-20 md:py-24">
    <figure class="md:flex md:flex-row md:justify-between">
      <div class="w-full max-w-xl md:mr-4">
        <img src="@/assets/images/mockups/website.png" alt="Example of websites" />
      </div>
      <div class="max-w-lg mt-10 space-y-5 py-2 md:flex md:flex-col md:justify-end">
        <p class="text-base text-black-500 leading-6 tracking-text">
          <span class="font-black text-black-900">tu sitio web,</span> que es la ventana de tu negocio al mundo.
        </p>
        <p class="text-base text-black-500 leading-6 tracking-text">
          <span class="font-black text-black-900">tu landing page,</span> donde aterriza tu público objetivo y
          terminamos de convencerle para convertirle en tu cliente.
        </p>
        <p class="text-base text-black-500 leading-6 tracking-text">
          <span class="font-black text-black-900">tu blog,</span> donde generas contenido de interés para posicionarte
          frente a tu competencia.
        </p>
      </div>
    </figure>
    <figure class="md:flex md:flex-row-reverse md:justify-between">
      <div class="w-full max-w-xl">
        <img src="@/assets/images/mockups/dashboard.png" alt="Examples of dashboards" />
      </div>

      <div class="max-w-lg mt-10 space-y-5 pb-2 md:mr-10 md:flex md:flex-col md:justify-end">
        <p class="text-base text-black-500 leading-6 tracking-text">
          <span class="font-black text-black-900">tu cuadro de mando,</span> donde podrás observar cómo crece tu
          negocio.
        </p>
        <p class="text-base text-black-500 leading-6 tracking-text">
          <span class="font-black text-black-900">tus herramientas de automatización,</span> para que no tengas que
          hacer las tareas aburridas.
        </p>
        <p class="text-base text-black-500 leading-6 tracking-text">
          <span class="font-black text-black-900">tus analíticas,</span> para que conozcas la calidad del contenido que
          creas y el tráfico que traes.
        </p>
      </div>
    </figure>
    <figure class="md:flex md:flex-row md:justify-between">
      <div class="w-full max-w-xl  md:mr-4">
        <img class="" src="@/assets/images/mockups/app.png" alt="" />
      </div>

      <div class="max-w-lg mt-10 space-y-5 pb-2 md:flex md:flex-col md:justify-end">
        <p class="text-base text-black-500 leading-6 tracking-text">
          <span class="font-black text-black-900">tu aplicación web,</span> donde haces realidad tu propuesta para
          solucionar esa necesidad que has identificado.
        </p>
        <p class="text-base text-black-500 leading-6 tracking-text">
          <span class="font-black text-black-900">tu gestor de contenidos,</span> para que almacenes toda la información
          necesaria e importante para desarrollar tu actividad.
        </p>
      </div>
    </figure>
    <figure class="md:flex md:flex-row-reverse md:justify-between">
      <div class="w-full max-w-xl">
        <img class="" src="@/assets/images/mockups/emailing.png" alt="" />
      </div>

      <div class="max-w-lg mt-10 space-y-5 pb-2 md:mr-10 md:flex md:flex-col md:justify-end">
        <p class="text-base text-black-500 leading-6 tracking-text">
          <span class="font-black text-black-900">tu centro de comunicaciones,</span> donde poder recoger toda la
          atención al cliente que recibas desde cualquier plataforma.
        </p>
        <p class="text-base text-black-500 leading-6 tracking-text">
          <span class="font-black text-black-900">tu plataforma de emailing,</span> para tener a tus clientes siempre
          informados de las novedades.
        </p>
      </div>
    </figure>
    <div class="w-full flex flex-col items-center justify-center">
      <p class="w-full py-3 text-base text-black-500 leading-6 tracking-text text-center md:py-0 md:mb-10">
        <span class="font-black text-black-900">incluido también,</span> dominio, servidor, hasta 200 cuentas de correo
        de empresa, certificados SSL, mantenimiento, copias de seguridad, y
        <span class="font-black text-black-900">mucho, mucho más...</span>
      </p>
      <v-button color="pink" @click="openModal"> dámelo todo </v-button>
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
