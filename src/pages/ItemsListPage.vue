<template>
  <div class="container">
    <h1>Catalog</h1>
    <div class="brands">
      <BrandsList :initial-brands="brands" @selected-brand="setActiveBrand"/>
    </div>
    <div class="items">
      <ListElement v-for="(item, index) in items" :key="item.id" :item="items[index]"/>
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
        }
      ]
    }
  },
  methods: {
    setActiveBrand(data) {
      //console.log("data", data);
      this.selectedBrand = data;
    }
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