<template>
  <div>
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
  @apply text-gray-200 font-body text-sm bg-gray-800;
}
</style>
