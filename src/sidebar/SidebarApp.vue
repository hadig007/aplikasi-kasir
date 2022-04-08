<template>
  <div class="sidebar">
    <h2>Nama Toko</h2>
    <br>
    <ul>
      <li>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM9 17H7V12H9V17ZM13 17H11V14H13V17ZM13 12H11V10H13V12ZM17 17H15V7H17V17Z"
            fill="white"
          />
        </svg>

        <router-link to="/dashboard">Dashboard</router-link>
      </li>
      <li>
        <svg
          width="20"
          height="19"
          viewBox="0 0 20 19"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18 4H15.82C15.93 3.69 16 3.35 16 3C16 1.34 14.66 0 13 0C11.95 0 11.04 0.54 10.5 1.35L10 2.02L9.5 1.34C8.96 0.54 8.05 0 7 0C5.34 0 4 1.34 4 3C4 3.35 4.07 3.69 4.18 4H2C0.89 4 0.00999999 4.89 0.00999999 6L0 17C0 18.11 0.89 19 2 19H18C19.11 19 20 18.11 20 17V6C20 4.89 19.11 4 18 4ZM13 2C13.55 2 14 2.45 14 3C14 3.55 13.55 4 13 4C12.45 4 12 3.55 12 3C12 2.45 12.45 2 13 2ZM7 2C7.55 2 8 2.45 8 3C8 3.55 7.55 4 7 4C6.45 4 6 3.55 6 3C6 2.45 6.45 2 7 2ZM18 17H2V15H18V17ZM18 12H2V6H7.08L5 8.83L6.62 10L9 6.76L10 5.4L11 6.76L13.38 10L15 8.83L12.92 6H18V12Z"
            fill="white"
          />
        </svg>

        <router-link to="/inventaris">Inventaris</router-link>
      </li>
      <li>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M21 8C19.55 8 18.74 9.44 19.07 10.51L15.52 14.07C15.22 13.98 14.78 13.98 14.48 14.07L11.93 11.52C12.27 10.45 11.46 9 10 9C8.55 9 7.73 10.44 8.07 11.52L3.51 16.07C2.44 15.74 1 16.55 1 18C1 19.1 1.9 20 3 20C4.45 20 5.26 18.56 4.93 17.49L9.48 12.93C9.78 13.02 10.22 13.02 10.52 12.93L13.07 15.48C12.73 16.55 13.54 18 15 18C16.45 18 17.27 16.56 16.93 15.48L20.49 11.93C21.56 12.26 23 11.45 23 10C23 8.9 22.1 8 21 8Z"
            fill="white"
          />
          <path
            d="M15 9L15.94 6.93L18 6L15.94 5.07L15 3L14.08 5.07L12 6L14.08 6.93L15 9Z"
            fill="white"
          />
          <path
            d="M3.5 11L4 9L6 8.5L4 8L3.5 6L3 8L1 8.5L3 9L3.5 11Z"
            fill="white"
          />
        </svg>
        <router-link to="/statistik">Statistik</router-link>
      </li>
      <li>
        <svg
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 0C0.9 0 0.0100002 0.9 0.0100002 2L0 18C0 19.1 0.89 20 1.99 20H14C15.1 20 16 19.1 16 18V6L10 0H2ZM9 7V1.5L14.5 7H9Z"
            fill="white"
          />
        </svg>
        <router-link to="/laporan">Laporan</router-link>
      </li>
      <li>
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 1.9C9.16 1.9 10.1 2.84 10.1 4C10.1 5.16 9.16 6.1 8 6.1C6.84 6.1 5.9 5.16 5.9 4C5.9 2.84 6.84 1.9 8 1.9ZM8 10.9C10.97 10.9 14.1 12.36 14.1 13V14.1H1.9V13C1.9 12.36 5.03 10.9 8 10.9ZM8 0C5.79 0 4 1.79 4 4C4 6.21 5.79 8 8 8C10.21 8 12 6.21 12 4C12 1.79 10.21 0 8 0ZM8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"
            fill="white"
          />
        </svg>
        <router-link to="/profil">Profil</router-link>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.sidebar {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #364F6B;
  /* background: linear-gradient(180deg, #364F6B 0%, rgba(9,9,121,1) 100%, rgba(100,212,255,1) 100%); */
  padding: 1rem;
  overflow-x: hidden;
  color: #caf0f8;
  /* max-width: 165px; */
}
ul {
  margin: 0;
  padding: 0;
}
ul li {
  list-style: none;
  margin-bottom: .8rem;
}
li a {
    color: white;
    text-decoration: none;
    margin: 0 1rem;
}
svg {
  color: white;
  margin-right: .5rem;
  width: 20px;
}

</style>