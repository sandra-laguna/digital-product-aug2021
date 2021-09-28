<template>
  <div
    class="
      flex-grow
      w-full
      max-w-3xl
      mx-auto
      px-6
      py-12
      text-center
      flex flex-col
      space-y-6
      justify-center
      items-center
      lg:px-8
      lg:py-24
    "
  >
    <h1 class="mt-2 text-5xl font-black text-black-900 tracking-title sm:text-7xl">
      <span class="text-pink-700">{{ this.$route.query.first_name }}, </span>
      oído cocina
    </h1>
    <figure>
      <img :src="require(`@/assets/images/bitmoji/${this.bitmoji}.png`)" />
    </figure>
    <p class="mt-2 font-bold text-base text-black-500 tracking-text leading-6 sm:text-3xl">
      en breve te llegará el mail de confirmación, acuérdate de revisar la bandeja de spam 🥳
    </p>
    <div>
      <p class="mt-2 flex-shrink text-xs text-black-500 tracking-text sm:text-base">
        aquí tienes nuestro linkedin, por si quieres ir bicheándonos mientras tanto
        <span class="">👉</span>
        <a
          href="https://www.linkedin.com/company/theseedsquad/"
          class="text-blue-500 hover:underline"
          rel="nofollow"
          target="_blank"
        >
          llévame
        </a>
      </p>
    </div>
  </div>
</template>


<script>
export default {
  head() {
    return {
      title: "¡Gracias! Pronto nos pondremos en contacto | The Seed Squad",
      link: [{ rel: "canonical", hid: "canonical", href: `${this.$config.baseUrl}/gracias` }]
    };
  },
  data() {
    return {
      bitmojis: ["alejandro_stars", "clara_stars", "paula_stars", "sandra_stars"],
      bitmoji: null
    };
  },
  methods: {
    getRandomImg(bitmojis) {
      return bitmojis[Math.floor(Math.random() * bitmojis.length)];
    }
  },
  created() {
    this.bitmoji = this.getRandomImg(this.bitmojis);
  }
};
</script>
