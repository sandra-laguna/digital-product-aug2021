<template>
  <div class="fixed inset-0 z-40 pointer-events-none">
    <div class="fixed inset-0 flex justify-end" v-for="item in items" :key="item.id">
      <transition
        appear
        enter-active-class="transition-opacity duration-300 ease-linear"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition-opacity duration-300 ease-linear"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          class="fixed inset-0 bg-gray-600 bg-opacity-75 pointer-events-auto"
          v-show="item.active"
          @click="close(item)"
        />
      </transition>

      <transition
        appear
        enter-active-class="transition duration-500 ease-in-out transform"
        enter-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-300 ease-in-out transform"
        leave-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div class="relative w-full h-full flex flex-col justify-center items-center sm:p-12" v-show="item.active">
          <component :is="item.component" v-bind="item.props" @close="close(item)" v-if="item.component" />
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  computed: mapState("modals", ["items"]),
  methods: mapActions("modals", ["close"])
};
</script>
