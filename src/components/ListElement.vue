<template>
  <div class="box">
    <a href="https://google.com"><img class="image" :src="imgPath" alt="Item Image"/></a>
    <p>
      {{ productName }}
    </p>
    <p>
      {{ price }}
    </p>
  </div>
</template>

<script>
export default {
  name: "ListElement",
  data() {
    return {
      imageName: 'https://picsum.photos/200/300',
      productName: '123',
      brand: 'Kaysar',
      price: 0.0
    }
  },
  methods: {

  },
  computed: {
    imgPath() {
      if(!this.imageName.includes("http")) {
        let images = require.context('../assets/', false, /\.png$/);
        return images('./' + this.imageName + ".png");
      }
      return this.imageName;
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
</style>