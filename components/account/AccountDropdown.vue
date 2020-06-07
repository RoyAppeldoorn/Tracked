<template>
  <on-click-outside :do="handleClickOutside">
    <div class="relative" @keydown.esc="isOpen = false">
      <div v-if="isAuthenticated">
        <button class="relative z-20 block h-12 w-12 rounded-full overflow-hidden border-2 border-tracked-purple focus:outline-none focus:border-tracked-pink hover:border-tracked-pink" @click="isOpen = !isOpen">
          <img class="h-full w-full object-cover" src="https://randomuser.me/api/portraits/lego/8.jpg" />
        </button>
        <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
          <a href="#" class="block px-4 py-2 text-gray-600 font-medium text-sm hover:bg-tracked-purple hover:text-white">
            Account settings
          </a>
          <a href="#" class="block px-4 py-2 text-gray-600 font-medium text-sm hover:bg-tracked-purple hover:text-white">
            Support
          </a>
          <button class="block px-4 py-2 text-gray-600 font-medium text-sm hover:bg-tracked-purple hover:text-white w-full text-left outline-none" @click="attemptLogout">
            Sign out
          </button>
        </div>
      </div>
      <div v-if="!isAuthenticated">
        <div v-if="isOpen" class="absolute right-0 mt-2 py-2 w-48 bg-white rounded-lg shadow-xl z-20">
          <nuxt-link to="/login" class="block px-4 py-2 text-gray-600 font-medium text-sm hover:bg-tracked-purple hover:text-white">
            Sign in
          </nuxt-link>
          <nuxt-link to="/register" class="block px-4 py-2 text-gray-600 font-medium text-sm hover:bg-tracked-purple hover:text-white">
            Register
          </nuxt-link>
        </div>
      </div>
    </div>
  </on-click-outside>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
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
  computed: {
    ...mapGetters('user', ['isAuthenticated'])
  },
  methods: {
    ...mapActions('user', ['logout']),
    handleClickOutside() {
      if (this.isOpen) {
        this.isOpen = false
      }
    },
    attemptLogout() {
      this.logout()
    }
  }
}
</script>

<style lang="scss" scoped></style>
