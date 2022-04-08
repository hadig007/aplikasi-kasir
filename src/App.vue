<template>
  <div>
    <Sidebar class="sidebar"/>
    <router-view class="main"></router-view>
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
/* div{
  display: grid;
  grid-template-columns: 25% 75%;
} */
div{
  display: flex;
  flex-direction: row;
}
.sidebar{
  flex-basis: 20%;
}
.main{
  flex-basis: 80%;
  max-height: 100vh;
}
</style>