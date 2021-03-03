<template>
  <div>
    <div class="headcont">
        Medicine Inventory
    </div>
     <div class="cont">
      <div class="cont1"></div>
      <div class="cont2">
          <h3>Register as an Employee or Admin</h3>
          <input type="text" v-model="name" placeholder="Name" name="name" class="input-css"><br>
          <input type="email" v-model="email" placeholder="Email-id" name="email" class="input-css"><br>
          <input type="password" v-model="password" placeholder="password" name="password" class="input-css"><br>
          <input type="password" v-model="confirmPassword" @keyup="mismatch" placeholder="Confirm Password" name="confirmpassword" class="input-css"><br>
          <ul type="none">
              <li>
                  <input type="radio" id="Admin" v-model="Adm" value="Admin" name="adm"><label for="Admin">Admin</label>
              </li>
              <li>
                  <input type="radio" id="Employee" v-model="Adm" value="Employee" name="adm"><label for="Employee">Employee</label>
              </li>
          </ul>
          <router-link to="/"><button v-on:click="onsubmit()">Register</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'register',
  data () {
    return {
      name: '',
      email: '',
      password: '',
      Adm: ''
    }
  },
  onsubmit () {
    const obj = {
      name: this.name,
      email: this.email,
      password: this.password
    }
    if (this.validate()) {
      axios.post('http://10.177.68.60:8080/register', obj).then((res) => {
        console.log(res)
        if (this.Adm === 'Admin') this.$router.push('')
        else this.$router.push('')
      })
    }
  }
}
</script>

<style>
.headcont{
    height: 50px;
    background-color: #c2d4dd;
    display: flex;
    padding: 10px 10px;
    justify-content:space-between;
}
body{
    margin:0;
    padding:0;
    background-color: #b0aac0;
}
.cont{
    display:flex;
}
.cont1{
    width: 40%;
    height: 80vh;
}
.cont2{
    width: 60%;
    height: 80vh;
    border: 2px solid black;
    margin-right: 5%;
    margin-top: 2%;
}
</style>
