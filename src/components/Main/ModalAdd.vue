<template>
<div class="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" @click="$emit('close-modal')" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="formGroupExampleInput">Name</label>
            <input type="text" v-model="data.name" id="formGroupExampleInput" class="form-control" placeholder="Product Name">
          </div>
          <div class="form-group">
            <!-- <label for="formGroupExampleInput2">image</label> -->
            <input type="file" name="image" id="" @change="handleFile">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">Price</label>
            <input type="number" v-model="data.price" class="form-control" id="formGroupExampleInput2" placeholder="Product Price">
          </div>
          <div class="form-group">
            <label for="formGroupExampleInput2">kategori</label>
            <b-form-select v-model="data.idCategory" :options="options" class="mb-3">
              <!-- This slot appears above the options from 'options' prop -->
              <template>
                <b-form-select-option :value="null" disabled>-- Please select Category --</b-form-select-option>
              </template>
              <b-form-select-option value=1>Appetizer</b-form-select-option>
              <b-form-select-option value=2>Main Course</b-form-select-option>
              <b-form-select-option value=3>Dessert</b-form-select-option>
              <b-form-select-option value=4>Beverage</b-form-select-option>
              <b-form-select-option value=5>Snack</b-form-select-option>
              <b-form-select-option value=6>Recommended food</b-form-select-option>
            </b-form-select>
            <!-- <input type="text" v-model="data.idCategory" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"> -->
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="$emit('close-modal')">Close</button>
        <button type="button" class="btn btn-primary" @click="$emit('fire-event')">{{data.id ? 'Update': 'Add'}}</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    data: {
      type: Object,
      return: {
        selected: null
      }
    },
    closeModal: {
      type: Function
    }
  },
  methods: {
    handleFile (e) {
      this.data.image = e.target.files[0]
    }
  }
}
</script>

<style scoped>
.modal {
  display: block;
}
</style>
