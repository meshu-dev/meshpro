import { toRaw } from 'vue'
import type { ApiResponse, Type } from '@/types'
import { getAuthHeader } from '@/utils/api'

export const getTypes = async (token: string): Promise<Type[]> => {
  const { data, pending, error, refresh } = await useAsyncData(
    'types',
    () => $fetch(getUrl('types'), {
      server: true,
      method: "GET",
      headers: getAuthHeader(token)
    })
  )

  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data as Type[]
}
