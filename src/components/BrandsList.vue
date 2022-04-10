<template>
  <div class="brand">
    <ul class="list" id="brandsList">
      <li v-for="brand in brands" :key="brand.id" @click="underline(brand)">{{ brand.title }}</li>
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
    underline(item) {
      let idx = item.id - 1;
      let _brands = document.getElementById("brandsList").getElementsByTagName('li');
      for(let i = 0; i < _brands.length; ++i) {
        if(i === idx) _brands[i].style.textDecorationLine = 'underline';
        else _brands[i].style.textDecorationLine = 'none';
      }
      this.$emit('selected-brand', item);
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

li.active {
  text-decoration-line: underline;
}

.brand {
  border: 1px black solid;
  margin: 0.5rem;
}
</style>
