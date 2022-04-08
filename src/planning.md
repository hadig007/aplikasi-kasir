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

//

PROFIL 
1. field menambah informasi toko -> ui✔️
    1. nama toko ✔️
    2. alamat ✔️
    3. nomor kontak ✔️
    4. owner/pemilik ✔️
    5. poto toko ✔️
    6. jam buka/operasi ✔️
2. field tambah pelanggan/customer
    1. nama ✔️
    2. email ✔️
    3. nomor kontak ✔️
    4. level ✔️
    5. jumlah belanja ✔️
3. field tambah kategori
    1. create ✔️
    2. read ✔️
    3. update ✔️
    4. delete ✔️
4. field tambah merk
    1. create ✔️
    2. read ✔️
    3. update ✔️
    4. delete ✔️
5. field tambah nama rak
    1. create ✔️
    2. read ✔️
    3. update ✔️
    4. delete ✔️


// 

INPUT ITEM
1. generate ID ✔️
2. print barcode ✔️
3. edit item
    1. edit tunggal ✔️
    2. edit non tunggal (edit masing masing deskripsi❌)


// generate fake item
1. generate fake name
2. generate fake kode
3. generate fake kategori
4. generate fake brand
5. generate fake rak
6. generata fake jumlah
7. generate fake model
8. generate fake keterangan
9. generate fake satuan
10. generate fake description 

next -> generate deskripsi peritem yang berbeda
// satuan deskripsinya berbeda
1. generate fake name
2. generate fake kategori
3. generate fake brand
4. generata fake jumlah
5. generate fake model
6. generate fake satuan

1. generate kode item masing masing 
2. generate rak masing masing
3. generate keterangan masing masing 

// 

tunggal✔️
non tunggal 
- sama ✔️
- berbeda
munculkan deskripsi tiap item yang bukan tunggal -> hanya memasukkan 1 item ke desciption
1. baca deskripsi item sama atau tidak
2. mengisi deskripsi per item sesuai index
3. menampilkan detail tiap item 

//

melakukan edit item
1. edit item tunggal
