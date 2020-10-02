<template>
<div class="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Add Item</h5>
        <button type="button" class="close" @click="$emit('close-modal')" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group row">
            <label class="col-4 mt-1 font-weight-bold">Name</label>
            <input type="text" v-model="data.name" id="formGroupExampleInput" class="form-control col-8 ml-n5" placeholder="Product Name">
          </div>
          <div class="form-group row">
            <label class="col-4 mt-1 font-weight-bold">image</label>
            <input type="file" name="image" id="" @change="handleFile" class="col-8 ml-n5">
          </div>
          <div class="form-group row">
            <label class="col-4 mt-1 font-weight-bold">Price</label>
            <input type="number" v-model="data.price" class="form-control col-8 ml-n5" id="formGroupExampleInput2" placeholder="Product Price">
          </div>
          <div class="form-group row">
            <label class="col-4 mt-1 font-weight-bold">kategori</label>
            <b-form-select v-model="data.idCategory" class="col-8 ml-n5">
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
        <button type="button" class="btn btn-lg btn-cancel" @click="$emit('close-modal')">Cancel</button>
        <button type="button" class="btn btn-lg btn-add" @click="$emit('fire-event')">{{data.id ? 'Update': 'Add'}}</button>
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

.btn-cancel {
  background: #F24F8A;
  border-radius: 10px;
  color: white;
}

.btn-add {
  background: #57CAD5;
  border-radius: 10px;
  color: white;
}
</style>
