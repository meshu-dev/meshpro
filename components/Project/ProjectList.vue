<script setup lang="ts">
import ProjectBlock from '@/components/Project/ProjectBlock'
import type { Project } from '@/types'

type Props = {
  projects: Project[] | null
}

const props = withDefaults(defineProps<Props>(), {
  projects: null,
  hideType: false
})

console.log('props.projects', props.projects)
</script>

<template>
  <div id="project-list">
    <ProjectBlock v-for="project in props.projects" :project="project" />
  </div>
</template>

<style scoped>
#project-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 40px;
  row-gap: 60px;
}

@media (max-width: 1440px) {
  #project-list {
    justify-content: space-around;
  }
}
</style>
