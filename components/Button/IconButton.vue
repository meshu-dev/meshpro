<script setup lang="ts">
  import Image from 'primevue/image'

  type Props = {
    iconUrl: string | null
    iconText: string
    url: string
  }

  const props = withDefaults(defineProps<Props>(), {
    iconUrl: null,
    iconText: '',
    url: ''
  })
</script>

<template>
  <NuxtLink :to="props.url" target="_blank">
    <Image imageClass="intro-icon" :src="props.iconUrl" :alt="props.iconText" />
  </NuxtLink>
</template>
