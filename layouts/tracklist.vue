<template>
  <div class="h-screen bg-gray-100">
    <Navbar class="bg-gray-900" />
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

<style></style>
