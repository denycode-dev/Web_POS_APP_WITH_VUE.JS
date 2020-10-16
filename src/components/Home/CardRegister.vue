<template>
<div class="kotak_login shadow-lg border-black bg-white">
  <form class="container">
    <div class="form-group text-left">
      <form>
        <div class="form-group">
          <label class="font-weight-bold mb-3">
            Select Profile Photo
          </label>
          <input type="file" name="fotoProfile" id="" @change="handleFotoProfile" class="form-control-file">
        </div>
      </form>
    </div>
    <div class="form-group text-left">
      <label class="font-weight-bold mb-3">
        Full Name
      </label>
      <input type="text" v-model="data.name" class="form-control">
      <small id="emailHelp" class="form-text text-muted font-weight-light">
        Please enter the name according to the ID card name data registered with the management
      </small>
    </div>
    <div class="form-group text-left">
      <label class="font-weight-bold mb-3">
        Email
      </label>
      <input type="email" v-model="data.email" class="form-control" aria-describedby="emailHelp">
    </div>
    <div class="form-group text-left">
      <label class="font-weight-bold mb-3">
        Whatsapp Number
      </label>
      <input type="number" v-model="data.tlpNumber" class="form-control">
    </div>
    <div class="form-group text-left">
      <label class="font-weight-bold mb-3">
        Your Division
      </label>
      <b-form-select v-model="data.roleId">
        <!-- This slot appears above the options from 'options' prop -->
        <template>
          <b-form-select-option :value="null" disabled>-- Please select your division --</b-form-select-option>
        </template>
        <b-form-select-option value=1>Cashier</b-form-select-option>
        <b-form-select-option value=2>SuperVisor</b-form-select-option>
        <b-form-select-option value=2>Management</b-form-select-option>
        <b-form-select-option value=3>User</b-form-select-option>
      </b-form-select>
      <small class="form-text text-muted font-weight-light">
        enter your position such as cashier, head of shop, or managerial
      </small>
    </div>
    <div class="form-group text-left">
      <label class="font-weight-bold mb-3">
        Password
      </label>
      <input type="password" v-model="data.password" class="form-control">
    </div>
    <b-button type="button" class="btn btn-style btn-lg btn-block mt-5 text-white" @click="$emit('fire-event')">
      REGISTER
    </b-button>
    <div class="text-center mt-4">
      <router-link class="font-weight-light text-reset text-muted" to="/">
        Back to Login
      </router-link>
    </div>
  </form>
</div>
</template>

<script>
export default {
  name: 'cardregister',
  props: {
    data: {
      type: Object,
      return: {
        selected: null
      }
    }
  },
  methods: {
    handleFotoProfile (e) {
      this.data.image = e.target.files[0]
    }
  }
}
</script>

<style scoped>
.kotak_login {
  width: 50%;
  margin: 5% auto;
  padding: 30px 20px;
}

.btn-style {
  background: #57CAD5;
}

@media (max-width: 520px) {
  .kotak_login {
    width: 100%;
  }

  .text-muted {
    display: none;
  }
}
@media (max-width: 720px) {
  .kotak_login {
    width: 80%;
  }

  .text-muted {
    display: none;
  }
}
</style>
