<template>
<div class="container">
  <LogInCard />
</div>
</template>

<script>
import LogInCard from '../components/Home/LogInCard'

import {
  mapActions
} from 'vuex'

export default {
  name: 'Home',
  components: {
    LogInCard
  },
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
          this.$router.push('/')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    ...mapActions(['login'])
  }
}
</script>

<style scoped>
</style>
