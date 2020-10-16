<template>
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-body">
        <div class="container row">
          <h4 class="col-4">Checkout</h4>
          <h6 class="col-8 text-right mt-2">Receipt no: #010410919</h6>
          <h6 class="col-12 mt-1">Cashier : Pevita Pearce</h6>
          <div class="col-12 mt-3 mb-5 row">
            <h6 class="col-7">Coffee Latte 1x</h6>
            <h6 class="col-5 text-right p-0">Rp. 15.000</h6>
            <h6 class="col-7">Ppn 10%</h6>
            <h6 class="col-5 text-right p-0">Rp. 500</h6>
          </div>
          <h6 class="col-12 text-right"><span class="font-weight-bold">Total :</span> Rp. 15.500</h6>
          <h6 class="col-12">Payment: <span class="font-weight-bold">Cash</span></h6>
        </div>
      </div>
      <div class="modal-footer">
        <div class="container text-center font-weight-bold">
          <b-button block class="btn-color" data-dismiss="modal">Print</b-button>
          <span>Or</span>
          <b-button block class="btn-color1">Send Email</b-button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ModalCheckOut'
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
