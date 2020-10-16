<template>
<div class="container">
    <CardRegister :data="dataRegister" @fire-event="addRegister" class="backgroud" />
    <notifications animation-type="velocity" position="top left" class="mt-5 ml-5"/>
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

      this.register(data)
        .then(res => {
          this.$store.dispatch('notify', 'Register Success')
          this.clearData()
          this.$router.push('/')
        })
    },
    clearData () {
      this.dataRegister.id = null
      this.dataRegister.name = ''
      this.dataRegister.image = null
      this.dataRegister.tlpNumber = ''
      this.dataRegister.email = ''
      this.dataRegister.tlpNumber = ''
      this.dataRegister.roleId = null
      this.dataRegister.password = ''
    }
  }
}
</script>

<style scoped>
</style>
