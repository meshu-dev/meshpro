<script setup lang="ts">
  import Image from 'primevue/image'
  import Button from 'primevue/button'
  import LinkButton from '@/components/Button/LinkButton'
  import IconLink from '@/components/Image/IconLink'
  import { ImageEnum } from '@/enums/image'
  import type { Profile } from '@/types'
  import { login } from '@/services/auth'
  import { getProfile } from '@/services/profile'

  let profile: Profile | null = null

  const authData = await login()

  if (authData?.token) {
    profile = await getProfile(authData.token)
  }
</script>

<template>
  <div v-if="profile" id="intro">
    <Image id="intro-image" :src="ImageEnum.Intro" alt="Image" />
    <div>
      <div id="intro-text-1">Hello, I'm Mesh</div>
      <div id="intro-text-2">I'm a Software Developer with {{ profile.yearsExperience }} years experience</div>
      <div id="intro-buttons">
        <LinkButton url="/contact" label="Contact me" :isRounded="true" />
        <LinkButton url="https://cv.meshu.app/pdfs/cv.pdf" label="Download CV" :isRounded="true" :isOutlined="true" :isNewTabLink="true" />
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
