<template>
<div class="modal" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel">
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
                <label for="formGroupExampleInput">Judul</label>
                <input type="text" v-model="name" id="formGroupExampleInput" class="form-control" placeholder="Example input placeholder">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">description</label>
                <input type="text" v-model="price" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">gambar</label>
               <input type="file" name="image" id="" @change="handleFile">
            </div>
            <div class="form-group">
                <label for="formGroupExampleInput2">kategori</label>
                <input type="text" v-model="idCategory" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder">
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
      type: Object
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
    .modal{
        display: block;
    }
</style>
