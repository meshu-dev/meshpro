<script setup lang="ts">
  import Logo from '@/components/Layout/Logo'
  import MenuLink from '@/components/Layout/MenuLink'
</script>

<template>
  <header class="flex flex-row justify-between items-center mt-5 mb-24 text-2xl max-md:flex-col max-md:items-center max-md:gap-5">
    <Logo class="font-sans" />
    <nav class="flex gap-5">
      <MenuLink label="About" url="/about" />
      <MenuLink label="Portfolio" url="/portfolio" />
      <MenuLink label="Blog" url="/blog" />
      <MenuLink label="Contact" url="/contact" />
    </nav>
  </header>
</template>
