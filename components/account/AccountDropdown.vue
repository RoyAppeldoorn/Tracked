<template>
  <div class="relative" @keydown.esc="isOpen = false">
    <button
      class="relative z-10 block h-8 w-8 rounded-full overflow-hidden border-2 border-gray-500 focus:outline-none focus:border-white hover:border-white"
      @click="isOpen = !isOpen"
    >
      <img
        class="h-full w-full object-cover"
        src="https://randomuser.me/api/portraits/women/55.jpg"
      />
    </button>
    <button
      v-if="isOpen"
      class="fixed inset-0 h-full w-full bg-black opacity-50 cursor-default"
      tabindex="-1"
      @click="isOpen = false"
    ></button>
    <div
      v-if="isOpen"
      class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl"
    >
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Account settings</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
        >Support</a
      >
      <a
        href="#"
        class="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
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
