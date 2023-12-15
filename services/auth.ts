import { toRaw } from 'vue'
import type { Auth } from '@/types'
import { getUrl, getLoginDetails } from '@/utils/api'

export const login = async (): Promise<any> => {
  const { data, pending, error, refresh } = await useAsyncData(
    'auth',
    () => $fetch(getUrl('auth/login'), {
      server: true,
      method: "POST",
      body: getLoginDetails()
    })
  )

  return toRaw(data.value) as Auth
}
