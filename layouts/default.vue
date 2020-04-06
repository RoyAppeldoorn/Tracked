<template>
  <div class="h-screen bg-gray-900">
    <Navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/navbar/Navbar.vue';
import backgroundUrl from '~/assets/bg.png';
export default {
  components: {
    Navbar
  },
  data() {
    return {
      backgroundUrl
    };
  }
};
</script>

<style></style>
