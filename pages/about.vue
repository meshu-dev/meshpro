<script setup>
  import Image from 'primevue/image';
</script>

<template>
  <div id="about">
    <Image id="intro-image" src="https://placehold.co/500x500" alt="Image" />
    <div>
      <h1>About Me</h1>
      <div>I am a full stack web developer with a passion for creating interactive and responsive web applications. 
      I have experience working with JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, 
      and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. I am a team player 
      and I am excited to work with others to create amazing applications.</div>
      <ul>
        <li>PHP</li>
        <li>PHP</li>
        <li>PHP</li>
        <li>PHP</li>
        <li>PHP</li>
        <li>PHP</li>
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

@media (max-width: 1075px) {
  #about {
    flex-direction: column;
    gap: 40px;
  }
}
</style>
