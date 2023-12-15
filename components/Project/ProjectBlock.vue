<script setup lang="ts">
  import Card from 'primevue/card'
  import Image from 'primevue/image'
  import Chip from 'primevue/chip'
  import Menu from 'primevue/menu'
  import GitRepoButton from '@/components/Button/GitRepoButton'
  import type { Project } from '@/types'

  type Props = {
    project: Project | null,
    hideType: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    project: null,
    hideType: false
  })

  const placeholderUrl: string = 'https://placehold.co/650x350'
</script>

<template>
  <Card v-if="props.project">
    <template #header>
      <Image imageClass="project-block-image" :src="props.project.imageUrl ?? placeholderUrl" alt="Image" />
    </template>
    <template #title>
      {{ props.project.name }}
      <span v-if="hideType === false">
        <Chip :label="props.project.type.name" />
      </span>
    </template>
    <template #content>
      <Button v-if="props.project.url" >
        <NuxtLink :to="props.project.url">View</NuxtLink>
      </Button>
      <GitRepoButton :repositories="props.project.repositories" />
    </template>
  </Card>
</template>

<style scoped>
.p-card img {
  border-radius: 6px;
}
.p-card {
  width: 650px;
}
.p-chip {
  background-color: #FFF;
  color: #000;
}
.p-card::v-deep .p-card-title {
  display: flex;
  align-items: center;
  gap: 12px;
}
.p-card::v-deep .p-card-content {
  display: flex;
  gap: 15px;
}
</style>
