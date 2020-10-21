<template>
<div class="col-lg-4 bg-test">
  <div class="col-12 text-center ">
    <div v-show="Cart">
      <div class="col-lg-auto text-center">
        <div class="container mt-4 overflow-auto height-style AsideCard">
          <div class="row mt-2" v-for="(item,index) in getCart" :key="item.id">
            <img :src="item.image" class="col-5 image">
            <div class="col-7 text-left">
              <h4 class="">{{item.name}}</h4>
              <div class="row mt-4">
                <div class="col-5 text-center row p-0 ml-2">
                  <b-button class="col-3 btn-success font-weight-bold btn-sm h-75" @click="plusMinPrice({type: '+', index})">+</b-button>
                  <p class="ml-2 mr-2 font-weight-bold">{{item.count}}</p>
                  <b-button class="col-3 btn-success font-weight-bold btn-sm h-75" @click="plusMinPrice({type: '-', index})">-</b-button>
                </div>
                <p class="col-7 font-weight-bold">{{item.price * item.count | currency}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-5 text-left">
        <h5>Total : <span class="text-right">Rp. 150.000</span></h5>
        <p>*Belum termasuk ppn</p>
        <b-button block class="rounded btn-checkout" data-toggle="modal" data-target="#exampleModal">Checkout</b-button>
        <b-button block class="rounded btn-cancel">Cancel</b-button>
      </div>
    </div>
    <!-- chart kosong -->
    <div v-show="egptyCart">
      <img src="../../assets/img/food-and-restaurant.png" alt="egpy chart">
      <h2>Your cart is empty</h2>
      <p>Please add some items from the menu</p>
    </div>

  </div>
  <ModalCheckOut />
</div>
</template>

<script>
import ModalCheckOut from '../Main/ModalCheckOut'
import {
  mapGetters,
  mapMutations
} from 'vuex'

export default {
  name: 'Cart',
  props: {
    egptyCart: {
      type: Boolean
    },
    Cart: {
      type: Boolean
    }
  },
  data () {
    return {
      value: 1
    }
  },
  components: {
    ModalCheckOut
  },
  methods: {
    ...mapMutations(['plusMinPrice'])
  },
  // methods: {
  //   countPrice () {
  //     if (this.item.id === id) {
  //       this.value * this.item.price
  //     }
  //   }
  // },
  computed: {
    ...mapGetters(['getCart'])
  }
}
</script>

<style scoped>
.btn-checkout {
  background-color: #57CAD5;
}

.btn-cancel {
  background-color: #F24F8A;
}

.buttonAside1 {
  margin: 0;
  color: #82DE3A;
  border: solid #82DE3A 1px;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 2px;
  padding-top: 2px;
}

.height-style {
  min-height: 480px;
  max-height: 480px;
}

.buttonAside {
  margin: 0;
  color: #82DE3A;
  background: rgba(130, 222, 58, 0.2);
  border: solid #82DE3A 1px;
  padding-left: 6px;
  padding-right: 6px;
  padding-bottom: 2px;
  padding-top: 2px;
}

.asideMargin {
  margin-top: 250px;
  margin-bottom: 0;
}

.AsideCard {
  height: 100%;
}

.AsideCard::-webkit-scrollbar {
  display: none;
}

.image {
  height: 130px;
  object-fit: cover;
  border-radius: 20px;
}

@media (max-width: 540px) {
  .AsideCard {
    display: none;
  }
}

@media (max-width: 960px) {
  .AsideCard {
    display: none;
  }
}
</style>
