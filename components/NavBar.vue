<template>
  <nav class='navbar'>
      <!-- <router-link to="/">Product</router-link> -->
      <router-link to="/viewInventoryData/">view Inventory Data</router-link>
      <form class="search-func">
        <input class="searchfunctionality" type="text" placeholder="Search" aria-label="Search" />
        <button size="lg" type="submit" outline="white">Search</button>
      </form>
      <router-link to="/Home">Logout</router-link>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      sliderPosition: 0,
      selectedElementWidth: 0,
      selectedIndex: 0,
      links: [
        {
          id: 1,
          text: 'View Inventory Data'
        },
        {
          id: 2,
          text: 'Logout'
        }
      ]
    }
  }
}
</script>

<style>
.navbar {
    /* margin: 10px; */
    margin-right: 15px;
    height: 50px;
    background-color: rgb(13, 188, 194);
    max-width: 100%;
    display: flex;
    justify-content: space-around;
}
.searchfunctionality {
  width: 400px;
  height: 30px;

}
</style>
