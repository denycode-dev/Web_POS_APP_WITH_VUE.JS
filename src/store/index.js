import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router/index'
import Notifications from 'vue-notification'
import velocity from 'velocity-animate'

Vue.use(Notifications, {
  velocity
})
const notifier = new Vue()
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [],
    user: {},
    token: localStorage.getItem('token') || null,
    carts: []
  },
  mutations: {
    setProduct (state, payload) {
      state.products = payload
    },
    setUser (state, payload) {
      state.user = payload
      state.token = payload.token
    },
    setToken (state, payload) {
      state.token = payload
    },
    addCart (state, payload) {
      const isCart = state.carts.find((item) => {
        return item.id === payload.id
      })
      console.log(isCart)
      if (!isCart) {
        const item = payload
        item.count = 1
        state.carts.push(item)
      } else {
        console.log(payload.id)
        state.carts = state.carts.filter((item) => {
          return item.id !== payload.id
        })
      }
    },
    plusMinPrice (state, payload) {
      console.log(payload.index)
      const container = [...state.carts]
      if (payload.type === '+') {
        container[payload.index].count += 1
      } else {
        container[payload.index].count -= 1
      }
      state.carts = container
    }
  },
  actions: {
    handleSearch (context, key) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/products/search/${key}`)
          .then((res) => {
            resolve(res.data.result)
            context.commit('setProduct', res.data.result)
            // context.commit('setPaginations', res.data.paginations)
          })
          .catch((err) => {
            console.log(err)
            return Promise.reject(err)
          })
      })
    },
    interceptorsResponse (context) {
      axios.interceptors.response.use(function (response) {
        return response
      }, function (error) {
        console.log(error.response.result.message)
        if (error.response.status_code === 401) {
          console.log(error.response)
          if (error.response.result.message === 'incored password') {
            context.commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/')
            alert('maaf anda tidak boleh merubah token dengan sendirinya')
          } else if (error.response.data.result.message === 'token expired') {
            context.commit('setToken', null)
            localStorage.removeItem('token')
            router.push('/')
            alert('maaf session habis silahkan login kembali')
          }
        }
        return Promise.reject(error)
      })
    },
    interceptorsRequest (context) {
      axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        config.headers.Authorization = `Bearer ${context.state.token}`
        return config
      }, function (error) {
        // Do something with request error
        return Promise.reject(error)
      })
    },
    login (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/users/login`, payload)
          .then((res) => {
            context.commit('setUser', res.data.result)
            localStorage.setItem('token', res.data.result.token)
            context.dispatch('interceptorsRequest')
            resolve(res.data.result[0])
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    register (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/users/login`, payload)
          .then((res) => {
            console.log(res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getProduct (context) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/products`)
          .then((res) => {
            context.commit('setProduct', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    getAllInvoice (context) {
      return new Promise((resolve, reject) => {
        axios.get(`${process.env.VUE_APP_BASE_URL}/history/total`)
          .then((res) => {
            context.commit('getInvoice', res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    insertProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.post(`${process.env.VUE_APP_BASE_URL}/products`, payload)
          .then((res) => {
            console.log(res.data.result)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    editProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.patch(`${process.env.VUE_APP_BASE_URL}/products/` + payload.id, payload.data)
          .then((res) => {
            console.log(res)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    deleteProduct (context, payload) {
      return new Promise((resolve, reject) => {
        axios.delete(`${process.env.VUE_APP_BASE_URL}/products/` + payload.id)
          .then((res) => {
            console.log(res)
            resolve(res.data.result)
          })
          .catch((err) => {
            console.log(err)
            reject(err)
          })
      })
    },
    notify (context, payload) {
      notifier.$notify(payload)
    }
  },
  getters: {
    getProduct (state) {
      return state.products
    },
    isLogin (state) {
      return state.token !== null
    },
    getCart (state) {
      return state.carts
    },
    countCart (state) {
      return state.carts.length
    }
  },
  modules: {
  }
})
