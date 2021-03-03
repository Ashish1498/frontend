<template>
  <div>
    <div>
      <navbar />
    </div>
    <div class="btn-inventory">
      <button class="big-button" v-on:click="openForm()" @click="toggleAddItemBtn">Add an item</button>
      <add-med v-show="visible"/>
      <button class="big-button">Update Inventory</button>
      <button class="big-button">Delete an Item</button>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavBar.vue'
import AddMed from '@/components/AddMed.vue'
export default {
  components: { Navbar, AddMed },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    openForm () {
      document.getElementById('myForm').style.display = 'block'
    },
    closeForm () {
      document.getElementById('myForm').style.display = 'none'
    },
    toggleAddItemBtn () {
      if (this.visible === true) this.visible = false
      else this.visible = true
    }
  }
}
</script>

<style scoped>
.big-button {
  padding: 15px 25px;
  font-size: 24px;
  width: 100%;
  text-align: center;
  cursor: pointer;
  outline: none;
  color: #fff;
  background-color: rgb(13, 188, 194);
  border: none;
  border-radius: 15px;
  box-shadow: 0 9px #999;
  display: block;
  margin: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.btn_login button{
    font-size: 10px !important;
    width: 50% !important;
}

.btn_close button{
    font-size: 10px !important;
    width: 50% !important;

}

.big-button button:hover {
  background-color: #3e8e41;
}
.big-button button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

</style>
