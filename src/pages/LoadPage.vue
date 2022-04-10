<template>
  <div class="container">
    <div class="brands-load">
      <textarea class="textbox" v-model="brandsJson"></textarea>
      <button @click="parseBrand">Load Brand</button>
    </div>
    <div class="items-load">
      <textarea class="textbox" v-model="itemsJson"></textarea>
      <button @click="parseItem">Load Item</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoadPage",
  data() {
    return {
      brandsJson: ``,
      itemsJson: ``,
      brandObj: [],
      itemObj: []
    }
  },
  methods: {
    parseBrand() {
      this.brandObj = JSON.parse(this.brandsJson);
      this.$store.commit("addBrand", this.brandObj);
      console.log(this.brandObj);
    },
    parseItem() {
      this.itemObj = JSON.parse(this.itemsJson);
      this.$store.commit("addItem", this.itemObj);
      console.log(this.itemObj);
    }
  }

}
</script>

<style scoped>
.brands-load, .items-load {
  display: inline-block;
  text-align: center;
  width: 50%;
}

.brands-load * , .items-load * {
  display: inline-block;
}

.textbox {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
}

</style>