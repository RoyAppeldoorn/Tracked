<template>
  <div class="container">
    <div>
      <Logo />
      <nuxt-link to="/tracklist">Tracklist</nuxt-link>
    </div>
  </div>
</template>

<script>
import Logo from '@/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style lang="postcss">
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
</style>
