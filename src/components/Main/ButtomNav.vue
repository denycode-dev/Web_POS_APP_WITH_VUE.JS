<template>
<nav class="navbar navbar-light bg-light fixed-bottom navigation">
    <div class="container">
        <a data-toggle="modal" data-target="#addModal">
            <img src="../../assets/icons/add.svg" width="30" height="30" loading="lazy">
        </a>
        <router-link to='/history'><img src="../../assets/icons/clipboard.svg" width="30" height="30" alt="" loading="lazy"></router-link>
        <router-link to='/main'>
            <img src="../../assets/icons/fork.svg" width="30" height="30" loading="lazy">
        </router-link>
        <router-link to='/main'>
            <img src="../../assets/icons/shopping-cart.svg" width="30" height="30" loading="lazy">
            <b-badge variant="light">4</b-badge>
        </router-link>
    </div>
</nav>
</template>

<script>
export default {

}
</script>

<style>
.num {
  background-color: dodgerblue;
  padding: 2px;
  color: white;
  border-radius: 20px;
  font-size: small;
  margin-top: 10px;
}
@media (min-width: 1000px) {
    .navigation {
        display: none;
    }
}
</style>
