<template>
  <div class="brand">
    <ul class="list" id="brandsList">
      <li v-for="(brand, index) in brands" :key="brand.id" @click="underline(brand, index)">{{ brand.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BrandsList",
  props: {
    initialBrands: Object
  },
  data() {
    return {
      brands: this.initialBrands
    }
  },
  methods: {
    underline(brnd, bIndex) {
      console.log(brnd, bIndex);
      let _brands = document.getElementById("brandsList").getElementsByTagName('li');
      for(let i = 0; i < _brands.length; ++i) {
        if(i === bIndex) _brands[i].style.textDecorationLine = 'underline';
        else _brands[i].style.textDecorationLine = 'none';
      }
      this.$emit('selected-brand', brnd);
    }
  }
}
</script>

<style scoped>
.list {
  list-style: none;
  padding-inline-start: 0;
  padding: 0 1rem;
}

.brand {
  border: 1px black solid;
  margin: 0.5rem;
}
</style>
