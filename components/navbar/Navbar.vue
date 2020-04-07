<template>
  <header class="bg-secondary py-3">
    <div class="container mx-auto sm:flex sm:justify-between sm:items-center">
      <div class="flex items-center justify-between px-4 py-3 sm:p-0">
        <div class="m-2">
          <a href="/"
            ><img class="h-10" src="~/assets/logo_gradient.svg" alt="Tracked"
          /></a>
        </div>
        <div class="ml-4 hidden sm:hidden">
          <nuxt-link
            to="/tracklist"
            class="block px-2 py-1 text-gray-300 font-normal rounded hover:bg-gray-800"
            >Browse</nuxt-link
          >
        </div>
        <div class="sm:hidden">
          <button
            type="button"
            class="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
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
      <div class="relative mx-auto text-gray-600">
        <input
          class="border-2 border-purple-400 bg-gray-100 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none placeholder-purple-700"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" class="absolute right-0 top-0 bottom-0 mr-4">
          <svg
            id="Capa_1"
            class="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style="enable-background:new 0 0 56.966 56.966;"
            xml:space="preserve"
            width="512px"
            height="512px"
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            />
          </svg>
        </button>
      </div>
      <nav :class="isOpen ? 'block' : 'hidden'" class="sm:block">
        <div class="px-2 pt-2 pb-4 sm:flex sm:p-0 items-center">
          <nuxt-link
            v-if="isOpen === true"
            to="/tracklist"
            class="block px-2 py-1 text-gray-300 font-normal rounded hover:bg-gray-800"
            >Browse</nuxt-link
          >
          <nuxt-link
            to="/tracklist"
            class="block text-gray-300 md:border-2 md:border-purple-700 sm:border-0 hover:bg-purple-700 hover:text-white py-1 px-4 mr-8 rounded"
            >Add a tracklist</nuxt-link
          >
          <nuxt-link
            to="/tracklist"
            class="block px-2 py-1 text-gray-300 font-normal rounded hover:bg-gray-800"
            >Tracklist</nuxt-link
          >

          <AccountDropdown class="hidden sm:block sm:ml-6" />
        </div>

        <div class="px-4 py-5 border-t border-gray-800 sm:hidden">
          <div class="flex items-center">
            <img
              class="h-8 w-8 rounded-full border-2 border-gray-500"
              src="https://randomuser.me/api/portraits/women/55.jpg"
            />
            <span class="ml-3 font-semibold text-white">Jane Doe</span>
          </div>

          <div class="mt-4">
            <a href="#" class="block text-gray-400 hover:text-white"
              >Account settings</a
            >
            <a href="#" class="mt-2 block text-gray-400 hover:text-white"
              >Support</a
            >
            <a href="#" class="mt-2 block text-gray-400 hover:text-white"
              >Sign out</a
            >
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import AccountDropdown from '@/components/account/AccountDropdown.vue';

export default {
  components: {
    AccountDropdown
  },
  data() {
    return {
      isOpen: false
    };
  }
};
</script>

<style lang="postcss" scoped></style>
