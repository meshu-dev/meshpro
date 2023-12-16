import { toRaw } from 'vue'
import type { ApiResponse, Type } from '@/types'
import { getPortfolioApiUrl, getAuthHeader } from '@/utils/api'

export const getTypes = async (token: string): Promise<Type[]> => {
  const typeUrl: string = getPortfolioApiUrl('types')
  const { data, pending, error, refresh } = await useAsyncData(
    'types',
    () => $fetch(
      typeUrl,
      {
        server: true,
        method: "GET",
        headers: getAuthHeader(token)
      }
    )
  )

  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data as Type[]
}
