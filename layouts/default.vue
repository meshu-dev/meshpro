<script setup lang="ts">
import AppHeader from '@/components/Layout/AppHeader';
import AppFooter from '@/components/Layout/AppFooter';
</script>

<template>
  <div class="w-[1280px] min-h-[70vh] mx-auto mb-10 p-10 max-[1440px]:w-full">
    <AppHeader />
    <slot />
  </div>
  <AppFooter />
</template>
