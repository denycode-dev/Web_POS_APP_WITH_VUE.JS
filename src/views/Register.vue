<template>
<div class="container">
    <CardRegister class="backgroud" />
</div>
</template>

<script>
import CardRegister from '../components/Home/CardRegister'
import {
  mapActions
} from 'vuex'

export default {
  name: 'Register',
  components: {
    CardRegister
  },
  data () {
    return {
      dataRegister: {
        id: null,
        image: null,
        name: '',
        email: '',
        tlpNumber: '',
        password: '',
        roleId: null
      }
    }
  },
  methods: {
    ...mapActions(['register']),
    addRegister () {
      const data = new FormData()
      data.append('name', this.dataRegister.name)
      data.append('image', this.dataRegister.image)
      data.append('email', this.dataRegister.email)
      data.append('tlpNumber', this.dataRegister.tlpNumber)
      data.append('password', this.dataRegister.password)
      data.append('roleId', this.dataRegister.roleId)

      this.insertProduct(data)
        .then(res => {
          this.$router.push('/')
          alert('add data success')
        })
    }
  }
}
</script>

<style scoped>
</style>
