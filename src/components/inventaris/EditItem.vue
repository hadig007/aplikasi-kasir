<template>
  <div>
    <transition name="top">
      <top-error v-if="err == true"></top-error>
    </transition>
    <h1>Edit Item</h1>
    <!-- jika item tunggal -->
    <div class="tahap-2" v-if="tahap === 21">
      <div class="input">
        <label for="">Nama Item</label>
        <input type="text" v-model="item.nama" />
      </div>
      <div class="input">
        <label for="">Kode Item</label>
        <input type="number" v-model="item.kode" />
      </div>
      <div class="input">
        <label for="">Model Item</label>
        <input type="text" v-model="item.model" />
      </div>
      <div class="input">
        <label for="">Kategori Item</label>
        <select v-model="item.kategori">
          <option v-for="(item, index) in item" :value="item" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="input">
        <label for="">Merk Item</label>
        <select v-model="item.brand">
          <option v-for="(item, index) in allBrands" :value="item" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="input">
        <label for="">Rak Item</label>
        <select v-model="item.rak">
          <option v-for="(item, index) in allRacks" :value="item" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="input">
        <label for="">Keterangan</label>
        <textarea v-model="item.keterangan"></textarea>
      </div>
      <div class="button-group">
        <button class="btn-batal" @click="batal">Batal</button>
        <button class="btn-selesai" @click="selesai">Selesai</button>
      </div>
    </div>
    <!-- jika tidak tunggal dan satuan sama -->
    <div class="tahap-3" v-if="tahap === 22">
      <div class="input cek">
        <p>Deskripsi tiap item :</p>
        <div class="radio">
          <input type="radio" id="one" value="Sama" v-model="satuanDesk" />
          <label for="one">Sama</label>
        </div>
        <div class="radio">
          <input type="radio" id="two" value="Berbeda" v-model="satuanDesk" />
          <label for="two">Berbeda</label>
        </div>
      </div>
      <hr />
      <div class="input">
        <label for="">Nama Item</label>
        <input type="text" v-model="item.nama" />
      </div>
      <div class="input" v-if="satuanDesk === 'Sama'">
        <label for="">Kode Item</label>
        <input type="number" v-model="item.kode" />
      </div>
      <div class="input">
        <label for="">Model Item</label>
        <input type="text" v-model="item.model" />
      </div>
      <div class="input">
        <label for="">Kategori Item</label>
        <select v-model="item.kategori">
          <option
            v-for="(item, index) in allCategories"
            :value="item"
            :key="index"
          >
            {{ item }}
          </option>
        </select>
      </div>
      <div class="input">
        <label for="">Merk Item</label>
        <select v-model="item.brand">
          <option v-for="(item, index) in allBrands" :value="item" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <hr />
      <div class="input" v-if="satuanDesk === 'Sama'">
        <label for="">Rak Item</label>
        <select v-model="item.rak">
          <option v-for="(item, index) in allRacks" :value="item" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="input">
        <label for="">Satuan Item</label>
        <select v-model="item.satuan">
          <option v-for="(item, index) in allSatuan" :value="item" :key="index">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="input" v-if="item.satuan === 'Lainnya'">
        <label for="">Jumlah</label>
        <input type="number" v-model="item.jumlah" />
      </div>
      <div class="input" v-if="satuanDesk === 'Sama'">
        <label for="">Keterangan</label>
        <textarea v-model="item.keterangan"></textarea>
      </div>
      <hr v-if="satuanDesk === 'Berbeda'" />
      <p v-if="satuanDesk === 'Berbeda'">
        {{ descText }}
      </p>
      <!-- muncul jika deskrpsi tiap item berbeda maka -->
      <div class="iterasi" v-if="satuanDesk === 'Berbeda'">
        <div class="input">
          <label for="">Kode Item</label>
          <input type="number" v-model="itemToShow.kode" />
        </div>
        <div class="input">
          <label for="">Rak Item</label>
          <select v-model="itemToShow.rak">
            <option
              v-for="(item, index) in allRacks"
              :value="item"
              :key="index"
            >
              {{ itemToShow.rak }}
            </option>
          </select>
        </div>
        <div class="input">
          <label for="">Keterangan</label>
          <textarea v-model="itemToShow.keterangan"></textarea>
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
</template>

<script>
import TopError from "../modal/TopError.vue";
export default {
  created() {
    this.allCategories = this.$store.state.allCategories;
    this.allBrands = this.$store.state.allBrands;
    this.allRacks = this.$store.state.allRacks;
    this.Inventory = this.$store.state.allInventory;
    this.allSatuan = this.$store.state.allSatuan;

    // console.log(this.Inventory);
    let id = this.$route.params.id;
    for (let data of this.Inventory) {
      if (data.id == id) {
        this.item = data;
        console.log(this.item);
        // satuan menyatakan di tunggal atau tidak - jika item tunggal satunannya adalah tunggal
        // jika bukan tunggal maka tahap menjadi 22
        if (data.satuan == "Tunggal") {
          this.tahap = 21;
        } else {
          this.tahap = 22;

          if (data.satuanDesk == "Berbeda") {
            this.satuanDesk = data.satuanDesk;
            this.descItem = data.description;
            this.itemToShow = this.descItem[this.itemIndex];
            console.log(this.descItem);
          }
        }
      }
    }
  },
  components: {
    TopError,
  },
  computed: {
    descText() {
      let jumlah = this.itemIndex
      jumlah += 1;
      let text = "Deskripsi item " + jumlah;
      if (this.descItem == this.item.jumlah) {
        text = "Selesai";
      }
      return text;
    },
  },
  data() {
    return {
      Inventory: undefined,
      item: undefined,
      tahap: undefined,
      allCategories: [],
      allBrands: [],
      allRacks: [],
      allSatuan: [],
      err: false,
      lastId: undefined,
      satuanDesk: "Sama",
      // deskripsi item peritem sesuai index
      descItem: {},
      itemIndex: 0,
      itemToShow: {},
    };
  },
  methods: {
    selanjutnya() {
      if (this.descItem.length == this.itemIndex) {
        console.log("habis");
        return;
      }
      this.itemIndex++
      this.itemToShow = this.descItem[this.itemIndex];
    },
    batal() {
      this.$router.push("/inventaris");
    },
    selesai() {
      if (this.item.satuan === "Lusin") {
        this.item.jumlah = 12;
      }
      if (this.item.satuan == "Gross") {
        this.item.jumlah = 20;
      }
      if (this.item.satuan == "Kodi") {
        this.item.jumlah = 144;
      }
      if (this.item.satuan == "Rim") {
        this.item.jumlah = 500;
      }
      if (
        this.item.nama === "" ||
        this.item.kode === "" ||
        this.item.kategori == "" ||
        this.item.brand == "" ||
        this.item.rak == "" ||
        this.item.model == ""
      ) {
        this.err = true;
        return;
      }
      console.log("selesai");
      //   console.log(this.item);
      this.$store.dispatch("editItem", this.item);
      this.$router.push("/inventaris");
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
  /* height: 95vh; */
}
.form {
  background-color: rgb(255, 255, 255);
  padding: 2rem;
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  width: 50%;
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
select {
  width: 100%;
}
</style>