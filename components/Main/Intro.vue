<script setup>
  import Image from 'primevue/image';
  import Button from 'primevue/button';
</script>

<template>
  <div id="intro">
    <Image id="intro-image" src="https://placehold.co/300x300" alt="Image" />
    <div>
      <div id="intro-text-1">Hello, I'm Mesh</div>
      <div id="intro-text-2">I'm a Software Developer with 15 years experience</div>
      <div id="intro-buttons">
        <Button label="Contact me" rounded />
        <Button label="Download CV" rounded outlined />
        <NuxtLink to="https://github.com/meshu-dev" target="_blank">
          <Image imageClass="intro-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="Github" />
        </NuxtLink>
        <NuxtLink to="https://github.com/meshu-dev" target="_blank">
          <Image imageClass="intro-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg" alt="LinkedIn" />
        </NuxtLink>
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
</style>
