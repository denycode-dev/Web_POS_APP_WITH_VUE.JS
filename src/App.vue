<template>
<div id="app">
  <router-view />
</div>
</template>

<script>
import {
  mapActions
} from 'vuex'
import Vue from 'vue'
import {
  BootstrapVue,
  IconsPlugin
  ,
  PaginationPlugin
} from 'bootstrap-vue'

Vue.use(PaginationPlugin)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
export default {
  name: 'App',
  methods: {
    ...mapActions(['interceptorsRequest', 'interceptorsResponse'])
  },
  created () {
    this.interceptorsRequest()
    this.interceptorsResponse()
  }
}
</script>

<style>
</style>
