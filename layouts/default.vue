<script setup lang="ts">
import AppHeader from '@/components/Layout/AppHeader';
import AppFooter from '@/components/Layout/AppFooter';
</script>

<template>
  <div id="main">
    <AppHeader />
    <slot />
  </div>
  <AppFooter />
</template>
