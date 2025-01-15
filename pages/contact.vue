<template>
  <div class="contact-page">
    <Header />

    <section class="contact-hero">
      <div class="container">
        <h1>联系我们</h1>
        <p>我们期待与您沟通</p>
      </div>
    </section>

    <section class="map-section">
      <div class="container">
        <div id="tdt-map" class="map-container"></div>
      </div>
    </section>

    <section class="contact-info">
      <div class="container">
        <div class="info-grid">
          <div class="info-card">
            <h3>地址</h3>
            <p>北京市朝阳区某某路123号</p>
          </div>
          <div class="info-card">
            <h3>电话</h3>
            <p>+86 10 1234 5678</p>
          </div>
          <div class="info-card">
            <h3>邮箱</h3>
            <p>info@company.com</p>
          </div>
        </div>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
onMounted(() => {
  // 天地图API初始化
  const map = new T.Map('tdt-map', {
    projection: 'EPSG:4326'
  })
  
  // 设置中心点和缩放级别
  map.centerAndZoom(new T.LngLat(116.404, 39.915), 12)
  
  // 添加控件
  map.addControl(new T.Control.Zoom())
  map.addControl(new T.Control.Scale())
  
  // 添加标记
  const marker = new T.Marker(new T.LngLat(116.404, 39.915))
  map.addOverLay(marker)
})
</script>

<style scoped>
.contact-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.contact-hero {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://placehold.co/1200x400');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 0;
  text-align: center;
}

.map-container {
  height: 400px;
  width: 100%;
  margin: 40px 0;
  border-radius: 8px;
  overflow: hidden;
}

.contact-info {
  background: #f5f5f5;
  padding: 60px 0;
}

.info-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
}

.info-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

@media (max-width: 768px) {
  .info-grid {
    grid-template-columns: 1fr;
  }
}
</style>
