<script setup lang="ts">
import Card from 'primevue/card'
import Image from 'primevue/image'
import Tag from 'primevue/tag'
import LinkButton from '@/components/Button/LinkButton'
import GitRepoButton from '@/components/Button/GitRepoButton'
import type { Project } from '@/types'

type Props = {
  project: Project | null
}

const props = withDefaults(defineProps<Props>(), {
  project: null
})

const placeholderUrl: string = 'https://placehold.co/650x350'
</script>

<template>
  <Card v-if="props.project">
    <template #header>
      <Image imageClass="project-block-image" :src="props.project.imageUrl ?? placeholderUrl" alt="Image" />
    </template>
    <template #title>
      {{ props.project.description }}
    </template>
    <template #content>
      <div class="card-content-buttons">
        <LinkButton :url="props.project.url" label="View" :isRounded="true" :isNewTabLink="true" />
        <GitRepoButton :repositories="props.project.repositories" />
      </div>
      <div class="card-content-technologies">
        <Tag v-for="technology of props.project.technologies" :value="technology.name" />
      </div>
    </template>
  </Card>
</template>

<style scoped>
.p-card img {
  border-radius: 6px;
}

.p-card {
  max-width: 650px;
}

.p-card::v-deep .p-card-title {
  display: flex;
  align-items: center;
  gap: 12px;
}

.p-card::v-deep .p-card-content {
  display: flex;
  justify-content: space-between;
}

.p-card::v-deep .project-block-image {
  width: 650px;
}

.card-content-buttons {
  display: flex;
  gap: 8px;
}

.card-content-technologies {
  display: flex;
  align-items: center;
  gap: 10px;
}

.p-tag {
  background-color: #FFF;
  height: 25px;
}

@media (max-width: 1440px) {

  .p-card,
  .p-card::v-deep .project-block-image {
    max-width: 500px;
  }
}

@media (max-width: 1200px) {

  .p-card,
  .p-card::v-deep .project-block-image {
    max-width: 650px;
  }
}

@media (max-width: 775px) {

  .p-card,
  .p-card::v-deep .project-block-image {
    max-width: 500px;
  }
}
</style>
