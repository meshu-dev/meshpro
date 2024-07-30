<script setup lang="ts">
  import ImageLink from '@/components/Image/ImageLink'
</script>

<template>
  <footer>
    <div id="footer-content">
      <span id="footer-copyright">Copyright &copy; Mesh Pro. All rights reserved</span>
      <div>
        <span>Built with Laravel &amp; Nuxt.js</span>
        <!-- <ImageLink imgUrl="/img/nuxt-logo.svg" imgText="Nuxt Logo" url="https://nuxt.com" :width="80" /> -->
      </div>
    </div>
  </footer>
</template>

<style scoped>
footer {
  border-top: 1px solid rgb(71 85 105);
  padding: 50px 0;
  font-size: 18px;
}

#footer-content {
  display: flex;
  justify-content: space-between;
  margin: 50px auto 0;
  padding: 0 40px;
  max-width: 1440px;
}

#footer-copyright {
  padding-top: 3px;
}

@media (max-width: 775px) {
  .p-card,
  .p-card::v-deep .project-block-image {
    max-width: 500px;
  }
}
</style>
