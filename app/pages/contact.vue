<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'
import type { Toast } from '@nuxt/ui/runtime/composables/useToast.js'
const appConfig = useAppConfig()

const state = reactive({
  name: undefined,
  email: undefined,
  message: undefined
})

const token = ref()

type Schema = typeof state

function validate(state: Partial<Schema>): FormError[] {
  const errors = []

  if (!state.name) {
    errors.push({ name: 'name', message: 'Required' })
  }

  if (!state.email) {
    errors.push({ name: 'email', message: 'Required' })
  }

  if (!state.message) {
    errors.push({ name: 'message', message: 'Required' })
  }

  return errors
}

const toast = useToast()

async function onSubmit(event: FormSubmitEvent<Schema>) {
  //const { execute } = useChallengeV3('submit')
  const token: string = ''//await execute()

  let toastData: Partial<Toast> | null = null

  if (token) {
    toastData = {
      title: 'Success',
      description: 'The form has been submitted.',
      color: 'success'
    }
  } else {
    toastData = {
      title: 'error',
      description: 'An error occurred validating submission. Please try again later.',
      color: 'error',
    }
  }

  toast.add(toastData)
  return
}
</script>

<template>
  <div class="flex justify-center gap-10">
    <div>
      <p class="text-xl mb-10 w-[600px]">I'm always on the lookout for new opportunities 
      so please send me a message and let's talk</p>
      <UForm :validate="validate" :state="state" class="space-y-4 min-w-[600px]" @submit="onSubmit">
        <UFormField label="Name" name="name" orientation="horizontal" class="w-full">
          <UInput v-model="state.name" class="w-120" />
        </UFormField>
        <UFormField label="Email" name="email" orientation="horizontal" class="w-full">
          <UInput v-model="state.email" class="w-120" />
        </UFormField>
        <UFormField label="Message" name="message" orientation="horizontal" class="w-full">
          <UTextarea v-model="state.message" :rows="12" class="w-120" />
        </UFormField>
        <NuxtTurnstile class="ml-30" v-model="token" />
        <UButton type="submit" class="ml-30">
          Submit
        </UButton>
      </UForm>
    </div>
  </div>
</template>
