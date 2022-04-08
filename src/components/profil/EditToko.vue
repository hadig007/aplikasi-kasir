<template>
  <div class="modal">
    <div class="box">
      <h1>Edit Profil Toko</h1>
      <hr />
      <div class="form">
        <div class="poto" v-if="profilToko.potoToko == ''"></div>
        <img :src="profilToko.potoToko" alt=""  v-if="profilToko.potoToko != ''"/>
        <div class="input">
          <label for="inpPoto" class="inpPt" >Ubah Poto Toko</label>
          <input class="inpPoto" type="file" id="inpPoto" @change="event($event)"/>
        </div>
        <div class="input">
          <label for="">Nama Toko</label>
          <input type="text" v-model="profilToko.nama" />
        </div>
        <div class="input">
          <label for="">Alamat</label>
          <input type="text" v-model="profilToko.alamat" />
        </div>
        <div class="input">
          <label for="">Nomor Kontak</label>
          <input type="text" v-model="profilToko.noKontak" />
        </div>
        <div class="input">
          <label for="">Pemilik</label>
          <input type="text" v-model="profilToko.owner" />
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
export default {
  created() {
    this.profilToko = this.$store.state.profilToko;
    console.log(this.profilToko)
  },
  data() {
    return {
      profilToko: null,
      newPhoto : null,
      preview : null
    };
  },
  methods: {
    event(e){
      let poto = e.target.files[0]
      this.profilToko.potoToko = URL.createObjectURL(poto);
      this.newPhoto = poto
      
    },
    selesai() {
      this.$store.dispatch("newProfil", this.profilToko);
      this.$store.state.modal[0].editToko = false;
    },
    batal(){
      this.$store.state.modal[0].editToko = false;
    }
  },
};
</script>

<style scoped>
.modal {
  position: absolute;
  background-color: #f5f5f5;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.box {
  align-self: center;
  justify-self: center;
  background-color: white;
  padding: 1rem 2rem;
  border-radius: 4px;
  box-shadow: 0 0 5px 0.5px rgba(0, 0, 0, 0.1);
}
.input {
  display: flex;
  flex-direction: column;
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
.poto {
  width: 500px;
  height: 300px;
  border: solid rgb(219, 219, 219) 2px;
  border-radius: 4px;
}
img {
  width: 500px;
  height: 300px;
  border-radius: 4px;
}
.inpPoto {
  display: none;
}
.inpPt{
  background-color: #2c82e0;
  border-radius: 4px;
  text-align: center;
  padding: .3rem;
  width: 50%;
  color: white;
  box-shadow: 3px 3px 3px .5px rgba(0, 0, 0, 0.2);
}
</style>