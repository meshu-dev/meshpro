<script setup lang="ts">
import Image from 'primevue/image'
import { getAboutData } from '@/services/api'
import type { About } from '@/types'
import { ImageEnum } from '@/enums/image';

const aboutData: Ref<About | null> = ref(
  await getAboutData() || null
)
</script>

<template>
  <div v-if="aboutData" class="flex gap-28 max-lg:flex-col max-lg:gap-10">
    <Image :src="aboutData.image || ImageEnum.About" width="1280" alt="Image" />
    <div>
      <h1>About Me</h1>
      <div v-html="aboutData.text" />
      <h2>Skills</h2>
      <ul v-if="aboutData.skills[0]" class="bullet-point-list">
        <li v-for="technology in aboutData.skills[0].technologies" class="bullet-point-item">{{ technology }}</li>
      </ul>
    </div>
  </div>
</template>
