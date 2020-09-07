<template>
  <div class="col mb-4">
    <div class="position-relative listening">
        <!-- <div class="filter"></div> -->
        <img :src="item.image" class="card-img-top rounded-top image shadow-lg" @click="$emit('select-product')"/>
    </div>
    <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text">Rp. {{item.price}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemCard',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style scoped>
.listening {
  height: 200px;
}
.image {
  height: 100%;
  width: 100%;
  object-fit: cover;
  cursor: pointer;
}
.image:hover {
  transition: filter 0.3s ease-in;
  filter: brightness(50%);
}
.filter {
  height: 100%;
  width: 100%;
  background-color : rgb(0, 0, 0,0.5);
  z-index: 1;
  position: absolute;
  background-image: url('../../assets/icons/tick.svg');
  background-repeat: no-repeat;
  background-position-x: center;
  background-position-y: center;
}
@media (max-width: 1200px) {
.listening {
  height: 180px;
  }
}
@media (max-width: 720px) {
.listening {
   height: 250px;
  }
}
</style>
