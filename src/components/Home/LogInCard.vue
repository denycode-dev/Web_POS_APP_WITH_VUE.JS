<template>
<div class="kotak_login shadow-lg border-black bg-light w-50 h-75">
  <form class="container">
    <div class="form-group text-left">
      <label class="font-weight-bold mb-3">
        Your Email
      </label>
      <input type="text" class="form-control" v-model="email">
      <small class="form-text text-muted font-weight-light">
        enter your division such as cashier, head of shop, or managerial
      </small>
    </div>
    <div class="form-group text-left">
      <label class="font-weight-bold mb-3">
        Password
      </label>
      <input type="password" class="form-control" v-model="password">
      <small class="form-text text-muted font-weight-light">
        if you do not know your division password click forgot password
      </small>
    </div>
    <div class="form-group form-check">
      <input type="radio" class="form-check-input">
      <label class="form-check-label font-weight-light text-muted">
        Remember me
      </label>
    </div>
    <button type="submit" class="btn btn-style btn-lg btn-block mt-5 text-white" @click="handleLogin">
      LOGIN
    </button>
    <div class="text-center mt-3">
      <router-link class="font-weight-light text-reset text-muted" to="">
        Forgot your password?
      </router-link>
    </div>
  </form>
  <div class="text-center mt-3">
    <p class="font-weight-light text-muted">
      Not Registered?
      <router-link to='/register' class="text-reset font-weight-bold">Sign Up</router-link>
    </p>
  </div>
  <notifications animation-type="velocity" position="top left" class="mt-5 ml-5"/>
</div>
</template>

<script>
import {
  mapActions
} from 'vuex'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin (e) {
      e.preventDefault()
      const data = {
        email: this.email,
        password: this.password
      }
      this.login(data)
        .then(() => {
          this.$router.push('/main')
        })
        .catch(() => {
          this.$store.dispatch('notify', 'wrong email and password please check again')
          this.password = ''
        })
    },
    ...mapActions(['login'])
  }
}
</script>

<style scoped>
.kotak_login {
  width: 50%;
  margin: 5% auto;
  padding: 30px 20px;
}

.btn-style {
  background: #57CAD5;
}

@media (max-width: 520px) {
  .kotak_login {
    width: 100%;
  }

  .text-muted {
    display: none;
  }
}
</style>
