<script setup lang="ts">
import Card from 'primevue/card'
import Image from 'primevue/image'
import Tag from 'primevue/tag'
import LinkButton from '@/components/Button/LinkButton.vue'
import GitRepoButton from '@/components/Button/GitRepoButton.vue'
import type { Project } from '@/types'
import { ImageEnum } from '@/enums/image'

type Props = {
  project: Project | null
}

const props = withDefaults(defineProps<Props>(), {
  project: null
})
</script>

<template>
  <Card v-if="props.project" class="max-w-[640px] rounded rounded-xl max-[1440px]:max-w-[500px] max-[1200px]:max-w-[650px] max-[775px]:max-w-[500px]">
    <template #header>
      <Image imageClass="w-[550px] rounded rounded-t-xl" :src="props.project.image ?? ImageEnum.Project" alt="Image" />
    </template>
    <template #title>
      {{ props.project.description }}
    </template>
    <template #content>
      <div class="w-full flex justify-between max-sm:flex-col max-sm:gap-8">
        <div class="flex gap-2">
          <LinkButton :url="props.project.url" label="View" :isRounded="true" :isNewTabLink="true" />
          <GitRepoButton :repositories="props.project.repositories" />
        </div>
        <div class="flex items-center gap-3">
          <Tag v-for="technology of props.project.technologies" :value="technology" class="bg-white h-6 text-xl font-normal px-2 py-4" />
        </div>
      </div>
    </template>
  </Card>
</template>
