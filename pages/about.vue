<script setup>
  import Image from 'primevue/image';
</script>

<template>
  <div id="about">
    <Image id="intro-image" src="https://placehold.co/500x500" alt="Image" />
    <div>
      <h1>About Me</h1>
      <p>I'm a full stack developer with web development experience in PHP / Javascript, 
        Amazon AWS linux server related setup / maintenance work and mobile development 
        implementing native / web apps for both Android and iOS devices.</p>
      <p>For a long time I've been interested in software development and continue to spend 
        time researching and improving upon my skills and experience in new and popular 
        technologies.</p>
      <h2>Skills</h2>
      <ul>
        <li>PHP</li>
        <li>Laravel</li>
        <li>Node.js</li>
        <li>MySQL</li>
        <li>MongoDB</li>
        <li>Vue.js</li>
        <li>React</li>
        <li>Angular</li>
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
