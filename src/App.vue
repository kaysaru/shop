<template>
<!--  <img alt="Vue logo" src="./assets/logo.png">-->
  <NavbarTop/>

  <router-view/>

<!--  <ListElement/>-->
<!--  <ListElement/>-->
<!--  <BasketTable :initial-items="items" @quantity-change="updateTotal"/>-->
<!--  {{ total }}-->
</template>

<script>
// import ListElement from "@/components/ListElement";
// import BasketTable from "@/components/BasketTable";
import NavbarTop from "@/components/NavbarTop";

export default {
  name: 'App',
  components: {
    // ListElement,
    // BasketTable,
    NavbarTop
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

body {
  margin: 0 !important;
  padding: 0 !important;
}

.container {
  margin: 1rem 2rem;
  padding: 1rem;
}

</style>
