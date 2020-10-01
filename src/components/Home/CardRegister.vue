<template>
    <div class="kotak_login shadow-lg border-black bg-white w-50 h-75">
        <form class="container">
            <div class="form-group text-left">
                <form>
                <div class="form-group">
                    <label for="exampleInputEmail1" class="font-weight-bold mb-3">Select Profile Photo</label>
                    <input type="file" class="form-control-file" id="exampleFormControlFile1">
                </div>
                </form>
            </div>
            <div class="form-group text-left">
                <label for="exampleInputEmail1" class="font-weight-bold mb-3">Full Name</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted font-weight-light">Please enter the name according to the ID card name data registered with the management</small>
            </div>
            <div class="form-group text-left">
                <label for="exampleInputEmail1" class="font-weight-bold mb-3">Email</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="form-group text-left">
                <label for="exampleInputEmail1" class="font-weight-bold mb-3">Whatsapp Number</label>
                <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            </div>
            <div class="form-group text-left">
                <label for="exampleInputEmail1" class="font-weight-bold mb-3">Your Division</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                <small id="emailHelp" class="form-text text-muted font-weight-light">enter your position such as cashier, head of shop, or managerial</small>
            </div>
            <div class="form-group text-left">
                <label for="exampleInputPassword1" class="font-weight-bold mb-3">Password</label>
                <input type="password" class="form-control " id="exampleInputPassword1">
            </div>
            <router-link to='/main' type="button" class="btn btn-style btn-lg btn-block mt-5 text-white">REGISTER</router-link>
            <div class="text-center mt-4">
                <router-link class="font-weight-light text-reset text-muted" to="/">Back to Login</router-link>
            </div>
        </form>
    </div>

</template>

<script>
export default {

}
</script>

<style scoped>
.kotak_login{
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
</style>
