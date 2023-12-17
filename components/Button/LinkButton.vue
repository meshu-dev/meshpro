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
  <Button v-if="url" >
    <NuxtLink :to="url" target="_blank">{{ label }}</NuxtLink>
  </Button>
</template>
