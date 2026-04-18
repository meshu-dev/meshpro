<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'
import Logo from '~/components/Logo.vue'

const route = useRoute()

const items = computed<NavigationMenuItem[]>(() => [
  {
    label: 'Home',
    to: '/',
    active: route.path === '/'
  },
  {
    label: 'About',
    to: '/about',
    active: route.path.startsWith('/about')
  },
  {
    label: 'Projects',
    to: '/projects',
    active: route.path.startsWith('/projects')
  },
  {
    label: 'Contact',
    to: '/contact',
    active: route.path.startsWith('/contact')
  },
])

const intro = getIntro()
</script>

<template>
  <div>
    <UHeader>
      <template #title>
        <Logo class="h-6 w-auto" />
      </template>
      <UNavigationMenu :items="items" />
      <template #right>
        <UTooltip text="Open on GitHub" :kbds="['meta', 'G']">
          <UButton
            v-for="site of intro?.sites"
            color="neutral"
            variant="ghost"
            :to="site.url"
            target="_blank"
            icon="i-simple-icons-github"
            :aria-label="site.name"
          />
        </UTooltip>
        <UColorModeButton />
      </template>
    </UHeader>
    <UContainer class="min-h-[610px] py-10">
      <slot />
    </UContainer>
    <USeparator />
    <UFooter>
      <template #left>
        <p class="text-muted text-sm">
          Built with 
          <a href="https://laravel.com" class="bold text-[#f53003]" target="_blank">Laravel</a> &amp; 
          <a href="https://nuxt.com" class="bold text-[#00dc82]" target="_blank">Nuxt.js</a>
        </p>
      </template>
      <template #right>
        <p class="text-muted text-sm">
          Copyright &copy; {{ new Date().getFullYear() }} Mesh Pro. All rights reserved
        </p>
      </template>
    </UFooter>
  </div>
</template>

<!--
    <AppHeader />
    <slot />
    <AppFooter />
-->
