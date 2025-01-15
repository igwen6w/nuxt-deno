<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="https://placehold.co/200x50" alt="Company Logo">
      </div>
      <nav class="nav">
        <ul>
          <li><NuxtLink to="/">首页</NuxtLink></li>
          <li><NuxtLink to="#about">关于我们</NuxtLink></li>
          <li><NuxtLink to="#services">服务</NuxtLink></li>
          <li><NuxtLink to="#contact">联系我们</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
// 组件逻辑
</script>

<style scoped>
.header {
  background: #fff;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo img {
  height: 50px;
}

.nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}

.nav a {
  text-decoration: none;
  color: #333;
  font-weight: 500;
}

.nav a:hover {
  color: #007bff;
}
</style>
