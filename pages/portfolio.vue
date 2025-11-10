<script setup lang="ts">
import ProjectBlock from '@/components/Project/ProjectBlock.vue'
import { getProjects, login } from '@/services/api'
import type { Auth, Project } from '~/types'

const auth: Ref<Auth | null> = ref(
  await login() || null
)

const projects: Ref<Project[] | null> = ref(
  auth.value?.token ? await getProjects(auth.value.token) : null
)
</script>

<template>
  <div class="flex flex-wrap justify-between mt-10 gap-x-16 max-xl:justify-around max-xl:gap-y-16">
    <ProjectBlock v-for="project in projects" :project="project" />
  </div>
</template>
