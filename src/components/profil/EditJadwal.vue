<template>
  <div class="modal">
    <div class="box">
      <h1>Edit Jadwal Toko</h1>
      <hr />
      <div class="form">
        <div class="input" v-for="data in jamBuka" :key="data.id">
          <label for="">{{data.hari}}</label>
          <input type="time" v-model="data.jamBuka">
          <input type="time" v-model="data.jamTutup">
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
    this.jamBuka = this.$store.state.profilToko.jamBuka
    console.log(this.jamBuka)
  },
  data() {
    return {
      jamBuka : null,
    };
  },
  methods: {
    selesai() {
      console.log(this.jamBuka)
      this.$store.state.modal[0].editJadwal = false
    },
    batal(){
      this.$store.state.modal[0].editJadwal = false;
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
.form{
  display: flex;
  flex-direction: column;
}
.input{
  display: flex;
  flex-direction: row;
  align-items: center;
}
input{
  margin: .3rem;
}
label{
  width: 100px;
}
</style>