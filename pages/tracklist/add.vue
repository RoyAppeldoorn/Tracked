<template>
  <div class="container mx-auto px-4">
    <div class="upload-container pt-4 sm:pt-10">
      <h1 class="text-2xl font-light pb-4">Upload</h1>
      <div class="border-t border-white opacity-25 pb-4" />
      <div class="grid grid-cols-3 gap-4 text-center">
        <div class="item border-2 border-gradient-tr-pink-purple py-8 px-2">
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="text-gray-100 fill-current w-10">
              <path class="primary" d="M4 14a1 1 0 01.3-.7l11-11a1 1 0 011.4 0l3 3a1 1 0 010 1.4l-11 11a1 1 0 01-.7.3H5a1 1 0 01-1-1v-3z" />
              <rect width="20" height="2" x="2" y="20" rx="1" />
            </svg>
          </div>
          <div class="tracking-wide uppercase text-xs font-bold pt-4">Give it a name</div>
        </div>
        <div class="item border-2 border-gradient-tl-pink-purple py-8 px-2">
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="text-gray-100 fill-current w-10">
              <circle cx="12" cy="12" r="10" />
              <path class="fill-current text-tracked-background opacity-100" d="M10 14.59l6.3-6.3a1 1 0 011.4 1.42l-7 7a1 1 0 01-1.4 0l-3-3a1 1 0 011.4-1.42l2.3 2.3z" />
            </svg>
            <div class="tracking-wide uppercase text-xs font-bold pt-4">Hit enter</div>
          </div>
        </div>
        <div class="item border-2 border-gradient-br-pink-purple py-8 px-2">
          <div class="flex flex-col items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="text-gray-100 fill-current w-10">
              <path d="M6.59 16H3a1 1 0 01-1-1V9a1 1 0 011-1h3.59l4.7-4.7A1 1 0 0113 4v16a1 1 0 01-1.7.7L6.58 16z" />
              <path d="M17.66 6.34a1 1 0 011.41-1.41 10 10 0 010 14.14 1 1 0 01-1.41-1.41 8 8 0 000-11.32zm-2.83 2.83a1 1 0 111.41-1.41 6 6 0 010 8.48 1 1 0 01-1.41-1.41 4 4 0 000-5.66z" />
            </svg>
            <div class="tracking-wide uppercase text-xs font-bold pt-4">Add the tracklist</div>
          </div>
        </div>
      </div>

      <form class="upload-form pt-10" @submit="checkForm">
        <div v-if="errors.length || errorPopUp" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-10" role="alert">
          <strong class="font-bold">Please correct the following error(s):</strong>
          <ul>
            <li v-for="error in errors" :key="error">{{ error }}</li>
          </ul>
          <span class="absolute top-0 bottom-0 right-0 px-4 py-3">
            <svg class="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" @click="hidePopup">
              <title>Close</title>
              <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
            </svg>
          </span>
        </div>

        <div class="flex flex-wrap -mx-3 mb-4 sm:mb-12">
          <div class="w-full md:w-2/3 px-3 mb-4 md:mb-0">
            <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="title">
              Title
            </label>
            <input id="title" v-model="title" name="title" class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Choose a title for your upload" />
          </div>
          <div class="w-full md:w-1/3 px-3 mb-4 md:mb-0">
            <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-state">
              Genre
            </label>
            <div class="relative">
              <select id="genre" v-model="genre" name="genre" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 mb-3 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option selected disabled hidden>Select genre</option>
                <option v-for="musicGenre in genres" :key="musicGenre.id" :value="musicGenre.id">{{ musicGenre.name }}</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-wrap -mx-3 mb-4">
          <div class="w-full pb-4 px-3 justify-center">
            <div class="flex flex-col text-xs text-center">
              <div class="flex justify-center items-start sm:items-end">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="sm:w-6 w-10">
                  <path class="fill-current bg-gray-200" d="M11 12a1 1 0 010-2h2a1 1 0 01.96 1.27L12.33 17H13a1 1 0 010 2h-2a1 1 0 01-.96-1.27L11.67 12H11zm2-4a1.5 1.5 0 110-3 1.5 1.5 0 010 3z" />
                </svg>
                <span class="text-gray-400 pb-1">please provide a soundcloud link in the following format - https://soundcloud.com/{artist}/{mix}</span>
              </div>

              <span class="text-gray-600">Example: https://soundcloud.com/1001tracklists/san-holo-exclusive-mix</span>
            </div>
          </div>
          <div class="w-full px-3 mb-6 md:mb-0">
            <label class="block uppercase tracking-wide text-xs font-bold mb-2" for="soundcloud-url">
              Soundcloud URL
            </label>
            <input id="soundcloud-url" v-model="soundcloudUrl" name="soundcloud-url" class="appearance-none block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Please paste a valid soundcloud url" />
          </div>
        </div>
        <div class="flex justify-center pb-12 sm:py-12">
          <button class="bg-teal-400 hover:bg-teal-300 text-gray-800 font-bold py-2 px-4 rounded flex items-center content-center" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current w-8 text-teal-900">
              <path class="secondary" d="M9.53 16.93a1 1 0 01-1.45-1.05l.47-2.76-2-1.95a1 1 0 01.55-1.7l2.77-.4 1.23-2.51a1 1 0 011.8 0l1.23 2.5 2.77.4a1 1 0 01.55 1.71l-2 1.95.47 2.76a1 1 0 01-1.45 1.05L12 15.63l-2.47 1.3z" />
            </svg>
            <span class="ml-2 block uppercase text-teal-900 font-semibold">Next</span>
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  asyncData({ $axios, error }) {
    return $axios
      .get('/genre')
      .then(genres => {
        return { genres }
      })
      .catch(e => {
        console.log(e)
      })
  },
  data() {
    return {
      title: '',
      genre: [],
      soundcloudUrl: '',
      errors: [],
      errorPopUp: false
    }
  },
  middleware: 'authenticated',
  methods: {
    ...mapActions('tracklists', ['createTracklist']),
    checkForm(e) {
      if (this.title && this.genre && this.soundcloudUrl) {
        const tracklist = {
          title: this.title,
          genre: this.genre,
          url: this.soundcloudUrl
        }

        this.createNewTracklist(tracklist)
      } else {
        this.checkErrors()
      }

      e.preventDefault()
    },
    createNewTracklist(formData) {
      this.createTracklist(formData).then(id => {
        this.$router.push({ path: `/tracklist/edit/${id}` })
      })
    },
    checkErrors() {
      this.errors = []

      if (!this.title) {
        this.errors.push('A title is required.')
      }
      if (!this.genre) {
        this.errors.push('A genre is required')
      }
      if (!this.genre) {
        this.errors.push('Please provide a soundcloud url')
      }

      this.errorPopUp = true
    },
    hidePopup() {
      this.errorPopUp = false
    }
  }
}
</script>

<style lang="postcss" scoped>
.item {
  @apply bg-tracked-background;
}
</style>
