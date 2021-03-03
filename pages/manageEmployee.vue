<template>
  <div>
    <div>
      <navbar />
    </div>
    <div class= 'btn'>
        <button>New Employee</button>
        <button>Update Employee</button>
        <button>Delete Employee</button>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/NavBar.vue'
export default {
  components: { Navbar }
}
</script>

<style>

.btn button{
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

.btn button:hover {background-color: #3e8e41}
.btn button:active {
  background-color: #3e8e41;
  box-shadow: 0 5px #666;
  transform: translateY(4px);
}
</style>
