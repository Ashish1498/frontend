<template>
  <div>
    <div class="cont3">
      <h1>Medicine Inventory</h1>
    </div>
    <div class="cont4">
        <ul id="example-1" type="none">
          <p>{{ getMedicine }}</p>
        </ul>
    </div>
   </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {}
  },
  computed: {
    ...mapGetters(['getMedicine'])
  },
  created () {
    this.$store.dispatch('setMedicineAction')
  }
}
</script>

<style>
.cont3 {
  height: 70px;
  background-color: #c2d4dd;
  display: flex;
  padding: 10px 10px;
  justify-content: center;
}
.cont4{
    display: flex;
    justify-content: center;
}
.card{
    height: 10vh;
    width: 70vw;
    border: 1px solid grey;
    margin-top: 5px;
    margin-bottom: 5px;
    text-align: center;
}
</style>
