<template>
<div class="cardH m-auto">
  <div>
    <div class="card-body">
      <p class="card-text">today's Income</p>
      <h5 class="card-title font-weight-bold">{{getInvoiceToDay}}</h5>
      <p class="card-text">+2% yesterday</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'cardHistory',
  props: ['totalInvoice']
}
</script>

<style scoped>
.cardH {
  max-width: 28rem;
}
</style>
