<script setup lang="ts">
  type Props = {
    label: string | null
    url: string | null
    isRounded: boolean
    isDisabled: boolean
    isNewTabLink: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    label: null,
    url: null,
    isRounded: false,
    isDisabled: false,
    isNewTabLink: false
  })
</script>

<template>
  <NuxtLink
    v-if="props.url"
    :to="props.url"
    :class="`p-button font-bold ${isRounded ? 'p-button-rounded' : ''} ${isDisabled ? 'p-disabled' : ''}`"
    :target="isNewTabLink ? '_blank' : '_self'">
    {{ props.label }}
  </NuxtLink>
</template>
