<script setup lang="ts">
import { ref } from 'vue'

const slides = [
  {
    id: 1,
    image: '/images/slide1.jpg',
    title: 'Slide 1',
    description: 'First slide description'
  },
  {
    id: 2, 
    image: '/images/slide2.jpg',
    title: 'Slide 2',
    description: 'Second slide description'
  },
  {
    id: 3,
    image: '/images/slide3.jpg',
    title: 'Slide 3',
    description: 'Third slide description'
  }
]

const activeSlide = ref(0)

function nextSlide() {
  activeSlide.value = (activeSlide.value + 1) % slides.length
}

function prevSlide() {
  activeSlide.value = (activeSlide.value - 1 + slides.length) % slides.length
}
</script>

<template>
  <div class="carousel">
    <div class="slides" :style="{ transform: `translateX(calc(-100% * ${activeSlide}))` }">
      <div 
        v-for="(slide, index) in slides"
        :key="slide.id"
        class="slide"
        :class="{ active: index === activeSlide }"
      >
        <img :src="slide.image" :alt="slide.title">
        <div class="content">
          <h3>{{ slide.title }}</h3>
          <p>{{ slide.description }}</p>
        </div>
      </div>
    </div>
    
    <button class="prev" @click="prevSlide">&lt;</button>
    <button class="next" @click="nextSlide">&gt;</button>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease;
}

.slide {
  min-width: 100%;
  position: relative;
}

.slide img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.slide .content {
  position: absolute;
  bottom: 20px;
  left: 20px;
  color: white;
  background: rgba(0, 0, 0, 0.5);
  padding: 1rem;
  border-radius: 4px;
}

.active {
  transform: translateX(0);
}

.prev, .next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 2;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}
</style>
