<script setup lang="ts">
import Image from 'primevue/image'
import { getAboutData, login } from '@/services/api'
import type { About, Auth } from '@/types'
import { ImageEnum } from '@/enums/image';

const auth: Ref<Auth | null> = ref(
  await login() || null
)

const aboutData: Ref<About | null> = ref(
  auth.value?.token ? await getAboutData(auth.value.token) : null
)
</script>

<template>
  <div v-if="aboutData" class="flex gap-28 max-lg:flex-col max-lg:gap-10">
    <Image :src="aboutData.image_url || ImageEnum.About" width="1280" alt="Image" />
    <div>
      <h1>About Me</h1>
      <div v-html="aboutData.text" />
      <h2>Skills</h2>
      <ul v-if="aboutData.technologies" class="bullet-point-list">
        <li v-for="technology in aboutData.technologies" class="bullet-point-item">{{ technology }}</li>
      </ul>
    </div>
  </div>
</template>
