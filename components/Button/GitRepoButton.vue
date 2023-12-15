<script setup lang="ts">
  import { ref } from 'vue'
  import Menu from 'primevue/menu'
  import Button from 'primevue/button'
  import type { GitRepository } from '@/types'

  type Props = {
    repositories: GitRepository[] | null
  }

  const props = withDefaults(defineProps<Props>(), {
    repositories: null
  })

  let repositories = []

  if (props.repositories) {
    for (const repository of props.repositories) {
      repositories.push({
        label: repository.name,
        url: repository.url
      })
    }
  }

  const menu = ref()
  const items = ref(repositories)

  const toggle = (event) => {
    menu.value.toggle(event);
  }
</script>

<template>
  <Button type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" label="Github" />
  <Menu ref="menu" id="overlay_menu" :model="items" :popup="true">
    <template #item="{ item, props }">
      <NuxtLink :to="item.url" target="_blank">
        <span class="p-button p-component p-button-link">{{ item.label }}</span>
      </NuxtLink>
    </template>
  </Menu>
</template>
