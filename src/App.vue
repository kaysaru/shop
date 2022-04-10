<template>
  <NavbarTop/>
  <router-view/>
</template>

<script>
import NavbarTop from "@/components/NavbarTop";

export default {
  name: 'App',
  components: {
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

a, a:visited, a:hover, a:active {
  color: inherit;
}


</style>
