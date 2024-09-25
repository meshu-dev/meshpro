<script setup lang="ts">
import LinkButton from '@/components/Button/LinkButton.vue'
import IconLink from '@/components/Image/IconLink.vue'
import { getIntroText } from '@/services/api'
import type { Intro } from '~/types'

const introDetails: Ref<Intro | null> = ref(
  await getIntroText() || null
)
</script>

<template>
  <div v-if="introDetails" class="flex flex-row justify-center items-center h-[50vh] gap-10 max-lg:flex-col">
    <div>
      <div class="text-5xl max-lg:text-center">{{ introDetails.line1 }}</div>
      <div class="text-2xl mt-4 mb-8 max-lg:text-center">{{ introDetails.line2 }}</div>
      <div class="flex gap-5 max-lg:justify-center">
        <LinkButton url="/contact" label="Contact me" :isRounded="true" />
        <LinkButton url="https://cv.meshpro.io" label="View CV" :isRounded="true" :isOutlined="true"
          :isNewTabLink="true" />
        <IconLink v-for="site of introDetails.sites" :site="site" />
      </div>
    </div>
  </div>
</template>
