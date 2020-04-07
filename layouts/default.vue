<template>
  <div class="font-sans text-white">
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue';
export default {
  components: {
    Navbar
  }
};
</script>

<style lang="postcss">
body {
  @apply bg-primary;
}
</style>
