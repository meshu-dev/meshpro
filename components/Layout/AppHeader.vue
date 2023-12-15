<script setup lang="ts">
  import MenuLink from '@/components/Layout/MenuLink'
</script>

<template>
  <header>
    <MenuLink label="Mesh" url="/" />
    <nav>
      <MenuLink label="About" url="/about" />
      <MenuLink label="Projects" url="/projects" />
      <MenuLink label="Contact" url="/contact" />
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  margin: 20px 0 100px;
  font-size: 25px;
}

header nav {
  display: flex;
  gap: 20px;
}
</style>
