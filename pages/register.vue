<template>
  <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
    <form @submit="registerUser">
      <div class="form-group">
        <input id="email" v-model="account.email" type="email" class="form-control" placeholder="E-mail address" />
      </div>

      <div class="form-group">
        <input id="nickname" v-model="account.nickname" class="form-control" placeholder="Nickname" />
      </div>

      <div class="form-group">
        <input id="password" v-model="account.password" type="password" class="form-control" placeholder="Password" />
      </div>

      <div class="form-group">
        <input id="confirm_password" v-model="account.confirmPassword" type="password" class="form-control" placeholder="Confirm Password" />
      </div>

      <div class="form-group">
        <input type="submit" class="btn btn-primary" />
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
        nickname: null,
        password: null,
        confirmPassword: null
      },
      isError: false,
      errorMsg: ''
    }
  },
  methods: {
    ...mapActions('user', ['register']),
    registerUser(e) {
      this.register(this.account)
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
      e.preventDefault()
    }
  }
}
</script>

<style lang="scss" scoped></style>
