<template>
  <div class="tambah">
    <transition name="top">
      <top-error v-if="err == true"></top-error>
    </transition>
    <!-- <h1>Tambah Item</h1> -->
    <!-- untuk input data punya 3 tahap
    1. pilih satuan
    2. deskripsi item -> tahap tunggal atau non tunggal
    3. deskripsi peritem/ jika bukan 1 -->
    <div class="form">
      <div class="tahap-1" v-if="tahap == 1">
        <h5>Pilih satuan item yang akan dimasukkan</h5>
        <div class="button-group">
          <button class="btn-tunggal" @click="tunggal">Item Tunggal</button>
          <button class="btn-nontunggal" @click="nontunggal">
            Lebih dari satu
          </button>
        </div>
      </div>
      <div class="tahap-2" v-if="tahap === 21">
        <div class="input">
          <label for="">Nama Item</label>
          <input type="text" v-model="newItem.nama" />
          <span v-if="inputError.nama === true"
            >Nama item tidak boleh kosong!</span
          >
        </div>
        <div class="input">
          <label for="">Kode Item</label>
          <input type="number" v-model="newItem.kode" />
          <span v-if="inputError.kode === true"
            >Kode item tidak boleh kosong!</span
          >
        </div>
        <div class="input">
          <label for="">Kategori Item</label>
          <select v-model="newItem.kategori">
            <option
              v-for="(item, index) in allCategories"
              :value="item"
              :key="index"
            >
              {{ item }}
            </option>
          </select>
          <span v-if="inputError.merk === true"
            >Kategori item belum dipilih!</span
          >
        </div>
        <div class="input">
          <label for="">Merk Item</label>
          <select v-model="newItem.brand">
            <option
              v-for="(item, index) in allBrands"
              :value="item"
              :key="index"
            >
              {{ item }}
            </option>
          </select>
          <span v-if="inputError.brand === true">Merk item belum dipilih!</span>
        </div>
        <div class="input">
          <label for="">Rak Item</label>
          <select v-model="newItem.rak">
            <option
              v-for="(item, index) in allRacks"
              :value="item"
              :key="index"
            >
              {{ item }}
            </option>
          </select>
          <span v-if="inputError.rak === true">Rak item belum dipilih!</span>
        </div>
        <div class="input">
          <label for="">Keterangan</label>
          <textarea v-model="newItem.keterangan"></textarea>
        </div>

        <div class="button-group">
          <button class="btn-batal" @click="batal">Batal</button>
          <button class="btn-selesai" @click="selesai">Selesai</button>
        </div>
      </div>
      <div class="tahap-3" v-if="tahap === 22">
        <div class="input cek">
          <p>Deskripsi tiap item :</p>
          <div class="radio">
            <input
              type="radio"
              id="one"
              value="Sama"
              checked
              v-model="satuanDeskripsi"
            />
            <label for="one">Sama</label>
          </div>
          <div class="radio">
            <input
              type="radio"
              id="two"
              value="Berbeda"
              v-model="satuanDeskripsi"
            />
            <label for="two">Berbeda</label>
          </div>
        </div>
        <hr />
        <div class="input">
          <label for="">Nama Item</label>
          <input type="text" v-model="newItem.nama" />
          <span v-if="inputError.nama === true"
            >Nama item tidak boleh kosong!</span
          >
        </div>
        <div class="input" v-if="satuanDeskripsi === 'Sama'">
          <label for="">Kode Item</label>
          <input type="number" v-model="newItem.kode" />
          <span v-if="inputError.kode === true"
            >Kode item tidak boleh kosong!</span
          >
        </div>
        <div class="input" v-if="satuanDeskripsi === 'Sama'">
          <label for="">Model Item</label>
          <input type="number" v-model="newItem.model" />
          <span v-if="inputError.kode === true"
            >Kode item tidak boleh kosong!</span
          >
        </div>

        <div class="input">
          <label for="">Kategori Item</label>
          <select v-model="newItem.kategori">
            <option
              v-for="(item, index) in allCategories"
              :value="item"
              :key="index"
            >
              {{ item }}
            </option>
          </select>
          <span v-if="inputError.merk === true"
            >Kategori item belum dipilih!</span
          >
        </div>
        <div class="input">
          <label for="">Merk Item</label>
          <select v-model="newItem.brand">
            <option
              v-for="(item, index) in allBrands"
              :value="item"
              :key="index"
            >
              {{ item }}
            </option>
          </select>
          <span v-if="inputError.brand === true">Merk item belum dipilih!</span>
        </div>
        <hr />
        <div class="input">
          <label for="">Rak Item</label>
          <select v-model="newItem.rak">
            <option
              v-for="(item, index) in allRacks"
              :value="item"
              :key="index"
            >
              {{ item }}
            </option>
          </select>
          <span v-if="inputError.rak === true">Rak item belum dipilih!</span>
        </div>
        <div class="input">
          <label for="">Satuan Item</label>
          <select v-model="newItem.satuan">
            <option
              v-for="(item, index) in allSatuan"
              :value="item"
              :key="index"
            >
              {{ item }}
            </option>
          </select>
          <span v-if="inputError.merk === true"
            >Kategori item belum dipilih!</span
          >
        </div>
        <div class="input" v-if="newItem.satuan === 'Lainnya'">
          <label for="">Jumlah</label>
          <input type="number" v-model="newItem.jumlah" />
        </div>
        <div class="input" v-if="satuanDeskripsi === 'Sama'">
          <label for="">Keterangan</label>
          <textarea v-model="newItem.keterangan"></textarea>
        </div>
        <hr v-if="satuanDeskripsi === 'Berbeda'" />
        <p v-if="satuanDeskripsi === 'Berbeda'">
          Deskripsi item {{ indexingItem }}
        </p>
        <!-- muncul jika deskrpsi tiap item berbeda maka -->
        <div class="iterasi" v-if="satuanDeskripsi === 'Berbeda'">
          <div class="input">
            <label for="">Kode Item</label>
            <input type="number" v-model="newItem.kode" />
          </div>
          <div class="input">
            <label for="">Model Item</label>
            <input type="text" v-model="newItem.model" />
          </div>
          <div class="input">
            <label for="">Keterangan</label>
            <textarea v-model="newItem.keterangan"></textarea>
          </div>
          <button @click="selanjutnya" class="selanjutnya">
            Item Selanjutnya
          </button>
        </div>
        <div class="button-group">
          <button class="btn-batal" @click="batal">Batal</button>
          <button class="btn-selesai" @click="selesai">Selesai</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopError from "../modal/TopError.vue";
