<template>
  <div>
    <section-hero />
    <section-scheme />
    <section-price />
    <section-included />
    <section-why-us />
    <!-- <section-testimonials /> -->
    <!-- <section-last-opportunity /> -->
  </div>
</template>

<script>
export default {
  head() {
    return {
      title: "Tecnología, diseño y marketing | The Seed Squad",
      link: [{ rel: "canonical", hid: "canonical", href: `${this.$config.baseUrl}/` }]
    };
  }
};
</script>
