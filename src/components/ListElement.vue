<template>
  <div class="box">
    <a href="https://google.com"><img class="image" :src="imgPath" alt="Item Image"/></a>
    <p>
      {{ title }}
    </p>
    <p>
      {{ brand_id }}
    </p>
    <p>
      {{ regular_price.value + " " + regular_price.currency }}
    </p>
    <button class="button">Add To Cart</button>
  </div>
</template>

<script>
export default {
  name: "ListElement",
  props: {
    item: Object
  },
  data() {
    return {
      type: this.item.type,
      id: this.item.id,
      sku: this.item.sku,
      title: this.item.title,
      regular_price: {
        currency: this.item.regular_price.currency,
        value: this.item.regular_price.value
      },
      image: this.item.image,
      brand_id: this.item.brand_id
    }
  },
  methods: {

  },
  computed: {
    imgPath() {
      if(!this.image.includes("http")) {
        let images = require.context('../assets/', false, /\.png$/);
        return images('./' + this.image + ".png");
      }
      return this.image;
    }
  }
}
</script>

<style scoped>
.box {
  border: black 1px solid;
  padding: 1rem;
  margin: 0.5rem;
  display: inline-block;
}

.image {
  height: 10rem;
  width: 10rem;
}

.button {
  padding: 0.5rem 1rem;
  background: white;
  border: 1px #333 solid;
  text-decoration: none;
  width: 100%;
}

.button:hover {
  background-color: #333;
  color: white;
}
</style>