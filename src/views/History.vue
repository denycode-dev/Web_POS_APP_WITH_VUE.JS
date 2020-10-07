<template>
<div>
  <Navbar2 />
  <div class="row mt-5">
    <!-- =============    Aside Bar   ============= -->
    <div class="col-lg-1 sideBarLeft text-center pr-0 pl-0">
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
    </div>

    <div class="col-lg-11 col-sm-12 bg-light">
      <div class="row mt-4 mx-auto container-fluid">
        <div class="cardH m-auto leftCard col-lg-3 leftCard shadow-lg">
          <div>
            <div class="card-body">
              <p class="card-text">today's Income</p>
              <h5 class="card-title font-weight-bold">{{getInvoiceToDay | currency}}</h5>
              <p class="card-text">{{getPercent}}% yesterday</p>
            </div>
          </div>
        </div>
        <div class="cardH m-auto col-lg-3 centerCard shadow-lg">
          <div>
            <div class="card-body">
              <p class="card-text">Orders</p>
              <h5 class="card-title font-weight-bold">ghjj</h5>
              <p class="card-text">+5% Last Week</p>
            </div>
          </div>
        </div>
        <div class="cardH m-auto col-lg-3 rightCard shadow-lg">
          <div>
            <div class="card-body">
              <p class="card-text">This Year’s Income</p>
              <h5 class="card-title font-weight-bold">{{getOrderYears | currency}}</h5>
              <p class="card-text">{{getPercentYear}}% Last Year</p>
            </div>
          </div>
        </div>
        <div class="w-100 mt-5 shadow rounded-lg">
          <h3 class="mt-3 ml-3">Revenue</h3>
          <Chart class="w-100" />
        </div>
        <Table :dataHistory="history" :fields="fields" class='shadow-lg col-12 mt-5 w-100' />
        <ButtomNav />
      </div>
    </div>
  </div>
  <ModalAdd />
</div>
</template>

<script>
import axios from 'axios'
import Navbar2 from '../components/History/Navbar2'
import ModalAdd from '../components/Main/ModalAdd'
import Table from '../components/History/Table'
import ButtomNav from '../components/Main/ButtomNav'
import Chart from '../components/History/Chart'
import {
  mapActions, mapGetters
} from 'vuex'

export default {
  name: 'History',
  components: {
    Navbar2,
    ModalAdd,
    Table,
    ButtomNav,
    Chart
  },
  data () {
    return {
      history: [],
      fields: [{
        key: 'date',
        label: 'Date',
        sortable: true
      }]
    }
  },
  mounted () {
    axios.get(`${process.env.VUE_APP_BASE_URL}/history`)
      .then((res) => {
        console.log(res.data.result)
        this.history = res.data.result
      })
    this.getAllInvoice()
  },
  methods: {
    ...mapActions(['getAllInvoice']),
    converseDate (data) {
      const date = new Date(data)
      const day = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
      return day
    },
    converseDateYear (data) {
      const date = new Date(data)
      const day = `${date.getFullYear()}`
      return day
    }
  },
  computed: {
    ...mapGetters({
      invoiceState: 'getAllInvoice'
    }),
    invoice () {
      return this.$store.getters.getAllInvoice
    },
    getInvoiceYesterday () {
      const date = new Date()
      const day = `${date.getDate() - 1}-${date.getMonth()}-${date.getFullYear()}`
      const InvoiceToday = this.history.filter(item => {
        return this.converseDate(item.date) === day
      })
      const totalYesterday = InvoiceToday.reduce(function (val, element) {
        return val + element.amout
      }, 0)
      return totalYesterday
    },
    getInvoiceToDay () {
      const date = new Date()
      const day = `${date.getDate()}-${date.getMonth()}-${date.getFullYear()}`
      console.log(day)
      const InvoiceToday = this.history.filter(item => {
        return this.converseDate(item.date) === day
      })
      const totalToDay = InvoiceToday.reduce(function (val, element) {
        return val + element.amout
      }, 0)
      return totalToDay
    },
    getPercent () {
      const percent = (this.getInvoiceToDay / this.getInvoiceYesterday) * 100
      return Math.ceil(percent)
    },
    getOrderLastYears () {
      const date = new Date()
      const day = `${date.getFullYear() - 1}`

      const OrderToday = this.history.filter(item => {
        return this.converseDateYear(item.date) === day
      })
      const totalYears = OrderToday.reduce(function (val, element) {
        return val + element.amout
      }, 0)
      return totalYears
    },
    getOrderYears () {
      const date = new Date()
      const day = `${date.getFullYear()}`

      const OrderToday = this.history.filter(item => {
        return this.converseDateYear(item.date) === day
      })
      const totalYears = OrderToday.reduce(function (val, element) {
        return val + element.amout
      }, 0)
      return totalYears
    },
    getPercentYear () {
      const percent = (this.getOrderYears / this.getOrderLastYears) * 100
      return Math.ceil(percent)
    }
  }
}
</script>

<style scoped>
.centerCard {
  background: linear-gradient(278.29deg, #29DFFF 30.05%, rgba(41, 223, 255, 0) 133.19%);
  filter: drop-shadow(10px 15px 10px rgba(41, 223, 255, 0.25));
  border-radius: 10px;
}

.leftCard {
  background: linear-gradient(278.29deg, #FBB2B4 30.05%, rgba(255, 143, 178, 0) 133.19%);
  filter: drop-shadow(10px 15px 10px rgba(255, 143, 178, 0.25));
  border-radius: 10px;
}

.rightCard {
  background: linear-gradient(278.29deg, #AB84C8 30.05%, rgba(241, 201, 236, 0) 133.19%);
  filter: drop-shadow(10px 15px 10px rgba(241, 201, 236, 0.25));
  border-radius: 10px;
}

@media (max-width: 1000px) {
  .leftCard {
    margin-top: 10px;
    margin-right: 10px;
  }

  .rightCard {
    margin-top: 10px;
    margin-right: 10px;
  }
}
</style>
