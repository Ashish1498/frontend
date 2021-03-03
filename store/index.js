import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    medicines: []
  },
  getters: {
    getMedicine (state) {
      return state.medicines
    }
  },
  mutations: {
    setMedicine (state, value) {
      state.medicines = value
    }
  },
  actions: {
    setMedicineAction ({ commit }, value) {
      commit('setMedicine', value)
      const axiosConfig = {
        baseURL: 'http://10.177.68.40:8080/',
        url: '/medicine?medicineName=Medomol',
        method: 'get'
      }
      axios(axiosConfig)
        .then(e => {
          commit('setMedicine', e.data)
        })
        .catch(e => console.log('Nooooo'))
    }
  }
})
