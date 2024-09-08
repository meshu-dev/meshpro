<script setup lang="ts">
  import Logo from '@/components/Layout/Logo'
  import MenuLink from '@/components/Layout/MenuLink'
</script>

<template>
  <header>
    <Logo />
    <nav>
      <MenuLink label="About" url="/about" />
      <MenuLink label="Portfolio" url="/portfolio" />
      <MenuLink label="Contact" url="/contact" />
    </nav>
  </header>
</template>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0 100px;
  font-size: 25px;
}

header nav {
  display: flex;
  gap: 20px;
}

#logo {
  font-family: 'Roboto', sans-serif;
}

@media (max-width: 775px) {
  header {
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
}
</style>

