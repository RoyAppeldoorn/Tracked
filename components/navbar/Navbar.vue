<template>
  <div>
    <div class="shade" />
    <header
      class="navbar py-1 border-t-4 border-gradient-r-pink-purple shadow-sm fixed w-full"
    >
      <div class="container mx-auto sm:flex sm:justify-between sm:items-center">
        <div class="flex items-center justify-between px-4 py-3">
          <div>
            <a href="/">
              <img
                class="h-10"
                src="~/assets/logo_gradient.svg"
                alt="Tracked"
              >
            </a>
          </div>

          <div class="sm:hidden">
            <button
              ref="menu"
              type="button"
              class="block text-gray-300 hover:text-white focus:text-white focus:outline-none"
              @click="isOpen = !isOpen"
            >
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                <path
                  v-if="isOpen"
                  fill-rule="evenodd"
                  d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.829 4.828 4.828z"
                />
                <path
                  v-if="!isOpen"
                  fill-rule="evenodd"
                  d="M3 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm0 6a1 1 0 011-1h16a1 1 0 110 2H4a1 1 0 01-1-1zm1 5a1 1 0 100 2h16a1 1 0 100-2H4z"
                />
              </svg>
            </button>
          </div>
        </div>
        <nav :class="isOpen ? 'block' : 'hidden'" class="sm:block">
          <div class="sm:px-2 px-4 pt-2 pb-5 sm:py-0 sm:flex items-center">
            <nuxt-link
              to="/explore"
              class="block sm:px-4 mt-2 sm:mt-0 font-medium text-sm hover:text-white"
            >
              Explore
            </nuxt-link>
            <nuxt-link
              to="/tracklist/12"
              class="block sm:px-4 mt-2 sm:mt-0 font-medium text-sm hover:text-white"
            >
              Tracklist
            </nuxt-link>
            <nuxt-link
              v-if="isOpen"
              to="/explore"
              class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                class="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </nuxt-link>
          </div>

          <div class="mx-4 border-t border-white opacity-25 sm:hidden" />
          <div class="px-4 py-5 sm:hidden">
            <div class="flex items-center">
              <img
                class="h-8 w-8 rounded-full border-2 border-gray-500"
                src="https://randomuser.me/api/portraits/women/55.jpg"
              >
              <span class="ml-3 font-semibold">Jane Doe</span>
            </div>
            <div class="mt-4">
              <a href="#" class="block font-medium text-sm hover:text-white">
                Account settings
              </a>
              <a
                href="#"
                class="mt-2 block font-medium text-sm hover:text-white"
              >
                Support
              </a>
              <a
                href="#"
                class="mt-2 block font-medium text-sm hover:text-white"
              >
                Sign out
              </a>
            </div>
          </div>
        </nav>
        <nav :class="isOpen ? 'block' : 'hidden'" class="sm:block">
          <div class="sm:px-2 px-4 pt-2 pb-5 sm:py-0 sm:flex items-center">
            <nuxt-link
              v-if="isOpen"
              to="/explore"
              class="bg-grey-light hover:bg-grey text-grey-darkest font-bold py-2 px-4 rounded inline-flex items-center"
            >
              <svg
                class="w-4 h-4 mr-2"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span>Download</span>
            </nuxt-link>
            <AccountDropdown class="hidden sm:block sm:ml-6" />
          </div>
        </nav>
      </div>
    </header>
  </div>
</template>

<script>
import AccountDropdown from '@/components/account/AccountDropdown.vue'

export default {
  components: { AccountDropdown },
  data () {
    return {
      isOpen: false
    }
  },
  mounted () {
    document.addEventListener('click', this.documentClick)
  },
  destroyed () {
    document.removeEventListener('click', this.documentClick)
  },
  methods: {
    documentClick (e) {
      const el = this.$refs.menu
      const target = e.target
      if (el !== target && !el.contains(target)) {
        this.isOpen = false
      }
    }
  }
}
</script>

<style lang="postcss" scoped>
.navbar {
  background: linear-gradient(
    180deg,
    rgba(7, 17, 30, 0.3),
    rgba(46, 52, 73, 0.4)
  );
  z-index: 10;
  backdrop-filter: blur(30px);
}

.shade {
  background-color: rgba(235, 5, 128, 0.2);
  position: fixed;
  height: 50px;
  width: 95%;
  top: 40px;
  border-radius: 10px;
  -webkit-filter: blur(50px);
  filter: blur(50px);
}
</style>
