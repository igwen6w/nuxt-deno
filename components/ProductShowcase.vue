<script setup lang="ts">
import { ref } from 'vue'

const products = [
  {
    id: 1,
    image: '/images/product1.jpg',
    title: '产品1',
    description: '产品1描述'
  },
  {
    id: 2,
    image: '/images/product2.jpg', 
    title: '产品2',
    description: '产品2描述'
  },
  {
    id: 3,
    image: '/images/product3.jpg',
    title: '产品3',
    description: '产品3描述'
  }
]

const activeProduct = ref(0)

function setActive(index: number) {
  activeProduct.value = index
}
</script>

<template>
  <div class="product-showcase">
    <div 
      v-for="(product, index) in products"
      :key="product.id"
      class="product"
      :class="{ 
        active: index === activeProduct,
        left: index < activeProduct,
        right: index > activeProduct
      }"
      @click="setActive(index)"
    >
      <img :src="product.image" :alt="product.title">
      <div class="content">
        <h3>{{ product.title }}</h3>
        <p>{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-showcase {
  display: flex;
  gap: 16px;
  height: 400px;
  margin: 2rem 0;
}

.product {
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
}

.product img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.product .content {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 1rem;
  transform: translateY(100%);
  transition: transform 0.3s ease;
}

.product:hover .content {
  transform: translateY(0);
}

.product.active {
  flex: 2;
}

.product:not(.active) {
  flex: 1;
}
</style>
