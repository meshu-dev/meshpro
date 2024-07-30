<template>
  <NuxtLink id="logo" to="/">
    <span class="second-colour">
      <font-awesome-icon id="logo-icon" icon="fa-solid fa-code" size="xl" />
    </span>
    <span id="logo-text" class="p-button p-component p-button-link">Mesh&nbsp;Pro</span>
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
.second-colour {
  color: #8dd0ff;
}
</style>
