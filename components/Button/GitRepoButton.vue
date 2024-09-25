<script setup lang="ts">
  import { ref } from 'vue'
  import Menu from 'primevue/menu'
  import Button from 'primevue/button'
  import LinkButton from '@/components/Button/LinkButton'
  import type { GitRepository, GitRepositoryRef } from '@/types/types'

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
    <Button type="button" @click="toggle" aria-haspopup="true" aria-controls="overlay_menu" label="Github" rounded />
    <Menu ref="menu" id="overlay_menu" :model="items" :popup="true" class="bg-gray-800 border border-slate-500 border-1 rounded-md mt-[1px] ml-1" :unstyled="true">
      <template #item="{ item }">
        <NuxtLink :to="item.url" target="_blank" class="block px-2 py-3 rounded hover:bg-slate-700 hover:bg-opacity-50">
          <span class="text-sky-600">{{ item.label }}</span>
        </NuxtLink>
      </template>
    </Menu>
  </template>
  <template v-else-if="repositories.length == 1">
    <LinkButton :url="repositories[0].url" label="Github" :isRounded="true" :isNewTabLink="true" />
  </template>
</template>
