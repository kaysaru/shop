<template>
  <div class="start">
    <div class="text">
      <h1>Shop</h1>
      <p>Lorem ipsum dolor sit amet</p>
      <router-link class="button" to="/store">Enter Shop</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage"
}
</script>

<style scoped>
.start {
  height: 85vh;
}

.text {
  text-align: center;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}

.text * {
  display: block;
}

.button {
  margin: 1rem;
  padding: 0.5rem 1rem;
  background: white;
  border: 1px #333 solid;
  text-decoration: none;
}

.button:hover {
  background-color: #333;
  color: white;
}
</style>