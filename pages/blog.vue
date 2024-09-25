<script setup lang="ts">
import { getBlogPosts } from '@/services/api'
import type { BlogPost } from '~/types'
import { getBlogUrl } from '@/utils/common'
import dayjs from 'dayjs'
import LinkButton from '@/components/Button/LinkButton.vue'

const blogPostData: Ref<BlogPost[] | null> = ref(
  await getBlogPosts() || null
)
const blogUrl: string = getBlogUrl()
</script>

<template>
  <h1>Latest blog posts</h1>
  <div class="flex flex-col mt-16 gap-12 text-2xl mb-12">
    <div v-for="blogPost in blogPostData" class="flex justify-between max-lg:flex-col max-lg:justify-start">
      <a :href="`${blogUrl}/${blogPost.slug}`" target="_blank" class="text-sky-400 decoration-dotted underline underline-offset-8 leading-10">{{ blogPost.title }}</a>
      <span>{{ dayjs(blogPost.published_at).format("MMM D, YYYY") }}</span>
    </div>
  </div>
  <div>
    <LinkButton :url="`${blogUrl}/blog`" label="View more posts" :isRounded="true" :isNewTabLink="true" />
  </div>
</template>
