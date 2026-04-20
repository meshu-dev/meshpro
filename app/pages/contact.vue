<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '@nuxt/ui'
import type { Toast } from '@nuxt/ui/runtime/composables/useToast.js'
import type { RuntimeConfig } from 'nuxt/schema'
import type { ContactPayload } from '@/types/Contact'
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
  console.log('cloudflare token', token.value, token)

  let toastData: Partial<Toast> | null = null

  if (
    state.name &&
    state.email &&
    state.message &&
    token.value
  ) {
    const config: RuntimeConfig = useRuntimeConfig()

    const payload: ContactPayload = {
      name: state.name,
      email: state.email,
      message: state.message,
      token: token.value
    } as ContactPayload

    const response = await sendMessage(
      config,
      payload
    )

    console.log('response', response)

    state.name = undefined
    state.email = undefined
    state.message = undefined

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
  <div class="flex md:justify-center gap-10">
    <div>
      <p class="text-xl mb-10 w-full lg:w-lg">I'm always on the lookout for new opportunities 
      so please send me a message and let's talk</p>
      <UForm :validate="validate" :state="state" class="w-full md:min-w-[600px] space-y-4" @submit="onSubmit">
        <UFormField label="Name" name="name" orientation="horizontal" class="w-full">
          <UInput v-model="state.name" class="w-full sm:w-90 md:w-120" />
        </UFormField>
        <UFormField label="Email" name="email" orientation="horizontal" class="w-full">
          <UInput v-model="state.email" class="w-full sm:w-90 md:w-120" />
        </UFormField>
        <UFormField label="Message" name="message" orientation="horizontal" class="w-full">
          <UTextarea v-model="state.message" :rows="12" class="w-full sm:w-90 md:w-120" />
        </UFormField>
        <div class="flex flex-col justify-center items-center mt-6 md:justify-items-start md:items-start">
          <NuxtTurnstile class="md:ml-30" v-model="token" />
          <div class="flex justify-center mt-4 md:justify-items-start">
            <UButton type="submit" class="md:ml-30">
              Submit
            </UButton>
          </div>
        </div>
      </UForm>
    </div>
  </div>
</template>
