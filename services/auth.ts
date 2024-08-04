import { toRaw } from 'vue'
import type { Auth } from '~/types'
import { getPortfolioApiUrl, getLoginDetails } from '@/utils/api'

export const login = async (): Promise<any> => {
  const loginUrl: string = getPortfolioApiUrl('auth/login')
  const { data, pending, error, refresh } = await useAsyncData(
    'auth',
    () => $fetch(
      loginUrl,
      {
        server: true,
        method: "POST",
        body: getLoginDetails()
      }
    )
  )

  console.log('login', toRaw(data.value));

  return toRaw(data.value) as Auth
}
