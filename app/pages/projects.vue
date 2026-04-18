<script setup lang="ts">
  const projects = getProjects()
  console.log('projects', projects)
</script>

<template>
  <div class="flex">
    <UPageCard
      v-for="project of projects"
      :title="project.description"
      orientation="horizontal"
    >
      <img :src="project.image_url" :alt="project.name" class="w-full" />
    </UPageCard>
  </div>
</template>
