import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      allInventory: [
        {
          nama: "Samsung A12",
          kode: "111111",
          kategori: "Handphone",
          brand: "Samsung",
          rak: "Rak 1",
          jumlah: 1,
          model: "a12",
          keterangan: "Baik",
          satuan: "Tunggal",
          description: []
        },
      ],
      allCategories: ["Hanphone", "Aksesoris", "Casing", "Baterai"],
      allBrands: ["Samsung", "Nokia", "Oppo", "Vivo"],
      allRacks: ["Rak 1", "Rak 2", "Rak 3"],
      allSatuan : [
        'Lusin', //12
        'Gross', // 20
        'Kodi', // 144
        'Rim', // 500
        'Lainnya', // Input manual
      ] 
    };
  },
  mutations: {
    ADD_INVENTORY(state, payload) {
      state.allInventory.unshift(payload);
    },
    ADD_SOME_INVENTORY(state, payload) {
      payload.map((data)=>{
        state.allInventory.unshift(data);
      })
    },
  },
  actions: {
    addInventory(c, payload) {
      return c.commit("ADD_INVENTORY", payload);
    },
    addSomeInventory(c, payload) {
      return c.commit("ADD_SOME_INVENTORY", payload);
    },
  },
});

export default store;
