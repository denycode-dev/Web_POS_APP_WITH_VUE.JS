<template>
<div class="home">
  <Navbar/>
  <aside />
  <div class="row mt-5 articleParent">
    <!-- =============    Aside Bar   ============= -->
    <div class="col-lg-1 text-center pl-0 pr-0">
      <div class="sideBarLeft">
        <button type="button" class="btn btn-white style-bottom mt-5">
          <router-link to="/main">
            <img src="../assets/icons/fork.svg" width="50" height="50" loading="lazy" />
          </router-link>
        </button>
        <button type="button" class="btn btn-white style-bottom mt-5">
          <router-link to="/history">
            <img src="../assets/icons/clipboard.svg" width="50" height="50" loading="lazy" />
          </router-link>
        </button>
        <button type="button" class="btn btn-white style-bottom mt-5">
          <router-link to="/edit">
            <img src="../assets/icons/edit.svg" width="50" height="50" loading="lazy" />
          </router-link>
        </button>
      </div>
    </div>

    <div class="col-lg-7 bg-light pt-4">
      <div class="container text-center">
        <div class="row row-cols-1 row-cols-md-3 ml-1 mr-2 height-style overflow-auto">
          <ItemCard v-for="product in productstate" :item="product" :key="product.id" @select-product="addCart(product)" :active="checkProductActive(product.id)"/>
        </div>
      </div>
    </div>
    <AsideCard :egptyCart="checkCart" :Cart="Cart"/>
  </div>
  <ButtomNav />
  <ModalAdd v-show="modalActive" :data="dataModal" @close-modal="toggleModal" @fire-event="addProduct" />
</div>
</template>

<script scoped>
import Navbar from '../components/Main/Navbar'
import ItemCard from '../components/Main/ItemCard'
import ModalAdd from '../components/Main/ModalAdd'
import ButtomNav from '../components/Main/ButtomNav'
import AsideCard from '../components/Main/AsideCard'
import {
  mapActions,
  mapGetters,
  mapMutations
} from 'vuex'

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
      dataModal: {
        id: null,
        name: '',
        price: '',
        image: null,
        idCategory: null
      },
      modalActive: false,
      products: [],
      invoices: [],
      username: '',
      password: '',
      egptyCart: false,
      Cart: true
    }
  },
  methods: {
    ...mapActions(['getProduct', 'handleSearch', 'insertProduct', 'getAllInvoice']),
    ...mapMutations(['addCart']),
    toggleModal () {
      this.modalActive = !this.modalActive
      if (!this.modalActive) {
        this.clearModal()
      }
    },
    setSearch (e) {
      console.log(e)
      const url = `search/${e.target.value}`
      this.getProduct(url)
    },
    setSort (e) {
      console.log(e.target.value)
      const url = `sort/asc/${e.target.value}`
      this.getProduct(url)
    },
    checkProductActive (id) {
      return this.getCart.find(item => {
        return item.id === id
      })
    }
    // checkCart () {
    //   if (this.countCart === '') {
    //     this.egptyCart = true
    //     this.Cart = false
    //   } else {
    //     this.egptyCart = false
    //     this.Cart = true
    //   }
    // }
    // clearModal () {
    //   this.dataModal.id = null
    //   this.dataModal.name = ''
    //   this.dataModal.price = ''
    //   this.dataModal.image = null
    //   this.dataModal.idCategory = null
    // },
    // addProduct () {
    //   const data = new FormData()
    //   data.append('name', this.dataModal.name)
    //   data.append('image', this.dataModal.image)
    //   data.append('price', this.dataModal.price)
    //   data.append('idCategory', this.dataModal.idCategory)

    //   this.insertProduct(data)
    //     .then(res => {
    //       console.log(res.status)
    //       if (!res.status === 'Failed') {
    //         this.data.modalActive = false
    //         this.clearModal()
    //         this.getProduct()
    //         alert('add data success')
    //       } else {
    //         alert('add data failed')
    //       }
    //     })
    // }
  },
  computed: {
    ...mapGetters({
      productstate: 'getProduct',
      countCart: 'countCart',
      getCart: 'getCart'
    }),
    product () {
      return this.$store.getters.getProduct
    },
    rows () {
      return this.product.length
    }
  },
  mounted () {
    this.getProduct()
  }
}
</script>

<style scoped>
.scroll::-webkit-scrollbar {
  display: none;
}

.articleParent {
  min-height: 720px;
}

.mainHide {
  display: none;
}

.sideBarLeft {
  text-align: center;
}

.height-style {
  max-height: 980px;
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
