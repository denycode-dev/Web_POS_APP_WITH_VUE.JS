<template>
<div class="col-lg-4 bg-test">
  <div class="col-12 text-center ">
    <div class="col-lg-auto text-center">
      <div class="container mt-4 overflow-auto height-style AsideCard">
        <div class="row mt-2" v-for="item in getCart" :key="item.id">
          <img :src="item.image" class="col-5 image">
          <div class="col-7 text-left">
            <h4 class="">{{item.name}}</h4>
            <div class="row mt-4">
              <div class="col-7 row text-center border-success">
                <b-button class="col-lg-3 btn-success font-weight-bold rounded-lg">+</b-button>
                <b-input value="1" class="col-3 ml-2"></b-input>
                <b-button class="col-lg-3 ml-2 btn-success font-weight-bold rounded-lg">-</b-button>
              </div>
              <p class="col-5 count font-weight-bold">Rp.{{item.price * value}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-5">
      <b-button block variant="primary" class="rounded">Block Level Button</b-button>
      <b-button block variant="danger" class="rounded">Block Level Button</b-button>
    </div>
  </div>
</div>
</template>

<script>
import {
  mapGetters
} from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
      value: 1

    }
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
  max-height: 680px;
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
