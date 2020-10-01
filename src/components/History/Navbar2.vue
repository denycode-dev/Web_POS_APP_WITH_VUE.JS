<template>
<div class="hello">
    <div class="container-fluid fixed-top">
        <div class="row">
            <!-- Navigation Bar Left -->
            <nav class="navbar navbar-light bg-white col-lg-12 col-sm-12 shadow-sm">
                <div class="col-1">
                    <div class="nav-item dropdown">
                        <a class="nav-link" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
                            <span class="navbar-toggler-icon bgrStrip"></span>
                        </a>
                        <div class="dropdown-menu font-reguler" aria-labelledby="navbarDropdownMenuLink">
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-user-friends"></i> Change Cashier
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-cog"></i> Setting
                            </a>
                            <a class="dropdown-item" href="#">
                                <i class="fas fa-book"></i> Guide
                            </a>
                            <router-link class="dropdown-item" to="/">
                                <i class="fa fa-sign-out-alt"></i> Log Out
                            </router-link>
                        </div>
                    </div>
                </div>
                <div class="col-10">
                    <h6 class="font-bold text-center mainText font-weight-bold">Food Items</h6>
                </div>
                <div class="col-1">
                    <a href="#" class="stretched-link search" data-toggle="modal" data-target="#searchModal">
                        <img src="../../assets/icons/search.svg" width="30" height="30" alt="" loading="lazy" />
                    </a>
                </div>
            </nav>
        </div>
    </div>
</div>
</template>

<script>

</script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #b5b5b5;
}

a:hover {
    color: #f2509c;
    font-weight: bold;
}

a span:hover {
    color: red;
    font-weight: bold;
}

.num {
    background-color: dodgerblue;
    padding: 2px 7px;
    color: white;
    border-radius: 500px;
    font-size: small;
}

.buttomNav {
    display: none;
}

@media (max-width: 1140px) {
    .sideBar {
        display: none;
    }
}

@media (max-width: 540px) {
    .search {
        display: none;
    }

    .navbarDropdownMenuLink {
        display: none !important;
    }

    a[data-toggle="dropdown"] {
        display: none !important;
    }

    .buttomNav {
        position: fixed;
        bottom: 0px;
    }

    @media (max-width: 360px) {
        .mainText {
            margin-right: 25%;
        }
    }
}
</style>
