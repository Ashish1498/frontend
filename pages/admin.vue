<template>
    <div>
        <navbar/>
        <span style="font-size:30px;cursor:pointer" @click="toggleSideBar">&#9776; open</span>
        <sidebar v-show="ok"/>
    </div>
</template>

<script>
import navbar from '@/components/NavBar.vue'
import side from '@/components/mrx.vue'
export default {
  name: 'admin',
  components: {
    navbar: navbar,
    sidebar: side
  },
  data () {
    return {
      ok: false
    }
  },
  methods: {
    toggleSideBar () {
      if (this.ok === true) this.ok = false
      else this.ok = true
    }
  }
}
</script>

<style>

@media screen and (max-width: 600px) {
  .col-25, .col-75, input[type=submit] {
    width: 100%;
    margin-top: 0;
  }
}
</style>
