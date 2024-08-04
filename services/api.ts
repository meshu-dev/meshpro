import { toRaw } from 'vue'
import type { About, ApiResponse, Intro, IntroSite, Project } from '~/types'
import { getPortfolioApiUrl, getAuthHeader } from '@/utils/api'

//const meshApiUrl: string = process.env.NUXT_PUBLIC_MESH_API_URL || 'http://localhost:8000'

console.log('process.env', process.env)

const getApiUrl = (): string => {
  const runtimeConfig = useRuntimeConfig()
  const meshproApiUrl: string = toRaw(runtimeConfig.public.meshproApiUrl)

  return meshproApiUrl
}

export const getIntroText = async (token: string = ''): Promise<Intro> => {
  const apiUrl: string = getApiUrl()
  const { data } = await useAsyncData(
    'intro',
    () => $fetch(
      `${apiUrl}/portfolio/intro`,
      {
        server: false,
        method: "GET"
      }
    )
  )
  const apiData: ApiResponse = toRaw(data.value) as ApiResponse

  console.log('apiData', toRaw(data))

  return {
    line1: apiData.data.line1,
    line2: apiData.data.line2,
    sites: apiData.data.sites as IntroSite[]
  } as Intro
}

export const getAboutData = async (token: string = ''): Promise<About> => {
  const apiUrl: string = getApiUrl()
  const { data, pending, error, refresh } = await useAsyncData(
    'about',
    () => $fetch(
      `${apiUrl}/portfolio/about`,
      {
        server: false,
        method: "GET"
      }
    )
  )
  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data as About
}

export const getProjects = async (token: string = ''): Promise<Project[]> => {
  const apiUrl: string = getApiUrl()
  const { data } = await useAsyncData(
    'projects',
    () => $fetch(
      `${apiUrl}/portfolio/projects`,
      {
        server: false,
        method: "GET"
      }
    )
  )
  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data.projects as Project[]
}
