import { toRaw } from 'vue'
import type { About, ApiResponse, Intro, Profile, Project } from '@/types'
import { getPortfolioApiUrl, getAuthHeader } from '@/utils/api'

const meshApiUrl: string = process.env.MESH_API_URL || 'http://localhost:8000/api'

export const getIntroText = async (token: string): Promise<Intro> => {
  const { data, pending, error, refresh } = await useAsyncData(
    'intro',
    () => $fetch(
      `${meshApiUrl}/portfolio/intro`,
      {
        server: false,
        method: "GET"
      }
    )
  )

  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  console.log('apiData.data', apiData)

  return {
    line1: apiData.data['portfolio_intro_1'],
    line2: apiData.data['portfolio_intro_2']
  } as Intro
}

export const getAboutData = async (token: string): Promise<About> => {
  const { data, pending, error, refresh } = await useAsyncData(
    'about',
    () => $fetch(
      `${meshApiUrl}/portfolio/about`,
      {
        server: false,
        method: "GET"
      }
    )
  )

  console.log('apiData.data', data);

  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data as About
}

export const getProjects = async (token: string): Promise<Project[]> => {
  const { data, pending, error, refresh } = await useAsyncData(
    'projects',
    () => $fetch(
      `${meshApiUrl}/portfolio/projects`,
      {
        server: false,
        method: "GET"
      }
    )
  )

  const apiData: ApiResponse = toRaw(data.value) as ApiResponse

  console.log('apiData', apiData);

  return apiData.data as Project[]
}
