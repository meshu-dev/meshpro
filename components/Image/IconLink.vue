<script setup lang="ts">
import type { IntroSite } from '~/types';

type Props = {
  site: IntroSite | null
}

const props = withDefaults(defineProps<Props>(), {
  site: null
})
</script>

<template>
  <NuxtLink v-if="props.site" :to="props.site.url" target="_blank" class="max-w-[32px]">
    <Image :src="props.site.image_url" :alt="props.site.name"  />
  </NuxtLink>
</template>
