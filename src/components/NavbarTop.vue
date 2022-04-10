<template>
  <div class="topnav">
    <router-link class="logo" to="/"><img class="image" :src="indexImg" alt="logo"></router-link>
    <ul class="buttons">
      <li>
        <router-link to="/store" :class="{ active: this.store }" @click="changeActive('store')" style="margin-right: 0.3rem">Store</router-link>
      </li>
      <li>
        <router-link to="/basket" :class="{ active: this.basket }" @click="changeActive('basket')">Shopping Cart</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "NavbarTop",
  data() {
    return {
      indexImg: require('@/assets/pics/logo.png'),
      basket: false,
      store: false
    }
  },
  methods: {
    changeActive(active) {
      if(active === 'store') {
        this.store = true;
        this.basket = false;
      }
      else if(active === 'basket') {
        this.store = false
        this.basket = true;
      }
    }
  }

}
</script>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
  width: 100%;
  position: relative;
}

/* Style the links inside the navigation bar */
.topnav a {
  color: #f2f2f2;
  text-align: center;
  padding: 0.7rem 1.1rem;
  text-decoration: none;
  font-size: 1.1rem;
  border: 1px solid #f2f2f2;
}
/* Change the color of links on hover */
.topnav a:hover {
  background-color: #ddd;
  color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
  background-color: #ddd;
  color: black;
}

.topnav .logo {
  border: none;
  padding: 0;
  margin: 0;
}

.topnav .logo:hover {
  background-color: inherit;
}

li {
  display: inline;
}

.buttons {
  right: 1rem;
  vertical-align: middle;
  margin: 0;
  position: absolute;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.image {
  float:left;
  height: 3rem;
  width: 3rem;
  padding: 1rem 2rem;
}
</style>