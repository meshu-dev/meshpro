<script setup lang="ts">
  import Button from 'primevue/button'
  import type { Type } from '@/types'

  type Props = {
    types: Type[] | null
    selected: string | number
  }

  const props = withDefaults(defineProps<Props>(), {
    types: null,
    selected: 'all'
  })
</script>

<template>
  <span class="p-buttonset">
    <Button :disabled="selected === 'all' ? true : false">
      <NuxtLink to="/projects">All</NuxtLink>
    </Button>
    <Button v-for="projectType in types" :disabled="selected == projectType.id ? true : false">
      <NuxtLink :to="`/projects/${projectType.id}`">{{ projectType.name }}</NuxtLink>
    </Button>
  </span>
</template>

<style scoped>
.p-buttonset {
  display: flex;
  justify-content: center;
}
</style>
