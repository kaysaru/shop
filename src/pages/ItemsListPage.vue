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
      brands: [
        {
          id: 1,
          title: 'Brand 1',
          sort: '100',
          code: "brand_1"
        },
        {
          id: 2,
          title: 'Brand 2',
          sort: '200',
          code: "brand_2"
        }
      ],
      items: [
        {
          type: 'simple',
          id: 1,
          sku: 's1',
          title: 'Product 1',
          regular_price: {
            currency: 'USD',
            value: 27.12
          },
          image: 'logo',
          brand_id: 2
        },
        {
          type: 'simple',
          id: 2,
          sku: 's2',
          title: 'Product 2',
          regular_price: {
            currency: 'USD',
            value: 35.46
          },
          image: 'logo_1',
          brand_id: 1
        },
        {
          type: 'simple',
          id: 3,
          sku: 's3',
          title: 'Product 3',
          regular_price: {
            currency: 'USD',
            value: 40.0
          },
          image: 'logo_1',
          brand_id: 1
        },
        {
          type: 'simple',
          id: 4,
          sku: 's4',
          title: 'Product 4',
          regular_price: {
            currency: 'USD',
            value: 5.46
          },
          image: 'logo_1',
          brand_id: 2
        },
        {
          type: 'simple',
          id: 5,
          sku: 's5',
          title: 'Product 5',
          regular_price: {
            currency: 'USD',
            value: 100.43
          },
          image: 'logo',
          brand_id: 2
        },
        {
          type: 'simple',
          id: 6,
          sku: 's6',
          title: 'Product 6',
          regular_price: {
            currency: 'USD',
            value: 13.43
          },
          image: 'logo',
          brand_id: 2
        }
      ],
      filtered_items: [],
      compKey: 0
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
        let filter = this.selectedBrand.id;
        console.log(filter, this.selectedBrand.id);
        console.log(this.items.filter(el => el.brand_id === this.selectedBrand.id));
        return this.items.filter(el => el.brand_id === this.selectedBrand.id);
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