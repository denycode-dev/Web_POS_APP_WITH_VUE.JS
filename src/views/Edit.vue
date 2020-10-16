<template>
<div class="home">
  <Navbar />
  <div class="row mt-5 articleParent">
    <!-- =============    Aside Bar   ============= -->
    <div class="col-lg-1 text-center">
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
      <button type="button" class="btn btn-white style-bottom mt-5" @click="toggleModal">
        <img src="../assets/icons/add.svg" width="50" height="50" loading="lazy" />
      </button>
    </div>

    <div class="col-lg-7 bg-light pt-4">
      <div class="container text-center">
        <div class="row row-cols-1 row-cols-md-3 ml-1 mr-2 height-style overflow-auto">
          <ItemCardEdit v-for="product in productstate" :item="product" :key="product.id" @select-product="addCart(product)" id="card" :per-page="perPage" :current-page="currentPage" @event-update="setUpdate" @event-delete="setDelete" />
          <b-pagination v-model="currentPage" :total-rows="rows" :per-page="perPage" aria-controls="card" class="justify-content-center fixed-bottom"></b-pagination>
        </div>
      </div>
    </div>

    <div class="col mt-5 text-center">
      <h1>Edited Page</h1>
      <h3>Please be carefull</h3>
    </div>
  </div>
  <ButtomNav />
  <notifications animation-type="velocity" position="top left" class="mt-5 ml-5"/>
  <ModalAdd v-show="modalActive" :data="dataModal" @close-modal="toggleModal" @fire-event="handleEventModal" />
</div>
</template>

<script scoped>
import Navbar from '../components/Main/Navbar'
import ItemCardEdit from '../components/Main/ItemCardEdit'
import ModalAdd from '../components/Main/ModalAdd'
import ButtomNav from '../components/Main/ButtomNav'
import {
  mapActions,
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  name: 'Edit',
  components: {
    Navbar,
    ModalAdd,
    ButtomNav,
    ItemCardEdit
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
      username: '',
      password: '',
      perPage: 3,
      currentPage: 1
    }
  },
  methods: {
    ...mapActions(['getProduct', 'handleSearch', 'insertProduct', 'editProduct']),
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
    },
    handleEventModal () {
      this.dataModal.id ? this.updateProduct() : this.addProduct()
    },
    setUpdate (data) {
      this.modalActive = true
      this.dataModal.id = data.id
      this.dataModal.name = data.name
      this.dataModal.image = data.image
      this.dataModal.price = data.price
      this.dataModal.idCategory = data.idCategory
    },
    clearModal () {
      this.dataModal.id = null
      this.dataModal.name = ''
      this.dataModal.price = ''
      this.dataModal.image = null
      this.dataModal.idCategory = null
    },
    updateProduct () {
      const data = new FormData()
      data.append('name', this.dataModal.name)
      data.append('image', this.dataModal.image)
      data.append('price', this.dataModal.price)
      data.append('idCategory', this.dataModal.idCategory)
      const container = {
        id: this.dataModal.id,
        data: data
      }

      this.editProduct(container)
        .then(res => {
          this.clearModal()
          this.data.modalActive = false
          this.getProduct()
          this.$store.dispatch('notify', 'Update data success')
        })
        // .catch(() => {
        //   this.$store.dispatch('notify', 'Update data failed')
        // })
    },
    addProduct () {
      const data = new FormData()
      data.append('name', this.dataModal.name)
      data.append('image', this.dataModal.image)
      data.append('price', this.dataModal.price)
      data.append('idCategory', this.dataModal.idCategory)

      this.insertProduct(data)
        .then(res => {
          this.modalActive = false
          this.clearModal()
          this.getProduct()
          this.$store.dispatch('notify', 'Add data success')
        })
        .catch(() => {
          this.$store.dispatch('notify', 'Add data failed')
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
.articleParent {
  min-height: 720px;
}

.mainHide {
  display: none;
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
