<script setup lang="ts">
  import { useRecaptchaProvider } from 'vue-recaptcha'
  useRecaptchaProvider()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
