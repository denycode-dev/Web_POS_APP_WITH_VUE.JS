<template>
<div class="hello">
  <div class="container-fluid fixed-top">
    <div class="row">
      <!-- Navigation Bar Left -->
      <nav class="navbar navbar-light bg-white col-lg-8 col-sm-12 shadow-sm">
        <div class="col-lg-1">
          <div class="nav-item dropdown">
            <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
              <span class="navbar-toggler-icon bgrStrip"></span>
            </a>
            <div class="dropdown-menu font-reguler" aria-labelledby="navbarDropdownMenuLink">
              <a class="dropdown-item" href="#">
                <i class="fas fa-user-friends"></i> Change Cashier
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-cog"></i> Setting
              </a>
              <a class="dropdown-item" href="#">
                <i class="fas fa-book"></i> Guide
              </a>
              <a class="dropdown-item logOut" @click="LogOut">
                <i class="fa fa-sign-out-alt"></i> Log Out
              </a>
            </div>
          </div>
        </div>
        <div class="col-lg-7">
          <h6 class="font-bold text-center mainText font-weight-bold">Food Items</h6>
        </div>
        <div class="col-lg-3">
          <div class="input-group">
            <input type="search" class="form-control" placeholder="search..." v-on:keyup.enter="setSearch">
            <div class="input-group-append">
              <b-form-select @change="setSort">
                <b-form-select-option value="name" >Name</b-form-select-option>
                <b-form-select-option value="price" >Price</b-form-select-option>
              </b-form-select>
            </div>
          </div>
        </div>
      </nav>
      <!-- Navigation Bar Right -->
      <nav class="navbar navbar-light bg-white col-lg-4 shadow-sm border-left sideBar">
        <h6 class="text-center font-bold col-12">
          Chart
          <b-badge variant="primary" class="rounded-pill">{{countCart}}</b-badge>
        </h6>
      </nav>
    </div>
  </div>
  <!-- Navigation Bar End -->
  <!-- Just an image -->
  <nav class="navbar navbar-light bg-light buttomNav">
    <a class="navbar-brand" href="#">
      <img src="/docs/4.5/assets/brand/bootstrap-solid.svg" width="30" height="30" alt="" loading="lazy">
    </a>
  </nav>
</div>
</template>

<script>
import {
  mapActions,
  mapGetters
} from 'vuex'
export default {
  name: 'Navbar',
  // props: {
  //   setSort: {
  //     type: Function
  //   }
  // },
  data () {
    return {}
  },
  methods: {
    ...mapActions(['getProduct', 'handleSearch']),
    setSearch (e) {
      console.log(e)
      this.handleSearch(e.target.value)
    },
    setSort (e) {
      console.log(e.target.value)
      const url = `sort/asc/${e.target.value}`
      this.getProduct(url)
    },
    LogOut () {
      localStorage.removeItem('token')
    }
  },
  computed: {
    ...mapGetters({
      productstate: 'getProduct',
      countCart: 'countCart'
    })
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #b5b5b5;
}

a:hover {
  color: #f2509c;
  font-weight: bold;
}

a span:hover {
  color: red;
  font-weight: bold;
}

.num {
  background-color: dodgerblue;
  padding: 2px 7px;
  color: white;
  border-radius: 500px;
  font-size: small;
}

.buttomNav {
  display: none;
}

@media (max-width: 1000px) {
  .sideBar {
    display: none;
  }
}

@media (max-width: 540px) {
  .search {
    display: none;
  }

  .navbarDropdownMenuLink {
    display: none !important;
  }

  a[data-toggle="dropdown"] {
    display: none !important;
  }

  .buttomNav {
    position: fixed;
    bottom: 0px;
  }

  @media (max-width: 360px) {
    .mainText {
      margin-right: 25%;
    }
  }
}
</style>
