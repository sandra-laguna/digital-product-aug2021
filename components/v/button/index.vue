<template>
  <component
    :is="tag"
    class="
      rounded-full
      w-52
      h-10
      my-4
      font-body font-bold
      text-lg text-white
      tracking-button
      border-2 border-black-900
      shadow-down
      sm:w-80
      sm:h-14
      sm:text-2xl
      hover:shadow-none
      hover:-translate-x-1
      hover:translate-y-0.5
    "
    :class="{
      'bg-pink-700': color === 'pink',
      'bg-yellow-700': color === 'yellow',
      'bg-green-700': color === 'green'
    }"
    @click="$emit('click')"
  >
    <slot />
  </component>
</template>


<script>
export default {
  props: {
    tag: {
      type: String,
      default: "button"
    },
    color: {
      type: String,
      default: "pink"
    }
  }
};
</script>
