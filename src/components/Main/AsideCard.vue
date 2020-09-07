<template>
  <div class="col-lg-4 bg-test AsideCard">
    <div class="col-12 text-center">
      <div class="col-lg-auto text-center">
        <div class="container mt-5">
            <div class="row mt-5" v-for="item in getCart" :key="item.id">
                <img :src="item.image" class="col-5">
                <div class="col-7">
                    <h3>{{item.name}}</h3>
                    <div class="row mt-5">
                        <div class="col-8 row">
                            <buttom class='buttonAside mx-auto col-3'>-</buttom>
                            <input class='buttonAside1 mx-auto ml-1 mr-1 col-3 text-center' type="number" name="count" value="1" disabled>
                            <buttom class='buttonAside mx-auto col-3'>+</buttom>
                        </div>
                        <h5 class="col-3 mt-2">{{item.price}}</h5>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Cart',
  data () {
    return {
    }
  },
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
