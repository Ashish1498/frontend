<template>
<div>
  <div id="mySidenav" class="sidenav">
  <!-- <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> -->
  <div class="list">
    <!-- <a href="#">Manage Inventory</a>
    <a href="#">Manage Employees</a>
    <a href="#">Manage Order</a> -->
    <router-link to="/manageInventory/">Manage Inventory</router-link>
    <router-link to="/manageEmployees/">Manage Employees</router-link>
    <router-link to="/manageOrder/">Manage Order</router-link>
  </div>
</div>
</div>
</template>

<script>

export default {
  name: 'SideBar2',
  data () {
    return {

    }
  },
  methods: {
    openNav () {
      document.getElementById('mySidenav').style.width = '250px'
    },
    closeNav () {
      document.getElementById('mySidenav').style.width = '0'
    }
  }
}
</script>

<style>
.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}
.sidenav a:hover {
  color: #1dc6cc;
}
#main {
  transition: margin-left .5s;
  padding: 20px;
}
</style>
