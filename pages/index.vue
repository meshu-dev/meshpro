<script setup lang="ts">
import Image from 'primevue/image'
import Button from 'primevue/button'
import LinkButton from '@/components/Button/LinkButton'
import IconLink from '@/components/Image/IconLink'
import { ImageEnum } from '@/enums/image'
import type { Profile } from '@/types'
import { login } from '@/services/auth'
import { getIntroText } from '@/services/api'

const introDetails: Intro | null = await getIntroText()
</script>

<template>
  <div v-if="introDetails" id="intro">
    <Image id="intro-image" :src="introDetails.imageUrl || ImageEnum.Intro" alt="Image" />
    <div>
      <div id="intro-text-1">{{ introDetails.line1 }}</div>
      <div id="intro-text-2">{{ introDetails.line2 }}</div>
      <div id="intro-buttons">
        <LinkButton url="/contact" label="Contact me" :isRounded="true" />
        <LinkButton url="https://cv.meshpro.io" label="View CV" :isRounded="true" :isOutlined="true"
          :isNewTabLink="true" />
        <IconLink icon="fa-brands fa-github" url="https://github.com/meshu-dev" />
        <IconLink icon="fa-brands fa-linkedin" url="https://www.linkedin.com/in/harmeshuppal" />
      </div>
    </div>
  </div>
</template>

<style scoped>
#intro {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  gap: 40px;
}

#intro-image {
  width: 100px;
  height: 100px;
  filter: invert(1);
}

#intro-text-1 {
  font-size: 50px;
  margin: 10px 0;
}

#intro-text-2 {
  font-size: 30px;
  margin: 10px 0 30px;
}

#intro-buttons {
  display: flex;
  gap: 20px;
}

@media (max-width: 1100px) {
  #intro {
    flex-direction: column;
  }

  #intro-text-1,
  #intro-text-2 {
    text-align: center;
  }

  #intro-buttons {
    justify-content: center;
  }
}
</style>
