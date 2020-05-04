<template>
  <div>
    <Navbar class="pb-navbar-sm sm:pb-navbar" />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue'
export default {
  components: {
    Navbar
  }
}
</script>

<style lang="postcss">
body {
  @apply text-gray-100 font-body text-sm bg-tracked-main;
}
</style>
