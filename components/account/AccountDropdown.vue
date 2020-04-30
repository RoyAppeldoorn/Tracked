<template>
  <div class="relative" @keydown.esc="isOpen = false">
    <button
      class="relative z-10 block h-12 w-12 rounded-full overflow-hidden border-2 border-purple-400 focus:outline-none focus:border-purple-200 hover:border-purple-200"
      @click="isOpen = !isOpen"
    >
      <img
        class="h-full w-full object-cover"
        src="https://randomuser.me/api/portraits/lego/8.jpg"
      />
    </button>
    <div
      v-if="isOpen"
      class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default border-none z-10"
      tabindex="-1"
      @click="isOpen = false"
    ></div>
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-10"
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
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
