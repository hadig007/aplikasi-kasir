06/03/2022

1. buat template dashboard yang 
    1. setup router untuk 5 menu (dashboard, inventaris, penjualan, statistik, laporan, profil)
2. buat sidebar menu
3. merender halaman sesuai menu yang dipilih

/////
INVENTARIS
Tambah inventaris
1. kode item (default id yang digenerate)
2. nama item
3. jenis item (ada opsi tambah jenis)
4. nama merk (ada opsi tambah merk)
5. rak (bisa masukkan nama rak)
6. keterangan
7. jumlah [ satuan, lusin, dus, lainnya] -> meminta input sebanyak jumlah yang dimasukkan
8. kode produk /sn
9. warna 
10. model

/////

<!-- 1. jika jumlah item sesuai kategori maka variabel untuk jumlah adalah jumlahAsli(computed) karena jumlahnya masih tergantung pilihan satuan barangnya
2. tapi jika jumlahnya inputan manual maka variabel untuk jumlah adalah newItem.jumlah -->
done dengan pengecekan di method selesai✔️

besok memasukkan some newitem ke store

to fix
1. cek kesiapan tiap deskripsi sebelum masuk ke item selanjutnya