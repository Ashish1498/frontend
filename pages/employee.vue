<template>
<div>
<div>
    <navbar fixed="top"/>
</div>
    <div class="container">
    <form action=" ">
        <div class="row">
        <div class="col-25">
            <label for="mid">Medicine Id</label>
        </div>
        <div class="col-75">
            <input type="text" id="mid" name="medicine id" placeholder="Medicine Id.." required>
        </div>
        </div>
        <div class="row">
        <div class="col-25">
            <label for="mname">Medicine Name</label>
        </div>
        <div class="col-75">
            <input type="text" id="mname" name="medicine name" placeholder="Medicine Name.." required>
        </div>
        </div>
        <div class="row">
        <div class="col-25">
            <label for="subject">Reason</label>
        </div>
        <div class="col-75">
            <textarea id="reason" name="reason" placeholder="Write your reason.." style="height:200px"></textarea>
        </div>
        </div>
        <div class="row">
        <input id="submit" type="submit" value="Submit">
        </div>
    </form>
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
input[type=submit] {
  background-color: #06c4ca;
  color: white;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  float: right;
}
.container {
  border-radius: 30px;
  background-color: #f2f2f2;
  padding: 20px;
  align-content: center;
}
/* Floating column for labels: 25% width */
.col-25 {
  float: left;
  width: 25%;
  margin-top: 6px;
}

/* Floating column for inputs: 75% width */
.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}
/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}

</style>
