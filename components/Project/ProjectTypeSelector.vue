<script setup lang="ts">
  import LinkButton from '@/components/Button/LinkButton.vue'
  import type { Type } from '~/types'

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
    <LinkButton
      url="/portfolio"
      label="All"
      :isDisabled="selected === 'all' ? true : false" />
    <LinkButton
      v-for="projectType in types"
      :url="`/portfolio/${projectType.id}`"
      :label="projectType.name"
      :isDisabled="selected == projectType.id ? true : false" />
  </span>
</template>

<style scoped>
.p-buttonset {
  display: flex;
  justify-content: center;
}
</style>
