import { createRouter, createWebHashHistory } from 'vue-router'


import Dashboard from '../components/dashboard/DashboardApp.vue'

import Inventaris from '../components/inventaris/InventarisApp.vue'
import TambahItem from '../components/inventaris/TambahItem.vue'
import EditItem from '../components/inventaris/EditItem.vue'

import Laporan from '../components/laporan/LaporanApp.vue'
import Profil from '../components/profil/ProfilApp.vue'
import Statistik from '../components/statistik/StatistikApp.vue'

const router = createRouter({
    history : createWebHashHistory(),
    routes : [
        { path : '/', redirect : '/dashboard'},
        { path : '/dashboard', component : Dashboard},
        { path : '/inventaris', component : Inventaris,name : 'inventaris', children: [
            { path : 'tambah_item', component : TambahItem},
            { path : 'edit_item/:id', component : EditItem, name : "edit_item"},
        ]},
        { path : '/laporan', component : Laporan},
        { path : '/profil', component : Profil},
        { path : '/statistik', component : Statistik},
    ]
})

export default router;