<template>
  <div class="home">
    <Navbar />
    <aside />
    <div class="row mt-5 articleParent">
    <!-- =============    Aside Bar   ============= -->
      <div class="col-lg-1">
        <div class="sideBarLeft">
          <button type="button" class="btn btn-white style-bottom mt-5">
            <router-link to="/main">
                <img src="../assets/icons/fork.svg" />
            </router-link>
          </button>
          <button type="button" class="btn btn-white style-bottom mt-5">
            <router-link to="/history">
                <img src="../assets/icons/clipboard.svg" />
            </router-link>
          </button>
          <button type="button" class="btn btn-white style-bottom mt-5" @click="toggleModal">
                <img src="../assets/icons/add.svg" />
          </button>
          <button type="button" class="btn btn-white style-bottom mt-5 mainHide" >
            <router-link to="/edit">
                <img src="../assets/icons/edit.svg" width="50" height="50" loading="lazy"/>
            </router-link>
          </button>
        </div>
      </div>
  <!-- =============    Aside Bar   ============= -->
      <div class="col-lg-7 bg-light pt-4">
       <div class="container text-center">
        <div class="row row-cols-1 row-cols-md-3 ml-1 mr-2">
            <ItemCard v-for="product in productstate" :item="product" :key="product.id" @select-product="addCart(product)"/>
        </div>
      </div>
      </div>
      <AsideCard />
    </div>
    <ButtomNav />
    <ModalAdd  v-show="modalActive" :closeModal="toggleModal"/>
  </div>
</template>

<script scoped>
// import axios from 'axios'
import Navbar from '../components/Main/Navbar'
import ItemCard from '../components/Main/ItemCard'
import ModalAdd from '../components/Main/ModalAdd'
import ButtomNav from '../components/Main/ButtomNav'
import AsideCard from '../components/Main/AsideCard'
import { mapActions, mapGetters, mapMutations } from 'vuex'

export default {
  name: 'Main',
  components: {
    Navbar,
    ItemCard,
    ModalAdd,
    ButtomNav,
    AsideCard
  },
  data () {
    return {
      modalActive: true,
      products: [],
      username: '',
      password: ''
    }
  },
  methods: {
    ...mapActions(['getProduct', 'handleSearch']),
    ...mapMutations(['addCart']),
    toggleModal () {
      this.modalActive = !this.modalActive
      if (!this.modalActive) {
        this.clearModal()
      }
    },
    setSearch (e) {
      console.log(e)
      // this.handleSearch(e.target.value)
      const url = `?search/${e.target.value}`
      this.getProduct(url)
    },
    checkProductActive (id) {
      return this.getCart.find(item => {
        return item.id === id
      })
    }
  },
  computed: {
    ...mapGetters({
      productstate: 'getProduct',
      countCart: 'countCart',
      getCart: 'getCart'
    }),
    product () {
      return this.$store.getters.getProduct
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style scoped>
.articleParent {
  min-height: 720px;
}
.mainHide {
  display: none;
}
.sideBarLeft {
  text-align: center;
  margin-right: 10%;
}
@media (max-width: 720px) {
  .sideBarLeft2 {
    display: none;
  }
}
@media (max-width: 1000px) {
  .sideBarLeft {
    display: none;
  }
}
</style>
