<template>
  <div>
      <div class="cont3">
          <div>Medicine Inventory</div>
          <div>
              <router-link to ="/register"><button>Register</button></router-link></div>
      </div>
      <div class="cont4">
          <h2>Login Page</h2>
        <ul type="none" class="form4">
          <li><input type="text" placeholder="Username" v-model="username"></li>
          <li><input type="password" placeholder="Password" v-model="password"></li>
          <li><input type="password" placeholder="Confirm Password" v-model="cpassword"></li>
          <ul type="none">
              <li>
                  <input type="radio" id="Admin" v-model="Adm" value="Admin" name="adm"><label for="Admin">Admin</label>
              </li>
              <li>
                  <input type="radio" id="Employee" v-model="Adm" value="Employee" name="adm"><label for="Employee">Employee</label>
              </li>
          </ul>
          <button class="btn4" v-on:click="onsubmit()">Login</button>
        </ul>
       </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      username: '',
      password: '',
      cpassword: '',
      Adm: ''
    }
  },
  computed: {
    ...mapGetters(['getUsername', 'getPassword'])
  },
  methods: {
    validate () {
      if (this.password !== this.cpassword) {
        console.log('diff pass')
        return false
      } else if (this.password === this.cpassword) {
        console.log('same')
        return true
      }
    },
    onsubmit () {
      if (this.validate()) {
        this.$store.dispatch('login', {
          username: this.username,
          password: this.password
        })
      }
      if (this.Adm === 'Admin') this.$router.push('/admin')
      else this.$router.push('/employee')
      console.log(this.$store.getUsername)
      console.log(this.$store.getPassword)
    }
  }
}
</script>

<style>
.cont3{
    height: 50px;
    background-color: #c2d4dd;
    display: flex;
    padding: 10px 10px;
    justify-content:space-around;
    align-items: flex-end;
}
.cont4{
    height: 400px;
    width: 300px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    border: 1px solid yellow;
}
h2{
    text-align: center;
}
li{
    padding: 5px 5px;
}
</style>
