<script setup lang="ts">
  type Props = {
    icon: string
    url: string
  }

  const props = withDefaults(defineProps<Props>(), {
    icon: '',
    url: ''
  })
</script>

<template>
  <NuxtLink :to="props.url" target="_blank">
    <font-awesome-icon :icon="props.icon" size="2xl" />
  </NuxtLink>
</template>
