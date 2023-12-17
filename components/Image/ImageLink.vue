<script setup lang="ts">
  import Image from 'primevue/image'

  type Props = {
    imgUrl: string | null
    imgText: string
    url: string
    width: number
  }

  const props = withDefaults(defineProps<Props>(), {
    imgUrl: null,
    imgText: '',
    url: '',
    width: 100
  })
</script>

<template>
  <NuxtLink :to="props.url" target="_blank">
    <Image :src="props.imgUrl" :alt="props.imgText" :width="width" />
  </NuxtLink>
</template>
