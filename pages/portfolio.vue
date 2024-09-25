<script setup lang="ts">
import ProjectBlock from '@/components/Project/ProjectBlock.vue'
import { getProjects } from '@/services/api'
import type { Project } from '~/types'

const projects: Ref<Project[] | null> = ref(
  await getProjects() || null
)
</script>

<template>
  <div class="flex flex-wrap justify-between mt-10 gap-x-16 max-xl:justify-around max-xl:gap-y-16">
    <ProjectBlock v-for="project in projects" :project="project" />
  </div>
</template>
