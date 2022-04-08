import { createStore } from "vuex";

const store = createStore({

  state() {
    return {
      allInventory: [
        // {
        //   id: 1,
        //   nama: "Samsung A12",
        //   kode: "111111",
        //   kategori: "Handphone",
        //   brand: "Samsung",
        //   rak: "Rak 1",
        //   jumlah: 1,
        //   model: "a12",
        //   keterangan: "Baik",
        //   satuan: "Tunggal",
        //   description: [],
        // },
        // {
        //   id: 2,
        //   nama: "VIVO y12",
        //   kode: "111112",
        //   kategori: "Handphone",
        //   brand: "Vivo",
        //   rak: "Rak 1",
        //   jumlah: 1,
        //   model: "a12",
        //   keterangan: "Baik",
        //   satuan: "Tunggal",
        //   description: [],
        // },
        // {
        //   id: 3,
        //   nama: "Oppo A13",
        //   kode: "114112",
        //   kategori: "Handphone",
        //   brand: "OPPO",
        //   rak: "Rak 1",
        //   jumlah: 5,
        //   model: "a12",
        //   keterangan: "Baik",
        //   satuan: "Tunggal",
        //   description: [],
        // },
      ],
      allCategories: ["Hanphone", "Aksesoris", "Casing", "Baterai"],
      allBrands: ["Samsung", "Nokia", "Oppo", "Vivo"],
      allRacks: ["Rak 1", "Rak 2", "Rak 3", "Rak 4"],
      allSatuan: [
        "Lusin", //12
        "Gross", // 20
        "Kodi", // 144
        "Rim", // 500
        "Lainnya", // Input manual
      ],
      profilToko: {
        nama: "Toko Hadigu",
        alamat: "Jl. Merdeka No 112, Linkungan 5 Gg. Damai",
        noKontak: "085361585645",
        email: "jtgunawan007@gmail.com",
        owner: "Hadi Gunawan",
        jamBuka: [
          { hari: "Senin", jamBuka: "08:00", jamTutup: "20:00", libur: false },
          { hari: "Selasa", jamBuka: "08:00", jamTutup: "20:00", libur: false },
          { hari: "Rabu", jamBuka: "08:00", jamTutup: "20:00", libur: false },
          { hari: "Kamis", jamBuka: "08:00", jamTutup: "20:00", libur: false },
          { hari: "Jumat", jamBuka: "13:00", jamTutup: "20:00", libur: false },
          { hari: "Sabtu", jamBuka: "08:00", jamTutup: "17:00", libur: false },
          { hari: "Minggu", jamBuka:"", jamTutup:"", libur:true},
        ],
        potoToko:
          "https://imgsrv2.voi.id/8Pq_mlJvSnQJRj-CWPS0siwSD_0DZ3krmd5_3tTu1bI/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy84MDg0MC8yMDIxMDgzMTIwMTktbWFpbi5jcm9wcGVkXzE2MzA0MTU5NzMuanBn.jpg",
      },
      costumer: [
        {
          nama: "Indra Hasan",
          email: "indhas@email",
          noKontak: "0823451261",
          level: "Level 2", // [1,2,3]
          jumlahBelanja: 10,
        },
        {
          nama: "Dina Hana",
          email: "indhas@email",
          noKontak: "0823451261",
          level: "Level 2", // [1,2,3]
          jumlahBelanja: 50,
        },
        {
          nama: "Pai Hakim",
          email: "hakim@email",
          noKontak: "0823451261",
          level: "Level 2", // [1,2,3]
          jumlahBelanja: 0,
        },
      ],
      modal: [{ editToko: false }, { editJadwal: false }],
    };
  },
  mutations: {
    ADD_INVENTORY(state, payload) {
      state.allInventory.unshift(payload);
    },
    ADD_COSTUMER(state, payload) {
      let data = {
        nama: payload.nama,
        email: payload.email,
        noKontak: payload.noKontak,
        level: 1,
        jumlahBelanja: 0,
      };
      state.costumer.unshift(data);
    },
    ADD_BRAND(state, payload) {
      state.allBrands.push(payload);
    },
    EDIT_BRAND(state, payload) {
      for (let i = 0; i < state.allBrands.length; i++) {
        console.log(state.allBrands[i]);
        if (state.allBrands[i] == payload.nama1) {
          state.allBrands[i] = payload.nama2;
        }
      }
    },
    DELETE_BRAND(state, payload) {
      state.allBrands.splice(payload, 1);
    },
    ADD_CATEGORY(state, payload) {
      state.allCategories.push(payload);
    },
    EDIT_CATEGORY(state, payload) {
      for (let i = 0; i < state.allCategories.length; i++) {
        console.log(state.allCategories[i]);
        if (state.allCategories[i] == payload.nama1) {
          state.allCategories[i] = payload.nama2;
        }
      }
    },
    DELETE_CATEGORY(state, payload) {
      state.allCategories.splice(payload, 1);
    },
    ADD_RACK(state, payload) {
      state.allRacks.push(payload);
    },
    EDIT_RACK(state, payload) {
      for (let i = 0; i < state.allRacks.length; i++) {
        console.log(state.allRacks[i]);
        if (state.allRacks[i] == payload.nama1) {
          state.allRacks[i] = payload.nama2;
        }
      }
    },
    DELETE_RACK(state, payload) {
      state.allRacks.splice(payload, 1);
    },
    NEW_PROFIL(state, payload) {
      state.profilToko.nama = payload.nama;
      state.profilToko.alamat = payload.alamat;
      state.profilToko.noKontak = payload.noKontak;
      state.profilToko.owner = payload.owner;
      console.log(state.profilToko);
    },
    NEW_JADWAL(state, payload){
      state.profilToko.jamBuka = payload
    },
    // edit item
    EDIT_ITEM(state, payload){
      for(let dt of state.allInventory){
        if(dt.id == payload.id){
          console.log(payload.id + " = " + dt.id)
          dt = payload
          }
      }
    }
  },
  actions: {
    addInventory(c, payload) {
      return c.commit("ADD_INVENTORY", payload);
    },
    addCostumer(c, payload) {
      return c.commit("ADD_COSTUMER", payload);
    },
    addBrand(c, payload) {
      return c.commit("ADD_BRAND", payload);
    },
    editBrand(c, payload) {
      return c.commit("EDIT_BRAND", payload);
    },
    deleteBrand(c, payload) {
      return c.commit("DELETE_BRAND", payload);
    },
    addCategory(c, payload) {
      return c.commit("ADD_CATEGORY", payload);
    },
    editCategory(c, payload) {
      return c.commit("EDIT_CATEGORY", payload);
    },
    deleteCategory(c, payload) {
      return c.commit("DELETE_CATEGORY", payload);
    },
    addRack(c, payload) {
      return c.commit("ADD_RACK", payload);
    },
    editRack(c, payload) {
      return c.commit("EDIT_RACK", payload);
    },
    deleteRack(c, payload) {
      return c.commit("DELETE_RACK", payload);
    },
    newProfil(c, payload) {
      return c.commit("NEW_PROFIL", payload);
    },
    newJadwal(c, payload){
      return c.commit("NEW_JADWAL", payload);
    },
    // edit item
    editItem(c, payload){
      c.commit('EDIT_ITEM', payload)
    }
  },
});

export default store;
