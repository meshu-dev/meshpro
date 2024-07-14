<script setup lang="ts">
import ProjectTypeSelector from '@/components/Project/ProjectTypeSelector'
import ProjectList from '@/components/Project/ProjectList'
import { login } from '@/services/auth'
import { getProjects } from '@/services/api'

let projects: Projects[] | null = await getProjects()
</script>

<template>
  <ProjectList v-if="projects" :projects="projects" />
</template>
