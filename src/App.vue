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
import VueCurrencyFilter from 'vue-currency-filter'

Vue.use(VueCurrencyFilter,
  {
    symbol: 'Rp.',
    thousandsSeparator: '.',
    fractionCount: 0,
    fractionSeparator: ',',
    symbolPosition: 'front',
    symbolSpacing: true
  })

Vue.use(PaginationPlugin)
Vue.use(BootstrapVue)
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
body::-webkit-scrollbar {
  display: none;
}
</style>
