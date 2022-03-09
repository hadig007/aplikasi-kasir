<template>
    <div class="laporan">
        <header-app class="header"></header-app>
        <div class="content">
            <li>Penjualan hari ini</li>
            <li>stok terlaris hari ini</li>
            <h1>Laporan</h1>
        </div>
    </div>
</template>

<script>
import HeaderApp from '../header/HeaderApp.vue'
export default {
    components : {
        HeaderApp
    }
}
</script>

<style scoped>
/* header 5vh */
/* content 95vh */
.laporan{
    display: flex;
    flex-direction: column;
    background-color: #F5F5F5;
}
.content{
    height: 95vh;
    padding: 1rem;
    /* display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; */
    overflow: auto;
}
h1{
    position: absolute;
    left: 45%;
    right: 20%;
    top: 30%;
    font-size: 5rem;
    color: rgb(187, 187, 187);
}
</style>