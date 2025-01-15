<template>
  <div class="about-page">
    <Header />
    
    <main class="about-content">
      <section class="hero-section">
        <div class="container">
          <h1>关于我们</h1>
          <p class="subtitle">我们的故事与使命</p>
        </div>
      </section>

      <section class="history-section">
        <div class="container">
          <div class="content-wrapper">
            <div class="text-content">
              <h2>公司历史</h2>
              <p>我们成立于2010年，最初是一家小型创业公司...</p>
              <p>经过多年的发展，我们已经成长为行业领先的企业...</p>
            </div>
            <img src="https://placehold.co/600x400" alt="公司历史图片" class="history-image">
          </div>
        </div>
      </section>

      <section class="mission-section">
        <div class="container">
          <h2>我们的使命</h2>
          <div class="mission-grid">
            <div class="mission-card">
              <img src="https://placehold.co/100x100" alt="使命图标">
              <h3>创新</h3>
              <p>持续推动技术创新，为客户提供最佳解决方案</p>
            </div>
            <div class="mission-card">
              <img src="https://placehold.co/100x100" alt="使命图标">
              <h3>质量</h3>
              <p>坚持高标准，确保每个项目都达到卓越品质</p>
            </div>
            <div class="mission-card">
              <img src="https://placehold.co/100x100" alt="使命图标">
              <h3>服务</h3>
              <p>以客户为中心，提供优质的服务体验</p>
            </div>
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
</script>

<style scoped>
.about-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.about-content {
  flex: 1;
}

.hero-section {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(&#x27;https://placehold.co/1200x400&#x27;);
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 0;
  text-align: center;
}

.hero-section h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.8;
}

.history-section {
  padding: 60px 0;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.history-image {
  width: 100%;
  border-radius: 8px;
}

.mission-section {
  background: #f5f5f5;
  padding: 60px 0;
}

.mission-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.mission-card {
  background: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.mission-card img {
  margin-bottom: 20px;
}

.mission-card h3 {
  margin-bottom: 15px;
  color: #333;
}

@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }

  .mission-grid {
    grid-template-columns: 1fr;
  }
}
</style>
