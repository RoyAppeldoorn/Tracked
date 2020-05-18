<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <div class="mb-4">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="username">
        Username
      </label>
      <input id="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" type="text" placeholder="Username" />
    </div>
    <div class="mb-6">
      <label class="block text-grey-darker text-sm font-bold mb-2" for="password">
        Password
      </label>
      <input id="password" class="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3" type="password" placeholder="******************" />
      <p class="text-red text-xs italic">Please choose a password.</p>
    </div>
    <div class="flex items-center justify-between">
      <button class="bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="button">
        Sign In
      </button>
      <a class="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    }
  },
  async mounted() {
    await this.$fireAuth
      .signInWithEmailAndPassword('roy.appeldoorn@gmail.com', 'ererer')
      .then(response => {
        this.$fireAuth.currentUser.getIdToken(true).then(idToken => {
          console.log(idToken)
        })
      })
      .catch(error => {
        // eslint-disable-next-line no-console
        console.log(error)
      })
  }
}
</script>

<style lang="scss" scoped></style>
