<template>
  <div class="profil">
    <edit-toko
      class="edit-toko"
      v-if="this.$store.state.modal[0].editToko==true"
    ></edit-toko>
    <edit-jadwal v-if="this.$store.state.modal[0].editJadwal==true"></edit-jadwal>
    <!-- <h1>Profil</h1> -->
    <header-app class="header"></header-app>
    <div class="content">
      <div class="toko">
        <img :src="profilToko.potoToko" />
        <!-- <hr /> -->
        <div class="wrapper">
          <div class="kiri">
            <div class="field">
              <label for="" class="edit"
                >Nama Toko
                <i
                  @click="showEditProfil"
                  class="fa-solid fa-pen-to-square"
                ></i
              ></label>
              <h2>{{ profilToko.nama }}</h2>
            </div>
            <div class="field">
              <label for="">Pemilik</label>
              <h4>{{ profilToko.owner }}</h4>
            </div>
            <div class="field">
              <label for="">Alamat</label>
              <h4>{{ profilToko.alamat }}</h4>
            </div>
            <div class="field">
              <label for="">Nomor Kontak</label>
              <h4>{{ profilToko.noKontak }}</h4>
            </div>
            <div class="field">
              <label for="">E-mail</label>
              <h4>{{ profilToko.email }}</h4>
            </div>
          </div>
          <div class="kanan">
            <label class="edit"
              >Jadwal buka <i class="fa-solid fa-pen-to-square" @click="this.$store.state.modal[0].editJadwal=true"></i
            ></label>
            <div class="jadwal">
              <div>
                <p
                  class="hari"
                  v-for="data in profilToko.jamBuka"
                  :key="data.nama"
                >
                  {{ data.hari }}
                </p>
              </div>
              <div>
                <p
                  class="jam"
                  v-for="data in profilToko.jamBuka"
                  :key="data.nama"
                >
                  {{ data.jamBuka }} - {{data.jamTutup}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="costumer">
        <h2>Daftar Costumer</h2>

        <div class="wrapper2">
          <div class="kiri2">
            <table>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Nama</th>
                  <th>Email</th>
                  <th>No Kontak</th>
                  <th>Level</th>
                  <th>Jumlah Belanja</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(data, index) in costumer" :key="data.id">
                  <td>{{ index + 1 }}</td>
                  <td>{{ data.nama }}</td>
                  <td>{{ data.email }}</td>
                  <td>{{ data.noKontak }}</td>
                  <td>{{ data.level }}</td>
                  <td>{{ data.jumlahBelanja }}</td>
                  <td>Edit</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="kanan2">
            <div class="masukan">
              <div class="input">
                <label for="">Nama</label>
                <input type="text" v-model="newCostumer.nama" />
              </div>
              <div class="input">
                <label for="">Email</label>
                <input type="email" v-model="newCostumer.email" />
              </div>
              <div class="input">
                <label for="">No Kontak</label>
                <input type="number" v-model="newCostumer.noKontak" />
              </div>
            </div>
          </div>
          <div class="button">
            <button @click="tambah">Tambah</button>
          </div>
        </div>
      </div>
      <div class="brand-kategori-rak">
        <div class="brand">
          <h2>Brand</h2>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in allBrands" :key="data.id">
                <td>{{ index + 1 }}</td>
                <td>{{ data }}</td>
                <td class="aksi">
                  <i class="fa-solid fa-pen" @click="editBrand(index)"></i>
                  <i class="fa-solid fa-trash" @click="hapusBrand(index)"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="input2">
            <input type="text" v-model="newBrand" />
            <button @click="tambahBrand" class="button2">
              {{ isEdit == true ? "Edit" : "Tambah" }}
            </button>
          </div>
        </div>
        <div class="kategori">
          <h2>Kategori</h2>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in allCategories" :key="data.id">
                <td>{{ index + 1 }}</td>
                <td>{{ data }}</td>
                <td class="aksi">
                  <i class="fa-solid fa-pen" @click="editCategory(index)"></i>
                  <i
                    class="fa-solid fa-trash"
                    @click="hapusCategory(index)"
                  ></i>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="input2">
            <input type="text" v-model="newCategory" />
            <button @click="tambahCategory" class="button2">
              {{ isEditCat == true ? "Edit" : "Tambah" }}
            </button>
          </div>
        </div>
        <div class="rak">
          <h2>Rak</h2>
          <table>
            <thead>
              <tr>
                <th>No</th>
                <th>Nama</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(data, index) in allRacks" :key="data.id">
                <td>{{ index + 1 }}</td>
                <td>{{ data }}</td>
                <td class="aksi">
                  <i class="fa-solid fa-pen" @click="editRack(index)"></i>
                  <i class="fa-solid fa-trash" @click="hapusRack(index)"></i>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="input2">
            <input type="text" v-model="newRack" />
            <button @click="tambahRack" class="button2">
              {{ isEditCat == true ? "Edit" : "Tambah" }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderApp from "../header/HeaderApp.vue";
import EditToko from "./EditToko.vue";
import EditJadwal from './EditJadwal.vue'
export default {
  components: {
    HeaderApp,
    EditToko,
    EditJadwal,
  },
  created() {
    this.profilToko = this.$store.state.profilToko;
    this.costumer = this.$store.state.costumer;
    this.allCategories = this.$store.state.allCategories;
    this.allBrands = this.$store.state.allBrands;
    this.allRacks = this.$store.state.allRacks;
  },
  data() {
    return {
      profilToko: {},
      costumer: [],
      newCostumer: {
        nama: "",
        email: "",
        noKontak: "",
      },
      allCategories: [],
      allBrands: [],
      allRacks: [],
      newBrand: "",
      newCategory: "",
      newRack: "",
      oldCategory: "",
      oldRack: "",
      isEdit: false,
      isEditCat: false,
      isEditRack: false,
      currentId: undefined,
      oldName: "",
      showIcon: true,
      editProfil: false,
      newToko: {
        nama: "",
        alamat: "",
        noKontak: "",
        pemilik: "",
      },
      namaToko:''
    };
  },
  methods: {
    showEditProfil(){
      this.$store.state.modal[0].editToko=true

    },
    editBatal(){
      this.$store.state.modal[0].editToko=false
    },
    tambah() {
      this.$store.dispatch("addCostumer", {
        nama: this.newCostumer.nama,
        email: this.newCostumer.email,
        noKontak: this.newCostumer.noKontak,
      });
      this.newCostumer.nama = "";
      this.newCostumer.email = "";
      this.newCostumer.noKontak = "";
    },
    tambahBrand() {
      // untuk edit brand
      if (this.isEdit == true) {
        this.$store.dispatch("editBrand", {
          nama1: this.oldName,
          nama2: this.newBrand,
        });
        this.newBrand = "";
        this.isEdit = false;
        return;
      }
      this.$store.dispatch("addBrand", this.newBrand);
      this.newBrand = "";
    },
    hapusBrand(id) {
      this.currentId = id;
      this.$store.dispatch("deleteBrand", this.currentId);
    },
    editBrand(id) {
      this.isEdit = true;
      this.currentId = id;
      console.log(this.currentId);
      this.oldName = this.allBrands[id];
      this.newBrand = this.allBrands[id];
    },
    tambahCategory() {
      if (this.isEditCat == true) {
        this.$store.dispatch("editCategory", {
          nama1: this.oldCategory,
          nama2: this.newCategory,
        });
        this.newCategory = "";
        this.isEditCat = false;
        return;
      }
      this.$store.dispatch("addCategory", this.newCategory);
      this.newCategory = "";
    },
    editCategory(id) {
      this.isEditCat = true;
      this.currentId = id;
      console.log(this.currentId);
      this.oldCategory = this.allCategories[id];
      this.newCategory = this.allCategories[id];
    },
    hapusCategory(id) {
      this.currentId = id;
      this.$store.dispatch("deleteCategory", this.currentId);
    },
    tambahRack() {
      if (this.isEditRack == true) {
        this.$store.dispatch("editRack", {
          nama1: this.oldRack,
          nama2: this.newRack,
        });
        this.newCategory = "";
        this.isEditCat = false;
        return;
      }
      this.$store.dispatch("addRack", this.newRack);
      this.newRack = "";
    },
    editRack(id) {
      this.isEditRack = true;
      this.currentId = id;
      console.log(this.currentId);
      this.oldRack = this.allRacks[id];
      this.newRack = this.allRacks[id];
    },
    hapusRack(id) {
      this.currentId = id;
      this.$store.dispatch("deleteRack", this.currentId);
    },
    selesaiProfil(){
      this.editProfil = false
      console.log(this.newToko)
      console.log(this.namaToko)
    }
  },
};
</script>

<style scoped>
/* header 5vh */
/* content 95vh */
/* toko min 500px */
/* cusromer min 150px */
.profil {
  display: flex;
  flex-direction: column;
  background-color: #f5f5f5;
  width: 100%;
  overflow: auto;
  /* height: 100%; */
}
.content {
  /* height: 95vh; */
  padding: 1rem;
}
h1 {
  position: absolute;
  left: 45%;
  right: 20%;
  top: 30%;
  font-size: 5rem;
  color: rgba(163, 163, 163, 0.301);
}
.content {
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 95%;

  /* background-color: rgb(255, 145, 0); */
}
.toko {
  align-self: flex-start;
  width: 100%;
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  min-height: 600px;
  background-color: white;
}
img {
  width: 100%;
  align-self: center;
  box-shadow: 2px 2px 5px 0.5px rgba(0, 0, 0, 0.1);
  min-height: 300px;
}
.wrapper {
  display: flex;
  width: 100%;
  margin-top: 1rem;
  min-height: 200px;
}
.kiri {
  /* padding: 1rem; */
  /* background-color: aqua; */
  width: 70%;
  /* height: 200px; */
}
.kanan {
  padding-left: 1rem;
  /* background-color: blueviolet; */
  width: 30%;
  border-left: solid rgb(168, 168, 168) 2px;
  /* height: 80%; */
}
label {
  font-size: 0.9rem;
}
input {
  padding: 0.5rem;
}
p {
  font-size: 0.85rem;
  margin: 0.2rem 0;
  color: rgb(95, 95, 95);
}
.jadwal {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
/* cusromer  */
.costumer {
  margin-top: 1rem;
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.1);
  min-height: 150px;
  width: 100%;
  background-color: white;
  padding: 1rem 2rem;
}
.wrapper2 {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1rem;
  min-height: 200px;
}
.kiri2 {
  /* padding: 1rem; */
  /* background-color: aqua; */
  width: 100%;
  margin-bottom: 0.5rem;
  /* height: 200px; */
}
.kanan2 {
  padding-left: 1rem;
  /* background-color: blueviolet; */
  width: 100%;
  border-top: solid rgb(168, 168, 168) 2px;
  /* height: 80%; */
}
.input {
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  width: 33%;
  margin: 0.3rem;
}
.masukan {
  display: flex;
  justify-content: center;
}
th,
td {
  font-size: 0.85rem;
  text-align: start;
  padding: 0;
}
button {
  background-color: #2c82e0;
  width: 30%;
}
.button {
  display: flex;
  justify-content: flex-end;
}
/* brand  */
.brand-kategori-rak {
  margin-top: 1rem;
  min-height: 150px;
  width: 100%;
  /* padding: 1rem 2rem; */
  display: flex;
  flex-direction: row;
  flex-flow: wrap;
  justify-content: space-between;
}
.brand {
  background-color: white;
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.1);
  height: 200px;
  flex-basis: 30%;
  border-radius: 4px;
  padding: 1rem 1rem;
}
.kategori {
  background-color: white;
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.1);
  min-height: 200px;
  flex-basis: 30%;
  border-radius: 4px;
  padding: 1rem 1rem;
}
i {
  font-size: 0.9rem;
}
table {
  width: 100%;
}
.aksi {
  margin: 0;
  width: 100%;
  display: flex;
  justify-content: space-around;
}
input {
  height: 30px;
  margin: 0.8rem 0rem;
  border-radius: 4px 0 0 4px;
}
.input2 {
  display: flex;
  justify-content: flex-start;
}
.button2 {
  border-radius: 0 4px 4px 0;
  height: 30px;
  min-width: 66px;
}
/* rak  */
.rak {
  background-color: white;
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.1);
  min-height: 200px;
  flex-basis: 30%;
  border-radius: 4px;
  padding: 1rem 1rem;
}
.edit {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-right: 1rem;
}
/* edi toko  */
/* .edit-toko{
    background-color: rgb(115, 115, 116);
    width: 100vw;
    height: 100vh;
    position: absolute;
    left: 0;
} */
</style>