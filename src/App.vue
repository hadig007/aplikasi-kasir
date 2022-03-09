<template>
  <div>
    <Sidebar/>
    <router-view></router-view>
  </div>
</template>

<script>
import Sidebar from './sidebar/SidebarApp.vue'

export default {
  components : {
    Sidebar
  }
}
</script>

<style scoped>
div{
  display: grid;
  grid-template-columns: 25% 75%;
}
</style>