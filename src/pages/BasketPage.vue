<template>
  <div>
    <div class="container">
      <h1>Shopping Cart</h1>
      <BasketTable :initial-items="items" @quantity-change="calculateTotal"/>
      <div class="total-price"><h1>Subtotal: {{ totalPrice }}</h1></div>
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
      totalPrice: 0.0,
      items: [
        {
          image: 'https://picsum.photos/200/300',
          index: 1,
          name: 'Kaysar',
          quantity: 2,
          price: 100
        },
        {
          image: 'https://picsum.photos/200/300',
          index: 2,
          name: 'Damir',
          quantity: 3,
          price: 50
        }
      ]
    }
  },
  methods: {
    calculateTotal(data) {
      this.totalPrice = data;
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
</style>