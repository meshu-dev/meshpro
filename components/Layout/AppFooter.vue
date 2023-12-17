<script setup lang="ts">
  import Image from 'primevue/image'
  import ImageLink from '@/components/Image/ImageLink'
</script>

<template>
  <footer>
    <div id="footer-content">
      <span id="footer-copyright">Copyright &copy; Mesh. All rights reserved</span>
      <div>
        <span>Built with&nbsp;</span>
        <ImageLink imgUrl="/_nuxt/assets/images/nuxt-logo.svg" imgText="Nuxt Logo" url="https://nuxt.com" width="80" />
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
  padding-top: 6px;
}

@media (max-width: 775px) {
  .p-card,
  .p-card::v-deep .project-block-image {
    max-width: 500px;
  }
}
</style>
