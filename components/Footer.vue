<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h4>快速导航</h4>
          <nav class="footer-nav">
            <ul>
              <li><NuxtLink to="/">首页</NuxtLink></li>
              <li><NuxtLink to="#about">关于我们</NuxtLink></li>
              <li><NuxtLink to="#services">服务</NuxtLink></li>
              <li><NuxtLink to="#contact">联系我们</NuxtLink></li>
            </ul>
          </nav>
        </div>
        <div class="footer-section">
          <h4>联系我们</h4>
          <p>电话: 123-456-7890</p>
          <p>邮箱: info@company.com</p>
          <p>地址: 北京市朝阳区某某路123号</p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2023 公司名称. 保留所有权利.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.footer {
  background: #333;
  color: white;
  padding: 40px 0 20px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin-bottom: 40px;
}

.footer-section h4 {
  margin-bottom: 20px;
  color: #fff;
}

.footer-nav ul {
  list-style: none;
  padding: 0;
}

.footer-nav li {
  margin-bottom: 10px;
}

.footer-nav a {
  color: #ccc;
  text-decoration: none;
}

.footer-nav a:hover {
  color: #007bff;
}

.footer-bottom {
  border-top: 1px solid #444;
  padding-top: 20px;
  text-align: center;
}

.footer-bottom p {
  margin: 0;
  color: #aaa;
  font-size: 0.9rem;
}
</style>
