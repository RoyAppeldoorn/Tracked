<template>
  <div>
    <div v-show="!isOpen" class="shade" />
    <header class="navbar py-1 border-t-4 border-gradient-r-pink-purple shadow-sm fixed w-full">
      <div class="container mx-auto sm:flex sm:justify-between sm:items-center px-4 py-3">
        <div class="flex items-center">
          <div>
            <nuxt-link to="/">
              <img class="h-10 mr-8 sm:mr-10" src="~/assets/logo_gradient.svg" alt="Tracked" />
            </nuxt-link>
          </div>

          <div class="lg:block hidden px-4">
            <div class="relative">
              <button type="submit" class="absolute inset-y-0 left-0 focus:outline-none ml-4">
                <svg id="Capa_1" class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve" width="512px" height="512px">
                  <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                </svg>
              </button>
              <input class="border-2 border-gradient-tr-pink-purple bg-transparent pl-10 pr-2 py-2 text-sm placeholder-gray-400 focus:placeholder-gray-600 outline-none" placeholder="Search by keywords" />
            </div>
          </div>

          <nuxt-link to="/explore" class="lg:hidden flex font-medium text-sm hover:text-white group">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-gray-100 h-6 w-6">
              <path d="M16.32 14.9l1.1 1.1c.4-.02.83.13 1.14.44l3 3a1.5 1.5 0 01-2.12 2.12l-3-3a1.5 1.5 0 01-.44-1.14l-1.1-1.1a8 8 0 111.41-1.41zM10 16a6 6 0 100-12 6 6 0 000 12z" />
            </svg>
          </nuxt-link>

          <div class="sm:hidden ml-auto">
            <button ref="menu" type="button" class="block text-gray-300 hover:text-white focus:text-white focus:outline-none" @click="isOpen = !isOpen">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z" />
                <path v-if="!isOpen" fill-rule="evenodd" d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h16a1 1 0 100-2H4z" />
              </svg>
            </button>
          </div>
        </div>

        <nav :class="isOpen ? 'block' : 'hidden'" class="sm:block">
          <div class="sm:p-0 sm:px-4 py-5 sm:flex items-center">
            <nuxt-link to="/explore" class="flex sm:mx-4 mt-3 sm:mt-0 font-medium text-sm hover:text-white group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-gray-100 h-6 w-6">
                <path d="M14 10h2a1 1 0 01.81 1.58l-5 7A1 1 0 0110 18v-4H8a1 1 0 01-.81-1.58l5-7A1 1 0 0114 6v4z" />
              </svg>
              <span class="ml-2 block group-hover:text-white">Explore</span>
            </nuxt-link>
            <nuxt-link to="/tracklist/12" class="flex sm:mx-4 mt-3 sm:mt-0 font-medium text-sm hover:text-white group">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-gray-100 h-6 w-6">
                <path d="M22 17a1 1 0 01-2 0v-5a8 8 0 10-16 0v5a1 1 0 01-2 0v-5a10 10 0 1120 0v5z" />
                <path d="M7 12a2 2 0 012 2v6a2 2 0 11-4 0v-6c0-1.1.9-2 2-2zm10 0a2 2 0 012 2v6a2 2 0 11-4 0v-6c0-1.1.9-2 2-2z" />
              </svg>
              <span class="ml-2 block group-hover:text-white">Tracklists</span>
            </nuxt-link>
            <nuxt-link v-if="isAuthenticated" to="/tracklist/add" class="flex sm:mx-4 mt-3 sm:mt-0 font-medium text-sm hover:text-white group bg-transparent sm:hover:bg-gradient-bl-pink-purple font-medium sm:font-semibold sm:py-2 sm:px-4 sm:border sm:border-gradient-bl-pink-purple">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-gray-100 h-6 w-6">
                <path d="M13 11h4a1 1 0 010 2h-4v4a1 1 0 01-2 0v-4H7a1 1 0 010-2h4V7a1 1 0 012 0v4z" />
              </svg>
              <span class="ml-2 block group-hover:text-white">Upload</span>
            </nuxt-link>
            <AccountDropdown v-if="isAuthenticated" class="hidden sm:block sm:ml-6" />

            <div v-show="!isAuthenticated && isOpen === false" class="sm:flex sm:ml-12 items-center">
              <nuxt-link to="/login" class="flex mt-3 sm:mt-0 font-medium text-sm hover:text-white group">
                <span class="ml-2 block group-hover:text-white">Login</span>
              </nuxt-link>
              <nuxt-link to="/register" class="flex sm:ml-2 mt-3 sm:mt-0 font-medium text-sm hover:text-white group">
                <span class="ml-2 block group-hover:text-white">Register</span>
              </nuxt-link>
            </div>
          </div>
          <div class="border-t border-white opacity-25 sm:hidden" />
          <div class="sm:px-4 py-5 sm:hidden">
            <div v-if="isAuthenticated" class="flex items-center">
              <img class="h-8 w-8 rounded-full border-2 border-gray-500" src="https://randomuser.me/api/portraits/women/55.jpg" />
              <span class="ml-3 font-semibold">Jane Doe</span>
            </div>
            <div class="mt-4">
              <div v-if="isAuthenticated">
                <a href="#" class="block font-medium text-sm hover:text-white">
                  Account settings
                </a>
                <a href="#" class="mt-3 block font-medium text-sm hover:text-white">
                  Support
                </a>
                <button class="mt-3 block font-medium text-sm hover:text-white" @click="attemptLogout">
                  Sign out
                </button>
              </div>
              <div v-if="!isAuthenticated">
                <nuxt-link to="/login" class="mt-3 block font-medium text-sm hover:text-white">
                  Sign in
                </nuxt-link>
                <nuxt-link to="/register" class="mt-3 block font-medium text-sm hover:text-white">
                  Register
                </nuxt-link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import AccountDropdown from '@/components/account/AccountDropdown.vue'

export default {
  components: { AccountDropdown },
  data() {
    return {
      isOpen: false
    }
  },
  computed: {
    ...mapGetters('user', ['isAuthenticated'])
  },
  mounted() {
    document.addEventListener('click', this.documentClick)
  },
  destroyed() {
    document.removeEventListener('click', this.documentClick)
  },
  methods: {
    ...mapActions('user', ['logout']),
    documentClick(e) {
      const el = this.$refs.menu
      const target = e.target
      if (el !== target && !el.contains(target)) {
        this.isOpen = false
      }
    },
    attemptLogout() {
      this.logout()
    }
  }
}
</script>

<style lang="postcss" scoped>
.navbar {
  background: linear-gradient(180deg, rgba(7, 17, 30, 0.3), rgba(46, 52, 73, 0.4));
  z-index: 10;
  backdrop-filter: blur(30px);
}

.shade {
  background-color: rgba(235, 5, 128, 0.2);
  position: fixed;
  height: 50px;
  margin: 0 auto;
  width: 95%;
  left: 0;
  right: 0;
  top: 40px;
  border-radius: 10px;
  -webkit-filter: blur(50px);
  filter: blur(50px);
}
</style>
