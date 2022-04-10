<template>
  <div class="topnav">
    <img class="image" :src="indexImg" alt="logo">
    <div class="buttons">
      <router-link to="/store" style="margin-right: 0.3rem">Store</router-link>
      <router-link to="/basket">Shopping Cart</router-link>
    </div>

  </div>
</template>

<script>
export default {
  name: "NavbarTop",
  data() {
    return {
      indexImg: require('@/assets/pics/logo.png')
    }
  }

}
</script>

<style scoped>
/* Add a black background color to the top navigation */
.topnav {
  background-color: #333;
  overflow: hidden;
  position: absolute;
  width: 100%;
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
  background-color: #04AA6D;
  color: white;
}

.buttons {
  position: absolute;
  right: 1rem;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
}

.image {
  height: 3rem;
  width: 3rem;
  padding: 1rem 2rem;
  vertical-align: middle;
}
</style>