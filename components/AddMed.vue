<template>
  <div class="form-popup" id="myForm">
        <form action="/manageInventory" class="form-container">
        <div>
             <h2>Create Medicine</h2>
            <div class="flex space-evenly">

                <div>
                    <label for="categoryId"><b>category Id</b></label>
                    <input type="text" placeholder="Enter category Id" v-model="categoryId" required>
                </div>

                <div>
                    <label for="medicineId"><b>Medicine Id</b></label>
                    <input type="text" placeholder="medicineId" v-model="medicineId" required>
                </div>

            </div>

                <div class="flex space-evenly">
                <div>
                    <label for="medicineName"><b>Medicine Name</b></label>
                    <input type="text" placeholder="Medicine Name" v-model="medicineName" required>
                </div>

                <div>
                    <label for="costPerUnit"><b>cost Per Unit</b></label>
                    <input type="text" placeholder="Enter cost Per Unit" v-model="costPerUnit" required>
                </div>
                </div>

                <div class="flex space-evenly">
                <div>
                    <label for="dosage"><b>Dosage</b></label>
                    <input type="text" placeholder="Enter dosage" v-model="dosage" required>
                </div>

                <div>
                    <label for="mfdDate"><b>Manufacturing Date</b></label>
                    <input type="date" placeholder="mfdDate" v-model="mfdDate" required>
                </div>
                </div>

                <div class="flex space-evenly">
                <div>
                    <label for="expiryDate"><b>Expiry Date</b></label>
                    <input type="date" placeholder="Enter expiryDate" v-model="expiryDate" required>
                </div>

                <div>
                    <label for="formula"><b>Formula</b></label>
                    <input type="text" placeholder="Enter Formula" v-model="formula" required>
                </div>
                </div>

                <div class="flex space-evenly">
                <div>
                    <label for="isInStock"><b>isInStock</b></label>
                    <input type="text" placeholder="In stock?" v-model="isInStock" required>
                </div>

                <div>
                    <label for="manufacturer"><b>Manufacturer</b></label>
                    <input type="text" placeholder="Manufacturer?" v-model="manufacturer" required>
                </div>
                </div>

                <div class="flex space-evenly">
                <div>
                    <label for="quantity"><b>quantity</b></label>
                    <input type="text" placeholder="quantity" v-model="quantity" required>
                </div>

                <div>
                    <label for="totalQuantity"><b>Total Quantity</b></label>
                    <input type="text" placeholder="Total Quantity" v-model="totalQuantity" required>
                </div>
                </div>

                <div class="flex space-evenly">
                <div>
                    <label for="unit"><b>Unit</b></label>
                    <input type="text" placeholder="Unit" v-model="unit" required>
                </div>
                </div>

            <button type="submit" class="btn_login" @click="onSubmit">Submit</button>
            <!-- <button type="button" class="btn_cancel" v-on:click="closeForm()">Close</button> -->
        </div>
    </form>
    </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  methods: {
    onSubmit () {
      console.log('inside on submit')
      this.$store.dispatch('setMedicineObjAction', {
        categoryId: this.categoryId,
        medicineId: this.medicineId,
        medicineName: this.medicineName,
        costPerUnit: this.costPerUnit,
        dosage: this.dosage,
        mfdDate: this.mfdDate,
        expiryDate: this.expiryDate,
        formula: this.formula,
        isInStock: this.isInStock,
        manufacturer: this.manufacturer,
        quantity: this.quantity,
        totalQuantity: this.totalQuantity
      })
    }
  }

}
</script>

<style scoped>
/* The popup form - hidden by default */
.form-popup {
  border: 3px solid #f1f1f1;
  display: flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin: auto;
  width: 70%;
}
h2 {
    text-align: center;
}

.form-container {
    padding: 30px;
    width: 580px;
}

.flex {
    display: flex;
}

.space-evenly {
    justify-content: space-between;
}

label {
    margin-right: 10px;
    margin-top:20px;
}
button {
    margin-top: 10px;
    margin-left: 150px;
}

</style>
