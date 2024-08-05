<script setup lang="ts">
import ProjectBlock from '@/components/Project/ProjectBlock.vue'
import { getProjects } from '@/services/api'
import type { Project } from '~/types'

const projects: Ref<Project[] | null> = ref(
  await getProjects() || null
)
</script>

<template>
  <div id="project-list">
    <ProjectBlock v-for="project in projects" :project="project" />
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
