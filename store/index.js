import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    medicines: [],
    medicineObj: {
      categoryId: '',
      costPerUnit: '',
      dosage: '',
      expiryDate: '',
      formula: '',
      isInStock: '',
      manufacturer: '',
      medicineId: '',
      medicineName: '',
      mfdDate: '',
      quantity: '',
      totalQuantity: '',
      unit: ''
    }
  },
  getters: {
    getMedicine (state) {
      return state.medicines
    },
    getMedicineObj (state) {
      return state.medicineObj
    }
  },
  mutations: {
    setMedicine (state, value) {
      state.medicines = value
    },
    setMedicineObj (state, value) {
      state.medicineObj = value
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
    },
    setMedicineObjAction ({ commit }, value) {
      commit('setMedicineObj', value)
      const axiosConfig = {
        baseURL: 'http://10.177.68.40:8080/',
        url: '/medicine/createMedicine',
        method: 'post',
        data: {
          categoryId: value.categoryId,
          medicineId: value.medicineId,
          medicineName: value.medicineName,
          costPerUnit: value.costPerUnit,
          dosage: value.dosage,
          mfdDate: value.mfdDate,
          expiryDate: value.expiryDate,
          formula: value.formula,
          isInStock: value.isInStock,
          manufacturer: value.manufacturer,
          quantity: value.quantity,
          totalQuantity: value.totalQuantity
        }
      }
      axios(axiosConfig)
        .then(e => console.log(e))
        .catch(e => console.log(e))
    }
  }
})
