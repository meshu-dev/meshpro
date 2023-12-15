import { toRaw } from 'vue'
import type { ApiResponse, Project } from '@/types'
import { getAuthHeader } from '@/utils/api'

export const getProjects = async (token: string): Promise<Project[]> => {
  const { data, pending, error, refresh } = await useAsyncData(
    'projects',
    () => $fetch(getUrl('projects'), {
      server: true,
      method: "GET",
      headers: getAuthHeader(token)
    })
  )

  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data as Project[]
}

export const getProjectsByType = async (token: string, typeId: number): Promise<Project[]> => {
  const { data, pending, error, refresh } = await useAsyncData(
    `projects-type-${typeId}`,
    () => $fetch(getUrl(`projects?type_id=${typeId}`), {
      server: true,
      method: "GET",
      headers: getAuthHeader(token)
    })
  )

  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data as Project[]
}
