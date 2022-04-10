<template>
  <div>
    <div class="container">
      <h1>Shopping Cart</h1>
      <BasketTable @quantity-change="calculateTotal"/>
      <div class="total-price" v-if="!isNaN(totalPrice) & totalPrice !== 0">
        <h1>Subtotal: {{ totalPrice.toPrecision(4) }}</h1>
        <button class="button" @click="alertBuy">Buy</button>
      </div>
    </div>
  </div>
</template>

<script>
import BasketTable from "@/components/BasketTable";
export default {
  name: "BasketPage",
  components: {
    BasketTable
  },
  data() {
    return {
      totalPrice: 0.0
    }
  },
  methods: {
    calculateTotal(data) {
      this.totalPrice = data;
    },
    alertBuy() {
      alert(this.totalPrice.toPrecision(4) + ' is taken from your bank account');
    }
  }
}
</script>

<style scoped>
.total-price {
  margin-top: 3rem;
  padding-right: 3rem;
  text-align: right;
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