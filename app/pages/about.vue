<script setup lang="ts">
  const about = getAbout()
  console.log('about', about)
</script>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col max-w-[600px] gap-4">
      <UPageHeader title="About Me" class="mb-6" />
      <div id="about-text" v-html="about?.text"></div>
      <div>
        <h2 class="bold mb-4 text-xl underline underline-offset-8">Skills</h2>
        <ul class="list-disc ml-6">
          <li v-for="technology of about?.technologies" class="mb-2">{{ technology }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>
