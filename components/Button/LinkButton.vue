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
  <Button v-if="props.url" rounded>
    <NuxtLink :to="props.url" target="_blank">{{ props.label }}</NuxtLink>
  </Button>
</template>
