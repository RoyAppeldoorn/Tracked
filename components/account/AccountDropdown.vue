<template>
  <on-click-outside :do="handleClickOutside">
    <div class="relative" @keydown.esc="isOpen = false">
      <button
        class="relative z-20 block h-12 w-12 rounded-full overflow-hidden border-2 border-purple-400 focus:outline-none focus:border-purple-200 hover:border-purple-200"
        @click="isOpen = !isOpen"
      >
        <img
          class="h-full w-full object-cover"
          src="https://randomuser.me/api/portraits/lego/8.jpg"
        />
      </button>
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20"
      >
        <a
          href="#"
          class="block px-4 py-2 text-gray-600 font-medium text-sm hover:bg-purple-500 hover:text-white"
          >Account settings</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-gray-600 font-medium text-sm hover:bg-purple-500 hover:text-white"
          >Support</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-gray-600 font-medium text-sm hover:bg-purple-500 hover:text-white"
          >Sign out</a
        >
      </div>
    </div>
  </on-click-outside>
</template>

<script>
import OnClickOutside from './OnClickOutside.vue'

export default {
  components: {
    OnClickOutside
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    handleClickOutside() {
      if (this.isOpen) {
        this.isOpen = false
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
