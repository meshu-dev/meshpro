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
  <NuxtLink v-if="props.site" :to="props.site.url" target="_blank">
    <Image :src="props.site.image" :alt="props.site.name" />
  </NuxtLink>
</template>
