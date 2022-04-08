<template>
  <div class="inventaris">
    <header-app class="header"></header-app>
    <div class="content">
      <div class="content-inventaris" v-if="currentRoute == '/inventaris'">
        <ul>
          <li class="tambah">
            <router-link to="/inventaris/tambah_item">Tambah Item</router-link>
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
            <td>{{ inv.keterangan }}</td>
            <td>
              <router-link :to="{ name: 'edit_item', params: { id: inv.id } }"
                >Edit Item</router-link
              >
            </td>
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
import { useRoute } from "vue-router";
import HeaderApp from "../header/HeaderApp.vue";
export default {
  created() {
    this.allInventory = this.$store.state.allInventory;

    for (let i = 0; i < 100; i++) {
      let newItem = {};
      // generate satuan
      let sat = ["Tunggal", "Non-Tunggal"];
      let randomSatuan = Math.ceil(Math.random() * sat.length);
      // console.log(randomSatuan);
      let satuan = sat[randomSatuan - 1];
      newItem.satuan = satuan;

      //
      var vocal = ["a", "i", "u", "e", "o"];
      var consonant = [
        "b",
        "c",
        "d",
        "f",
        "g",
        "h",
        "j",
        "k",
        "l",
        "m",
        "n",
        "p",
        "q",
        "r",
        "s",
        "t",
        "v",
        "w",
        "x",
        "y",
        "z",
      ];
      //
      // jika item tunggal
      if (satuan === "Tunggal") {
        // generating new  inventory -> satuan =tunggal
        // 1. generate name
        // 2. generate produk
        // 3. generate kategori
        // 4. generate merk
        // 5. generate rak
        // 6. generate model
        // 7. generate keterangan
        // 8. generate jumlah
        // 9. generate id

        // 1. generating name

        var nama = [];
        for (let i = 0; i < 5; i++) {
          var angkaRandomVocal = Math.ceil(Math.random() * 4);
          var angkaRandomConsonant = Math.ceil(Math.random() * 20);
          nama.push(vocal[angkaRandomVocal]);
          nama.push(consonant[angkaRandomConsonant]);
        }
        nama = nama.join("");
        newItem.nama = nama;
        newItem.satuanDesk = "pasti sama karena jumlahnya 1";
        // 2. generating kode produk
        let kode = Math.ceil(Math.random() * 99999);
        newItem.kode = kode;
        // 3. generating kategory
        let kategori = undefined;
        let allCat = this.$store.state.allCategories;
        let angkaRandomKategory = Math.ceil(
          Math.random() * (allCat.length - 1)
        );
        kategori = allCat[angkaRandomKategory];
        newItem.kategori = kategori;
        // 4. generating merk
        let brand = undefined;
        let allBrand = this.$store.state.allBrands;
        let angkaRandomBrand = Math.ceil(Math.random() * (allBrand.length - 1));
        brand = allBrand[angkaRandomBrand];
        newItem.brand = brand;
        // 5. generating rak
        let rak = undefined;
        let allRacks = this.$store.state.allRacks;
        let angkaRandomRack = Math.ceil(Math.random() * (allRacks.length - 1));
        rak = allRacks[angkaRandomRack];
        newItem.rak = rak;
        // 6. generating model
        var model = [];
        for (let i = 0; i < 5; i++) {
          var angkaRandomVocal2 = Math.ceil(Math.random() * 4);
          var angkaRandomConsonant2 = Math.ceil(Math.random() * 20);
          model.push(vocal[angkaRandomVocal2]);
          model.push(consonant[angkaRandomConsonant2]);
        }
        model = model.join("");
        newItem.model = model;
        // 7. generating keterangan
        newItem.keterangan = "Baik";
        // 8. generating jumlah
        newItem.jumlah = 1;
        // 9. generating id
        let lastId = this.$store.state.allInventory.length;
        newItem.id = lastId + 1;
        // generating new  inventory
        // console.log(newItem);
        this.$store.dispatch("addInventory", newItem);
      } else if (satuan === "Non-Tunggal") {
        // === generating new  inventory -> satuan = non-tunggal ====
        // generate satuan item -> jumlah
        // generate item sama atau tidak
        // 1. generate name
        // 2. generate produk
        // 3. generate kategori
        // 4. generate merk
        // 5. generate rak
        // 6. generate model
        // 7. generate keterangan
        // 8. generate jumlah
        // 9. generate id

        // generate satuan -> jumlah
        let allSatuan = this.$store.state.allSatuan;
        let randomSatuan = Math.ceil(Math.random() * allSatuan.length);
        let satuan = allSatuan[randomSatuan - 1];
        switch (satuan) {
          case "Lusin":
            newItem.jumlah = 12;
            break;
          case "Gross":
            newItem.jumlah = 20;
            break;
          case "Kodi":
            newItem.jumlah = 144;
            break;
          case "Rim":
            newItem.jumlah = 500;
            break;
          case "Lainnya":
            newItem.jumlah = Math.ceil(Math.random() * 11);
            break;
        }
        // console.log(satuan)
        newItem.satuan = satuan;
        // generate satuan deskripsi
        let satuanDeskripsi = ["Sama", "Berbeda"];
        let randomSatuanDeskripsi = Math.ceil(
          Math.random() * satuanDeskripsi.length
        );
        let satuanDesk = satuanDeskripsi[randomSatuanDeskripsi - 1];
        newItem.satuanDesk = satuanDesk;
        // console.log(satuanDesk);

        // jika satuan deskripsi sama
        if (satuanDesk == "Sama") {
          // console.log("merender dengan satuan deskripsi sama");
          // 1. generating name
          var vocal2 = ["a", "i", "u", "e", "o"];
          var consonant2 = [
            "b",
            "c",
            "d",
            "f",
            "g",
            "h",
            "j",
            "k",
            "l",
            "m",
            "n",
            "p",
            "q",
            "r",
            "s",
            "t",
            "v",
            "w",
            "x",
            "y",
            "z",
          ];

          var nama2 = [];
          for (let i = 0; i < 5; i++) {
            var angkaRandomVocal3 = Math.ceil(Math.random() * 4);
            var angkaRandomConsonant3 = Math.ceil(Math.random() * 20);
            nama2.push(vocal2[angkaRandomVocal3]);
            nama2.push(consonant2[angkaRandomConsonant3]);
          }
          nama2 = nama2.join("");
          newItem.nama = nama2;
          // 2. generating kode produk
          let kode = Math.ceil(Math.random() * 99999);
          newItem.kode = kode;
          // 3. generating kategory
          let kategori = undefined;
          let allCat = this.$store.state.allCategories;
          let angkaRandomKategory = Math.ceil(
            Math.random() * (allCat.length - 1)
          );
          kategori = allCat[angkaRandomKategory];
          newItem.kategori = kategori;
          // 4. generating merk
          let brand = undefined;
          let allBrand = this.$store.state.allBrands;
          let angkaRandomBrand = Math.ceil(
            Math.random() * (allBrand.length - 1)
          );
          brand = allBrand[angkaRandomBrand];
          newItem.brand = brand;
          // 5. generating rak
          let rak = undefined;
          let allRacks = this.$store.state.allRacks;
          let angkaRandomRack = Math.ceil(
            Math.random() * (allRacks.length - 1)
          );
          rak = allRacks[angkaRandomRack];
          newItem.rak = rak;
          // 6. generating model
          var model2 = [];
          for (let i = 0; i < 5; i++) {
            var angkaRandomVocal4 = Math.ceil(Math.random() * vocal.length);
            var angkaRandomConsonant4 = Math.ceil(
              Math.random() * consonant.length
            );
            model2.push(vocal[angkaRandomVocal4]);
            model2.push(consonant[angkaRandomConsonant4]);
          }
          model2 = model2.join("");
          newItem.model = model2;
          // 7. generating keterangan
          newItem.keterangan = "Baik";
          // 8. generating jumlah
          // newItem.jumlah = 1;
          // 9. generating id
          let lastId = this.$store.state.allInventory.length;
          newItem.id = lastId + 1;
          // generating new  inventory
          // console.log(newItem);
          this.$store.dispatch("addInventory", newItem);
        } else if (satuanDesk == "Berbeda") {
          
          // console.log('item yang non-tunggal dan deskripsi item berbeda');
          // console.log("merender dengan satuan deskripsi Berbeda");
          // 1. generating name
          var nama3 = [];
          for (let i = 0; i < 5; i++) {
            var angkaRandomVocal5 = Math.ceil(Math.random() * 4);
            var angkaRandomConsonant5 = Math.ceil(Math.random() * 20);
            nama3.push(vocal[angkaRandomVocal5]);
            nama3.push(consonant[angkaRandomConsonant5]);
          }
          nama3 = nama3.join("");
          newItem.nama = nama3;

          // 2. generating kategory
          let kategori = undefined;
          let allCat = this.$store.state.allCategories;
          let angkaRandomKategory = Math.ceil(
            Math.random() * (allCat.length - 1)
          );
          kategori = allCat[angkaRandomKategory];
          newItem.kategori = kategori;
          // 3. generating merk
          let brand = undefined;
          let allBrand = this.$store.state.allBrands;
          let angkaRandomBrand = Math.ceil(
            Math.random() * (allBrand.length - 1)
          );
          brand = allBrand[angkaRandomBrand];
          newItem.brand = brand;

          // 4. generating model
          var model3 = [];
          for (let i = 0; i < 5; i++) {
            var angkaRandomVocal6 = Math.ceil(Math.random() * vocal.length);
            var angkaRandomConsonant6 = Math.ceil(
              Math.random() * consonant.length
            );
            model3.push(vocal[angkaRandomVocal6]);
            model3.push(consonant[angkaRandomConsonant6]);
          }
          model3 = model3.join("");
          newItem.model = model3;

          // 5. generating jumlah
          // newItem.jumlah = 1;
          // 6. generating id
          let lastId = this.$store.state.allInventory.length;
          newItem.id = lastId + 1;

          // berbeda tiap item
          var description = [];
          for (let i = 0; i < newItem.jumlah; i++) {
            // 1. generating kode produk
            let item = {}
            let kode = Math.ceil(Math.random() * 99999);
            item.kode = kode;
            // 2. generating rak
            let allRacks = this.$store.state.allRacks;
            let angkaRandomRack = Math.ceil(
              Math.random() * (allRacks.length - 1)
            );
            item.rak = allRacks[angkaRandomRack];
            // 3. generating keterangan
            item.keterangan = "Baik";
            description.push(item);
          }

          // generating new  inventory
          newItem.description = description;
          console.log(newItem);
          this.$store.dispatch("addInventory", newItem);
        }
      }
    }
  },
  data() {
    return {
      allInventory: [],
    };
  },
  computed: {
    currentRoute() {
      return useRoute().fullPath;
    },
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
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  /* align-items: center; */
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
  justify-content: flex-end;
  padding: 0;
}
.content-inventaris {
  overflow-x: auto;
}
li .tambah {
  text-align: center;
  border: solid rgb(202, 202, 202) 1px;
  margin: 0.8rem auto;
  align-self: flex-end;
}
li a {
  border-radius: 4px;
  padding: 0.5rem;
  width: 200px;
  color: white;
  background-color: rgb(68, 103, 255);
}
</style>