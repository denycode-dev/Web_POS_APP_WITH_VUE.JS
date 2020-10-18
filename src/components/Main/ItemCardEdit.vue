<template>
<div class="col mb-4">
    <div class="position-relative listening">
        <div class="filter"><span class="text-white font-weight-bold shadow">Edited mode<br>please be careful</span></div>
        <img :src="item.image" class="card-img-top rounded-top image shadow-lg" @click="$emit('select-product')" />
    </div>
    <div class="card-body">
        <h5 class="card-title">{{item.name}}</h5>
        <p class="card-text">Rp. {{item.price}}</p>
        <b-button class="mr-2 rounded-lg" variant="primary" @click="$emit('event-update', item)">
            <b-icon icon="pencil" variant="white"></b-icon> edit
        </b-button>
        <b-button class="rounded-lg" variant="danger" @click="$emit('event-delete', product)">
            <b-icon icon="trash" variant="white"></b-icon> delete
        </b-button>
    </div>
</div>
</template>

<script>
export default {
  name: 'ItemCardEdit',
  props: {
    item: {
      type: Object
    }
  },
  methods: {
    showModal () {
      this.$refs['my-modal'].show()
    },
    hideModal () {
      this.$refs['my-modal'].hide()
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
    background-color: rgb(0, 0, 0, 0.3);
    z-index: 1;
    position: absolute;
    /* background-image: url('../../assets/icons/tick.svg'); */
    /* background-repeat: no-repeat; */
    /* background-position-x: center; */
    /* background-position-y: center; */
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
