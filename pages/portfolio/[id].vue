<script setup>
  import ProjectTypeSelector from '@/components/Project/ProjectTypeSelector'
  import ProjectList from '@/components/Project/ProjectList'
  import { login } from '@/services/auth'
  import { getTypes } from '@/services/type'
  import { getProjectsByType } from '@/services/project'

  const route = useRoute()
  const authData = await login()

  let types    = []
  let projects = []

  if (authData?.token) {
    types = await getTypes(authData.token)
    projects = await getProjectsByType(authData.token, route.params.id)
  }
</script>

<template>
  <ProjectTypeSelector :types="types" :selected="route.params.id" />
  <ProjectList :projects="projects" :hideType="true" />
</template>
