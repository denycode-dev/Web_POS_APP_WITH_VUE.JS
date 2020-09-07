<template>
  <div>
      <Navbar2 />
      <div class="row mt-5">
        <!-- =============    Aside Bar   ============= -->
            <div class="col-lg-1">
                <div class="sideBarLeft">
                <button type="button" class="btn btn-white style-bottom mt-5">
                    <router-link to="/main">
                        <img src="../assets/icons/fork.svg" />
                    </router-link>
                </button>
                <button type="button" class="btn btn-white style-bottom mt-5">
                    <router-link to="/history">
                        <img src="../assets/icons/clipboard.svg" />
                    </router-link>
                </button>
                <button type="button" class="btn btn-white style-bottom mt-5">
                        <img src="../assets/icons/add.svg" />
                </button>
                <button type="button" class="btn btn-white style-bottom mt-5 mainHide" >
                    <router-link to="/edit">
                        <img src="../assets/icons/edit.svg" width="50" height="50" loading="lazy"/>
                    </router-link>
                </button>
                </div>
            </div>
        <!-- =============    Aside Bar   ============= -->
          <div class="col-lg-11 col-sm-12 bg-light">
            <div class="row mt-4 mx-auto container-fluid">
                <CardHistory  class="col-lg-4 leftCard shadow-lg" />
                <CardHistory  class="col-lg-4 centerCard shadow-lg" />
                <CardHistory  class="col-lg-4 rightCard shadow-lg" />
                <img src="../assets/img/Chart.jpg" class="col-lg-12 mt-5 shadow-lg">
                <Table :dataHistory="history" class='shadow-lg col-12'/>
                <ButtomNav />
            </div>
          </div>
      </div>
      <ModalAdd />
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import Navbar2 from '../components/History/Navbar2'
import CardHistory from '../components/History/CardHistory'
import ModalAdd from '../components/Main/ModalAdd'
import Table from '../components/History/Table'
import ButtomNav from '../components/Main/ButtomNav'

export default {
  name: 'History',
  components: {
    Navbar2,
    CardHistory,
    ModalAdd,
    Table,
    ButtomNav
  },
  data () {
    return {
      history: []
    }
  },
  mounted () {
    axios.get(`${process.env.VUE_APP_BASE_URL}/history`)
      .then((res) => {
        console.log(res.data.result)
        this.history = res.data.result
      })
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
