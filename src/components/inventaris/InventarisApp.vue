<template>
  <div class="inventaris">
    <header-app class="header"></header-app>
    <div class="content">
      <div class="content-inventaris" v-if="currentRoute=='/inventaris'">
        <ul>
          <li>
            <router-link to="/inventaris/tambah_item">Tambah Item</router-link>
          </li>
          <li>
            <router-link to="/inventaris/edit_item">Edit Item</router-link>
          </li>
        </ul>
        <hr />
        <table>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Kode Produk</th>
              <th>Kategori</th>
              <th>Merk</th>
              <th>Rak</th>
              <th>Jumlah</th>
              <th>Model</th>
              <th>Warna</th>
              <th>Keterangan</th>
              <th>Aksi</th>
            </tr>
            <tr v-for="(inv, index) in allInventory" :key="inv.id">
              <td>{{ ++index }}</td>
              <td>{{ inv.nama }}</td>
              <td>{{ inv.kode }}</td>
              <td>{{ inv.kategori }}</td>
              <td>{{ inv.brand }}</td>
              <td>{{ inv.rak }}</td>
              <td>{{ inv.jumlah }}</td>
              <td>{{ inv.model }}</td>
              <td>{{ inv.warna }}</td>
              <td>{{ inv.keterangan }}</td>
              <td><router-link to="/inventaris/edit_item">Edit Item</router-link></td>
            </tr>
        </table>
      </div>
      <!-- jangan diubah -->
      <router-view></router-view>
      <!-- jangan diubah -->
    </div>
  </div>
</template>

<script>
import {useRoute} from 'vue-router'
import HeaderApp from "../header/HeaderApp.vue";
export default {
  created() {
    this.allInventory = this.$store.state.allInventory;
  },
  data() {
    return {
      allInventory: [],
    };
  },
  computed:{
      currentRoute(){
          // console.log(useRoute().fullPath)
          return useRoute().fullPath
      }
  },
  components: {
    HeaderApp,
  },
};
</script>

<style scoped>
/* header 5vh */
/* content 95vh */
/* content-inventaris */
/* router-view */
.inventaris {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
}
.content {
  height: 95vh;
  padding: 1rem;
  /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
  overflow: auto;
}
h1 {
  position: absolute;
  left: 45%;
  right: 20%;
  top: 30%;
  font-size: 5rem;
  color: rgb(187, 187, 187);
}
ul {
  display: flex;
  flex-direction: row;
}
.content-inventaris{
    overflow-x: auto;
}
</style>