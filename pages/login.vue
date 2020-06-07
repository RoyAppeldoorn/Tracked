<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <form @submit.prevent="attemptLogin" @submit.enter="attemptLogin">
      <div class="form-group">
        <input id="nuxtfire-email" v-model="account.email" type="email" class="form-control" placeholder="E-mail address" />
      </div>

      <div class="form-group">
        <input id="nuxtfire-password" v-model="account.password" type="password" class="form-control" placeholder="Password" />
      </div>

      <div class="form-group">
        <input type="submit" class="btn btn-primary" @click="attemptLogin" />
      </div>
      <div v-if="isError" class="alert alert-danger">
        <p class="mb-0">{{ errMsg }}</p>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      account: {
        email: null,
        password: null
      },
      isError: false,
      errorMsg: ''
    }
  },
  methods: {
    ...mapActions('user', ['login']),
    attemptLogin() {
      this.login(this.account)
        .then(() => {
          this.$router.push('/')
        })
        .catch(error => {
          this.isError = true
          this.errMsg = error.code
          setTimeout(() => {
            this.isError = false
          }, 5000)
        })
    }
  }
}
</script>

<style lang="scss" scoped></style>
