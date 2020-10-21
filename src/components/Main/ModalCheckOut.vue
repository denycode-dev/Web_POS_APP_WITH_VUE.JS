<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <div class="container row">
          <h4 class="col-4">Checkout</h4>
          <div class="col-12 mt-3 row" v-for="(item) in getCart" :key="item.id">
            <h6 class="col-9" >{{item.name}} <span class="font-weight-bold">{{item.count}}x</span></h6>
            <h6 class="col-3 p-0">{{item.price * item.count | currency}}</h6>
          </div>
          <div class="col-12 row mt-3 border-bottom pb-2">
          <h6 class="col-9">Ppn 10%</h6>
          <h6 class="col-3 p-0">Rp. 50000</h6>
          </div>
          <h6 class="col-12 text-right mt-3 ml-n5"><span class="font-weight-bold">Total :</span> {{getAmout}}</h6>
          <h6 class="col-12">Payment: <span class="font-weight-bold">Cash</span></h6>
        </div>
      </div>
        <div class="container text-center font-weight-bold pb-4">
          <b-button block class="btn-color" data-dismiss="modal">Print</b-button>
          <span>Or</span>
          <b-button block class="btn-color1">Send Email</b-button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'

export default {
  name: 'ModalCheckOut',
  computed: {
    ...mapGetters(['getCart']),
    getAmout () {
      // const data = this.item.price * this.item.count
      const total = (function (val, element) {
        return val + element.price
      }, 0)
      return total
    }
  }
}
</script>

<style>
.btn-color {
  background: #F24F8A;
  border-radius: 10px;
}

.btn-color1 {
  background: #57CAD5;
  border-radius: 10px;
}
</style>
