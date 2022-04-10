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
  },
  data() {
    return {
      items: [
        {
          image: 'https://picsum.photos/200/300',
          index: 1,
          name: 'Kaysar',
          quantity: 2,
          price: 100
        },
        {
          image: 'https://picsum.photos/200/300',
          index: 2,
          name: 'Damir',
          quantity: 3,
          price: 50
        }
      ],
      total: 0.0
    }
  },
  methods: {
    updateTotal(amount) {
      console.log(amount);
      this.total = amount;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
}

body {
  margin: 0;
}

.container {
  margin-top: 1rem;
}
</style>
