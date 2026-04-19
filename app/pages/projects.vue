<script setup lang="ts">
  import GitRepoButton from '@/components/GitRepoButton.vue'

  const projects = getProjects()
  console.log('projects', projects)
</script>

<template>
  <div class="flex justify-center">
    <div class="grid grid-cols-2 gap-10">
      <UCard
        v-for="project of projects"
        class="w-130 p-0">
          <div class="flex flex-col w-full">
            <img :src="project.image_url" :alt="project.name" class="flex-1 max-w-full" />
            <div class="p-4">
              <div class="font-semibold text-2xl">{{ project.description }}</div>
              <div class="w-full mt-4 flex justify-between max-sm:flex-col max-sm:gap-8">
                <div class="flex gap-3">
                  <UButton :to="project.url" target="_blank">View</UButton>
                  <GitRepoButton :repositories="project.repositories">View</GitRepoButton>
                </div>
                <div class="flex gap-3">
                  <UBadge
                    v-for="technology of project.technologies"
                    class="text-xl font-normal px-2"
                    color="neutral"
                    variant="outline">
                    {{ technology }}
                  </UBadge>
                </div>
              </div>
            </div>
          </div>
      </UCard>
    </div>
  </div>
</template>
