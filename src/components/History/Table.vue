<template>
<table class="table table-striped">
    <thead>
        <tr>
            <th>RECENT ORDERS</th>
            <th></th>
            <th></th>
            <th></th>
            <th>
                <div class="dropdown">
                    <a class="btn btn-secondary dropdown-toggle rounded-pill" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Date
                    </a>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a class="dropdown-item" href="#">Today</a>
                        <a class="dropdown-item" href="#">yesterday</a>
                        <a class="dropdown-item" href="#">a week</a>
                        <a class="dropdown-item" href="#">this month</a>
                        <a class="dropdown-item" href="#">this year</a>
                    </div>
                </div>
            </th>
        </tr>
        <tr>
            <th scope="col ">Invoice</th>
            <th scope="col ">Cashier</th>
            <th scope="col ">Date</th>
            <th scope="col ">Order</th>
            <th scope="col ">Amout</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="item in dataHistory" :key='item.invoice' class="font-weight-bold">
            <td :invoice="item.invoice">{{item.invoice}}</td>
            <td :cashierId="item.cashierId">{{item.cashierId}}</td>
            <td :date="item.date">{{item.date}}</td>
            <td :orderOn="item.orderOn">{{item.orderOn}}</td>
            <td :amout="item.amout">{{item.amout}}</td>
        </tr>
    </tbody>
</table>
</template>

<script scoped>
export default {
  name: 'Table',
  props: ['dataHistory']
}
</script>

<style>

</style>
