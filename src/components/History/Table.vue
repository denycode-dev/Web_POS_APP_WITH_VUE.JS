<template>
<div class="table-responsive">
  <table class="table table-striped">
    <thead>
      <tr>
        <th>RECENT ORDERS</th>
      </tr>
      <tr>
        <th scope="col">Invoice</th>
        <th scope="col">Cashier</th>
        <th scope="col">Date</th>
        <th scope="col">Order</th>
        <th scope="col">Amout</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in dataHistory" :key='item.invoice'>
        <td :invoice="item.invoice" scope='row'>{{item.invoice}}</td>
        <td :cashierId="item.cashierId">{{item.cashierId}}</td>
        <td :date="item.date">{{item.date}}</td>
        <td :orderOn="item.orderOn">{{item.orderOn}}</td>
        <td :amout="item.amout">{{item.amout | currency}}</td>
      </tr>
    </tbody>
  </table>
</div>
</template>

<script scoped>
export default {
  name: 'Table',
  props: [
    'dataHistory'
  ],
  methods: {

  }
}
</script>

<style>

</style>
