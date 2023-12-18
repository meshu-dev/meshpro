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
    :class="`p-button font-bold ${isRounded ? 'p-button-rounded' : ''} ${isOutlined ? 'p-button-outlined' : ''} ${isDisabled ? 'p-disabled' : ''}`"
    :target="isNewTabLink ? '_blank' : '_self'">
    {{ props.label }}
  </NuxtLink>
</template>

<style scoped>
  a.p-button.p-button-outlined {
    color: #8dd0ff;
  }
</style>