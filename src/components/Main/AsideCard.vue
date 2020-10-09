<template>
<div class="col-lg-4 bg-test">
  <div class="col-12 text-center ">
    <div class="col-lg-auto text-center">
      <div class="container mt-4 overflow-auto height-style AsideCard">
        <div class="row mt-2" v-for="(item,index) in getCart" :key="item.id">
          <img :src="item.image" class="col-5 image">
          <div class="col-7 text-left">
            <h4 class="">{{item.name}}</h4>
            <div class="row mt-4">
              <div class="col-7 text-center row p-0 ml-2">
                <b-button class="col-3 btn-success font-weight-bold btn-sm p-0" @click="plusMinPrice({type: '+', index})">+</b-button>
                  <h5 class="col-4 mt-2 border-yellow">{{item.count}}</h5>
                <b-button class="col-3 btn-success font-weight-bold btn-sm p-0" @click="plusMinPrice({type: '-', index})">-</b-button>
              </div>
              <p class="col-5 count font-weight-bold">Rp.{{item.price * item.count}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5 text-left">
      <h5>Total : <span class="text-right">Rp. 105.000</span></h5>
      <p>*Belum termasuk ppn</p>
      <b-button block class="rounded btn-checkout">Checkout</b-button>
      <b-button block class="rounded btn-cancel">Cancel</b-button>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters,
  mapMutations
} from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      value: 1

    }
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

.count {
  font-size: 18px;
  line-height: 26px;
  color: #000000;
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
