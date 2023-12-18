<script setup>
  import Image from 'primevue/image'
  import Button from 'primevue/button'
  import LinkButton from '@/components/Button/LinkButton'
  import IconLink from '@/components/Image/IconLink'
  import { IconEnum } from '@/enums/icon' 
</script>

<template>
  <div id="intro">
    <Image id="intro-image" src="https://placehold.co/300x300" alt="Image" />
    <div>
      <div id="intro-text-1">Hello, I'm Mesh</div>
      <div id="intro-text-2">I'm a Software Developer with 15 years experience</div>
      <div id="intro-buttons">
        <LinkButton url="/contact" label="Contact me" :isRounded="true" />
        <Button label="Download CV" rounded outlined />
        <IconLink icon="fa-brands fa-github" url="https://github.com/meshu-dev" />
        <IconLink icon="fa-brands fa-linkedin" url="https://github.com/meshu-dev" />
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
