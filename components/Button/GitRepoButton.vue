<script setup lang="ts">
  import { ref } from 'vue'
  import Menu from 'primevue/menu'
  import Button from 'primevue/button'
  import LinkButton from '@/components/Button/LinkButton'
  import type { GitRepository, GitRepositoryRef } from '@/types'

  type Props = {
    repositories: GitRepository[] | null
  }

  const props = withDefaults(defineProps<Props>(), {
    repositories: null
  })

  let repositories: GitRepositoryRef[] = []

  if (props.repositories) {
    repositories = props.repositories.map(
      (repository: GitRepository) => ({ label: repository.name, url: repository.url })
    )
  }

  const menu  = ref()
  const items = ref(repositories)

  const toggle = (event: any) => {
    menu.value.toggle(event);
  }
</script>

<template>
  <template v-if="repositories.length > 1">
    <Button type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" label="Github" />
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
      <template #item="{ item }">
        <NuxtLink :to="item.url" target="_blank">
          <span class="p-button p-component p-button-link">{{ item.label }}</span>
        </NuxtLink>
      </template>
    </Menu>
  </template>
  <template v-else-if="repositories.length == 1">
    <LinkButton :url="repositories[0].url" label="Github" />
  </template>
</template>
