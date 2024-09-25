<script setup lang="ts">
  type Props = {
    label: string | null
    url: string | null
    isRounded: boolean
    isOutlined?: boolean
    isDisabled?: boolean
    isNewTabLink?: boolean
  }

  const props = withDefaults(defineProps<Props>(), {
    label: null,
    url: null,
    isRounded: false,
    isOutlined: false,
    isDisabled: false,
    isNewTabLink: false
  })
</script>

<template>
  <NuxtLink
    v-if="props.url"
    :to="props.url"
    :class="`px-3 py-2 bg-sky-600 border-sky-600 border border-solid text-black font-normal ${isRounded ? 'rounded-full' : ''} ${isOutlined ? 'bg-transparent text-sky-600' : ''} ${isDisabled ? 'disabled' : ''}`"
    :target="isNewTabLink ? '_blank' : '_self'">
    {{ props.label }}
  </NuxtLink>
</template>
