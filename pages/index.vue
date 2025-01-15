<template>
  <div class="homepage">
    <Header />

    <section class="hero">
      <div class="container">
        <h1>欢迎来到我们的企业</h1>
        <p>我们提供专业的解决方案，助力您的业务增长</p>
        <a href="#services" class="cta-button">了解我们的服务</a>
      </div>
    </section>

    <section id="about" class="about-section">
      <div class="container">
        <h2>关于我们</h2>
        <p>我们是一家致力于为客户提供优质服务的企业...</p>
      </div>
    </section>

    <section id="services" class="services-section">
      <div class="container">
        <h2>我们的服务</h2>
        <div class="services-grid">
          <div class="service-card">
            <h3>服务1</h3>
            <p>服务1的描述...</p>
          </div>
          <div class="service-card">
            <h3>服务2</h3>
            <p>服务2的描述...</p>
          </div>
          <div class="service-card">
            <h3>服务3</h3>
            <p>服务3的描述...</p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" class="contact-section">
      <div class="container">
        <h2>联系我们</h2>
        <form class="contact-form">
          <div class="form-group">
            <label for="name">姓名</label>
            <input type="text" id="name" required>
          </div>
          <div class="form-group">
            <label for="email">邮箱</label>
            <input type="email" id="email" required>
          </div>
          <div class="form-group">
            <label for="message">留言</label>
            <textarea id="message" rows="5" required></textarea>
          </div>
          <button type="submit">发送</button>
        </form>
      </div>
    </section>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

// 这里可以添加页面逻辑
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.header {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.logo img {
  height: 50px;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.hero {
  background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(&#x27;https://placehold.co/1200x600&#x27;);
  background-size: cover;
  background-position: center;
  color: white;
  padding: 100px 0;
  text-align: center;
}

.cta-button {
  display: inline-block;
  padding: 12px 24px;
  background: #007bff;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  margin-top: 20px;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  margin-top: 40px;
}

.service-card {
  background: #f5f5f5;
  padding: 20px;
  border-radius: 8px;
}

.contact-form {
  max-width: 600px;
  margin: 0 auto;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.footer {
  background: #333;
  color: white;
  text-align: center;
  padding: 20px 0;
  margin-top: 60px;
}
</style>
