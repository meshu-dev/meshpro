<script setup lang="ts">
  type Props = {
    label: string | null
    url: string | null
  }

  const props = withDefaults(defineProps<Props>(), {
    label: null,
    url: null
  })
</script>

<template>
  <NuxtLink v-if="label && url" :to="url">
    <span class="p-button p-component p-button-link">{{ label }}</span>
  </NuxtLink>
</template>

<style scoped>
.p-button {
  font-size: 25px;
}
</style>
