<script setup lang="ts">
import Image from 'primevue/image'
import { ImageEnum } from '@/enums/image'
import { getAboutData } from '@/services/api'

const aboutData: About | null = await getAboutData()
const technologies: Technology[] = aboutData?.skills[0].technologies || []
</script>

<template>
  <div v-if="aboutData" id="about">
    <Image id="intro-image" :src="aboutData.imageUrl || ImageEnum.About" alt="Image" />
    <div>
      <h1>About Me</h1>
      <div v-html="aboutData.text" />
      <h2>Skills</h2>
      <ul>
        <li v-for="technology in technologies">{{ technology }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
#about {
  display: flex;
  gap: 100px;
}

.p-image {
  display: flex;
  justify-content: center;
}

h2 {
  margin-top: 40px;
}

li {
  margin-bottom: 8px;
}

@media (max-width: 1075px) {
  #about {
    flex-direction: column;
    gap: 40px;
  }
}
</style>
