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
      <li v-for="item in items" :key="item.index">
        <span> <img class="image" :src="item.image" alt="img of item"> </span>
        <span class="name"> {{ item.name }} </span>
        <span class="price"> {{ item.price }}$</span>
        <span class="number"> <input type="number" @click="emitTotalPrice" v-model="item.quantity" min="1" style="width: 3rem"> </span>
        <span class="item-total-price"> {{ calculatePriceOfItem(item) }} </span>
        <span class="item-button"> <button @click="deleteItem(item.index)" class="button" name="Delete">Delete</button> </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BasketTable",
  props: {
    initialItems: Object,
  },
  data() {
    return {
      items: this.initialItems
    }
  },
  methods: {
    deleteItem(idx) {
      idx
      console.log(idx);
    },
    calculatePriceOfItem(item) {
      return item.price * item.quantity;
    },
    emitTotalPrice() {
      this.$emit('quantity-change', this.totalPrice);
    }
  },
  computed: {
    totalPrice() {
      let total = 0;
      this.items.forEach((el) => total += (el.price * el.quantity))

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
  padding: 0 5rem;
  margin: 0;

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
  height: 7rem;
  width: 7rem;
}

.name {
  width: 40%;
  padding-left: 1rem;
}

.price, .number, .item-button, .item-total-price{
  width: 12%;
}

.total-price {
  position: absolute;
  right: 10rem;
  width: 20rem;
  margin-top: 3rem;
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