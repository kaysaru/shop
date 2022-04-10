<template>
  <div class="container">
    <h1>Catalog <span v-if="selectedBrand != null"> - {{ selectedBrand.title }}</span></h1>
    <div class="brands">
      <BrandsList :initial-brands="brands" @selected-brand="setActiveBrand"/>
      <button @click="resetFilter" style="margin: 0.5rem">Reset filter</button>
    </div>
    <div class="items">
      <ListElement v-for="item in filterArray()" :key="item.id" :item="item"/>
    </div>
  </div>
</template>

<script>
import ListElement from "@/components/ListElement";
import BrandsList from "@/components/BrandsList";
export default {
  name: "ItemsListPage",
  components: {
    BrandsList,
    ListElement
  },
  data() {
    return {
      selectedBrand: null,
      brands: this.$store.state.brands,
      items: this.$store.state.items
    }
  },
  methods: {
    setActiveBrand(data) {
      //console.log("data", data);
      this.selectedBrand = data;
    },
    resetFilter() {
      this.selectedBrand = null;
    },
    filterArray() {
      if (this.selectedBrand != null) {
        return this.items.filter(el => el.brand_id === parseInt(this.selectedBrand.id));
      }
      else return this.items;
    }
  },
  computed: {

  }
}
</script>

<style scoped>

.brands, .items {
  display: inline-block;
}
.brands {
  width: 20%;
  vertical-align: top;
}

.items {
  width: 80%;
  vertical-align: top;
}
</style>