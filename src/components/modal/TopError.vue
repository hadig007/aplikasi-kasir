<template>
  <div class="top-error">
    <h5>
      <i class="fa-solid fa-xmark fa-2x"></i>
      Error : Pastikan semua inputan sesuai!
    </h5>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.top-error {
  position: absolute;
  width: 100vw;
  height: 30px;
  top: 0;
  left: 0;
  background-color: #DE1041;
  padding: 0.5rem 2rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: azure;
}
i{
    margin: 0 1rem;
}
h5{
    display: flex;flex-direction: row;align-items: center;
}
</style>

