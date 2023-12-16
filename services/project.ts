import { toRaw } from 'vue'
import type { ApiResponse, Project } from '@/types'
import { getPortfolioApiUrl, getAuthHeader } from '@/utils/api'

export const getProjects = async (token: string): Promise<Project[]> => {
  const projectUrl: string = getPortfolioApiUrl('projects')
  const { data, pending, error, refresh } = await useAsyncData(
    'projects',
    () => $fetch(
      projectUrl,
      {
        server: true,
        method: "GET",
        headers: getAuthHeader(token)
      }
    )
  )

  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data as Project[]
}

export const getProjectsByType = async (token: string, typeId: number): Promise<Project[]> => {
  const projectUrl: string = getPortfolioApiUrl(`projects?type_id=${typeId}`)
  const { data, pending, error, refresh } = await useAsyncData(
    `projects-type-${typeId}`,
    () => $fetch(
      projectUrl,
      {
        server: true,
        method: "GET",
        headers: getAuthHeader(token)
      }
    )
  )

  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data as Project[]
}
