// utkarsh
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jwtToken: '',
    username: '',
    password: '',
    cpassword: ''
  },
  getters: {
    getJwtToken (state) {
      return state.jwtToken
    },
    getUsername (state) {
      return state.username
    },
    getPassword (state) {
      return state.password
    },
    getCPassword (state) {
      return state.cpassword
    }
  },
  mutations: {
    setToken (state, value) {
      state.jwtToken = value
    },
    setUsername (state, value) {
      state.username = value
    },
    setPassword (state, value) {
      state.password = value
    },
    setCPassword (state, value) {
      state.cpassword = value
    }
  },
  actions: {
    setJwtTokenAction ({ commit }, obj) {
      commit('setJwtToken', obj.jwtToken)
      const axiosConfig = {
        url: '/login',
        method: 'Post',
        BASE_URL: 'http://10.177.68.30:8080/',
        data: {
          username: this.state.username,
          password: this.state.password
        }
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e)
        })
        .catch((e) => console.log(e))
    },
    login ({ commit }, obj) {
      const axiosConfig = {
        url: '/login',
        method: 'Post',
        baseURL: 'http://10.177.68.30:8080/',
        data: {
          username: obj.username,
          password: obj.password
        }
      }
      axios(axiosConfig)
        .then((e) => {
          console.log(e)
          const jwt = e.data.jwt
          commit('setJwtToken', obj.jwtToken)
          localStorage.setItem('JWT_TOKEN', jwt)
        })
        .catch((e) => console.log('No accesss'))
    }
  }
})

// meghna

// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios from 'axios'
// Vue.use(Vuex)

// export default new Vuex.Store({
//   state: {
//     medicines: [],
//     medicineObj: {
//       categoryId: '',
//       costPerUnit: '',
//       dosage: '',
//       expiryDate: '',
//       formula: '',
//       isInStock: '',
//       manufacturer: '',
//       medicineId: '',
//       medicineName: '',
//       mfdDate: '',
//       quantity: '',
//       totalQuantity: '',
//       unit: ''
//     }
//   },
//   getters: {
//     getMedicine (state) {
//       return state.medicines
//     },
//     getMedicineObj (state) {
//       return state.medicineObj
//     }
//   },
//   mutations: {
//     setMedicine (state, value) {
//       state.medicines = value
//     },
//     setMedicineObj (state, value) {
//       state.medicineObj = value
//     }
//   },
//   actions: {
//     setMedicineAction ({ commit }, value) {
//       commit('setMedicine', value)
//       const axiosConfig = {
//         baseURL: 'http://10.177.68.40:8080/',
//         url: '/medicine?medicineName=Medomol',
//         method: 'get'
//       }
//       axios(axiosConfig)
//         .then(e => {
//           commit('setMedicine', e.data)
//         })
//         .catch(e => console.log('Nooooo'))
//     },
//     setMedicineObjAction ({ commit }, value) {
//       commit('setMedicineObj', value)
//       const axiosConfig = {
//         baseURL: 'http://10.177.68.40:8080/',
//         url: '/medicine/createMedicine',
//         method: 'post',
//         data: {
//           categoryId: value.categoryId,
//           medicineId: value.medicineId,
//           medicineName: value.medicineName,
//           costPerUnit: value.costPerUnit,
//           dosage: value.dosage,
//           mfdDate: value.mfdDate,
//           expiryDate: value.expiryDate,
//           formula: value.formula,
//           isInStock: value.isInStock,
//           manufacturer: value.manufacturer,
//           quantity: value.quantity,
//           totalQuantity: value.totalQuantity
//         }
//       }
//       axios(axiosConfig)
//         .then(e => console.log(e))
//         .catch(e => console.log(e))
//     }
//   }
// })
