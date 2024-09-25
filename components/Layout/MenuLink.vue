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
    <span class="px-3 py-2 text-2xl text-sky-600">{{ label }}</span>
  </NuxtLink>
</template>
