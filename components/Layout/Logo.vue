<template>
  <NuxtLink id="logo" to="/">
    <font-awesome-icon id="logo-icon" icon="fa-solid fa-code" size="xl" />
    <span id="logo-text" class="p-button p-component p-button-link">Mesh</span>
  </NuxtLink>
</template>

<style scoped>
#logo {
  display: flex;
  align-items: center;
}
#logo-icon {
  color: #FFF;
}
#logo-text {
  font-family: 'Bebas Neue', sans-serif;
  color: #FFF;
  font-size: 40px;
  letter-spacing: 2px;
  margin-top: 2px;
}
</style>
