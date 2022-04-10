<template>
  <div class="item">
    <ul class="list">
      <li style="border: none;">
        <span style="width: 7rem"></span>
        <span class="name"> Name </span>
        <span class="price"> Price </span>
        <span class="number"> Quantity </span>
        <span class="item-total-price"> Total </span>
        <span class="item-button"> Delete </span>
      </li>

      <li v-for="item in items" :key="item.id">
        <span> <img class="image" :src="imgPath(item)" alt="img of item"> </span>
        <span class="name"> {{ getBrandNameById(item.brand_id) + ' | ' + item.title }} </span>
        <span class="price"> {{ item.regular_price.value + " " + item.regular_price.currency }}</span>
        <span class="number"> <input type="number" @click="emitTotalPrice" v-model="item.quantity" min="1" style="width: 3rem"> </span>
        <span class="item-total-price"> {{ (isNaN(calculatePriceOfItem(item))) ? 0.0 : calculatePriceOfItem(item).toPrecision(4) }} </span>
        <span class="item-button"> <button @click="deleteItem(item.id)" class="button" name="Delete">Delete</button> </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BasketTable",
  data() {
    return {
      items: this.$store.state.cart
    }
  },
  methods: {
    deleteItem(idx) {
      for(let i = 0; i < this.items.length; ++i) {
        if(this.items[i].id === idx) {
          this.$store.commit('removeFromCart', this.items[i]);
        }
      }
    },
    calculatePriceOfItem(item) {
      return item.regular_price.value * item.quantity;
    },
    imgPath(item) {
      if(!item.image.includes("http")) {
        let images = require.context('../assets/', false, /\.png$/);
        return images('./' + item.image + ".png");
      }
      return item.image;
    },
    getBrandNameById(brandId) {
      for(let i = 0; i < this.$store.state.brands.length; ++i) {
        if (parseInt(this.$store.state.brands[i].id) === brandId) {
          return this.$store.state.brands[i].title;
        }
      }
      return 'Unknown Brand';
    },
    emitTotalPrice() {
      this.$emit('quantity-change', this.totalPrice);
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.items.forEach((el) => total += (el.regular_price.value * el.quantity))

      return total;
    }
  }
}
</script>

<style scoped>
.item {
  display: block;
  width: 100%;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
  overflow: hidden;

}

li {
  width: 100%;
  padding: 1rem;
  border-bottom: 1px black solid;
  overflow: hidden;
}

span {
  display: inline-block;
  vertical-align: middle;
  line-height: normal;
}

.image {
  height: 5rem;
  width: 5rem;
}

.name {
  width: 40%;
  padding-left: 1rem;
}

.price, .number, .item-button, .item-total-price{
  width: 12%;
}

.button {
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