export default {
  components: { TopError },
  created() {
    this.allCategories = this.$store.state.allCategories;
    this.allBrands = this.$store.state.allBrands;
    this.allRacks = this.$store.state.allRacks;
    this.allSatuan = this.$store.state.allSatuan;
  },
  data() {
    return {
      allCategories: [],
      allBrands: [],
      allRacks: [],
      newItem: {
        nama: "",
        kode: "",
        kategori: "",
        brand: "",
        rak: "",
        jumlah: 0,
        model: "",
        keterangan: "",
        satuan: this.tahap,
      },
      inputError: {
        nama: false,
        kode: false,
        kategori: false,
        brand: false,
        rak: false,
        allInput: false,
      },
      allSatuan: [],
      err: false,
      tahap: 22, // pilih satuan barang
      satuanDeskripsi: "Sama", // secara default nilanya sama
      indexingItem: 1,
      someNewItem: [],

      // jika item tidak kosong munculkan dropdown nilainya sesuai jumlah item✔️
      // kasih warna berbeda untuk step ini
    };
  },
  computed: {},
  methods: {
    selesai() {
      if (this.indexingItem !== this.newItem.jumlah) {
        console.log("anda belum mengisi semua deskripsi");
        return;
      }
      //
      if (this.newItem.satuan === "Lusin") {
        this.newItem.jumlah = 12;
      }
      if (this.newItem.satuan == "Gross") {
        this.newItem.jumlah = 20;
      }
      if (this.newItem.satuan == "Kodi") {
        this.newItem.jumlah = 144;
      }
      if (this.newItem.satuan == "Rim") {
        this.newItem.jumlah = 500;
      }
      console.log(
        `==HASIL INPUTAN ITEM BARU== \nnama : ${this.newItem.nama}\nkode : ${this.newItem.kode}\nkategori : ${this.newItem.kategori}\nmerk : ${this.newItem.brand}\nrak : ${this.newItem.rak}\nketerangan : ${this.newItem.keterangan}\njumlah : ${this.newItem.jumlah}\n==========`
      );
      if (this.newItem.nama === "") {
        this.inputError.nama = true;
        this.inputError.allInput = true;
        this.showError();
        return;
      } else if (this.newItem.kode === "") {
        this.inputError.kode = true;
        this.inputError.allInput = true;
        this.showError();
        return;
      } else if (this.newItem.kategori == "") {
        this.inputError.kategori = true;
        this.inputError.allInput = true;
        this.showError();
        return;
      } else if (this.newItem.brand == "") {
        this.inputError.brand = true;
        this.inputError.allInput = true;
        this.showError();
        return;
      } else if (this.newItem.rak == "") {
        this.inputError.rak = true;
        this.inputError.allInput = true;
        this.showError();
        return;
      }
      if(this.tahap==21){
        this.$store.dispatch("addInventory", this.newItem);
      }else{
        this.$store.dispatch("addInventory", this.someNewItem);
      }
      this.$router.push("/inventaris");
    },
    batal() {
      this.$router.push("/inventaris");
    },
    tunggal() {
      this.tahap = 21;
    },
    nontunggal() {
      this.tahap = 22;
    },
    showError() {
      if (this.inputError.allInput === true) {
        this.err = true;
        setTimeout(() => {
          this.err = false;
        }, 1000);
      }
    },
    selanjutnya() {
      if (this.newItem.satuan === "Lusin") {
        this.newItem.jumlah = 12;
      }
      if (this.newItem.satuan == "Gross") {
        this.newItem.jumlah = 20;
      }
      if (this.newItem.satuan == "Kodi") {
        this.newItem.jumlah = 144;
      }
      if (this.newItem.satuan == "Rim") {
        this.newItem.jumlah = 500;
      }
      if (this.indexingItem == (this.newItem.jumlah+1)) {
        return;
      }
      this.indexingItem++;
      let toAdd = {
        nama: this.newItem.nama,
        kode: this.newItem.kode,
        kategori: this.newItem.kategori,
        brand: this.newItem.brand,
        rak: this.newItem.rak,
        jumlah: this.newItem.jumlah,
        model: this.newItem.model,
        keterangan: this.newItem.keterangan,
        satuan: this.newItem.satuan,
        indexItem: this.indexingItem,
      };
      this.someNewItem.push(toAdd);
      console.log(this.someNewItem);
      this.newItem.kode = "";
      this.newItem.model = "";
      this.newItem.keterangan = "";
    },
  },
};
</script>

<style scoped>
.tambah {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.form {
  background-color: rgb(255, 255, 255);
  padding: 1rem;
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
}
.input {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0.5rem 0;
}
.button-group {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.btn-selesai {
  background-color: #2c82e0;
}
.btn-batal {
  background-color: #ffac0a;
}
.btn-tunggal,
.btn-nontunggal {
  background-color: #00b4d8;
}
.top-enter-from {
  transform: translateY(-50px);
}
.top-enter-to {
  transform: translateY(0);
}
.top-enter-active {
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}
.top-leave-from {
  transform: translateY(0);
}
.top-leave-to {
  transform: translateY(-50px);
}
.top-leave-active {
  transition: all 0.3s ease-in-out;
}
.cek {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.iterasi {
  background-color: #f4ffff;
  padding: 0.3rem;
  border-radius: 4px;
}
.selanjutnya {
  background-color: rgba(71, 124, 124, 0.534);
  width: 100%;
  margin: 0 auto;
}
</style>