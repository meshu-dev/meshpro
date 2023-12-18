import { toRaw } from 'vue'
import type { ApiResponse, Profile } from '@/types'
import { getPortfolioApiUrl, getAuthHeader } from '@/utils/api'

export const getProfile = async (token: string): Promise<Profile> => {
  const profileUrl: string = getPortfolioApiUrl('profile')
  const { data, pending, error, refresh } = await useAsyncData(
    'types',
    () => $fetch(
      profileUrl,
      {
        server: true,
        method: "GET",
        headers: getAuthHeader(token)
      }
    )
  )

  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data as Profile
}
