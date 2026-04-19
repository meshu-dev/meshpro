<script setup lang="ts">
  import type { RuntimeConfig } from 'nuxt/schema'
  import type { ButtonProps } from '@nuxt/ui'
  
  const config: RuntimeConfig = useRuntimeConfig()

  const intro = getIntro()

  const links = ref<ButtonProps[]>([
    {
      label: 'Contact me',
      to: '/contact',
      color: 'neutral',
      variant: 'subtle',
    },
    {
      label: 'View CV',
      to: config.public.cvUrl,
      color: 'neutral',
      variant: 'subtle',
    }
  ])
</script>

<template>
  <div v-if="intro">
    <UPageHero
      class="p-0"
      :title="intro.line1"
      :description="intro.line2"
      :links="links" />
  </div>
</template>
