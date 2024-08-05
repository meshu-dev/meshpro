import { toRaw } from 'vue'
import type { About, ApiResponse, ApiValidationError, ContactMessage, ContactMessageResponse, Intro, IntroSite, Project } from '~/types'

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
        method: "GET"
      }
    )
  )
  const apiData: ApiResponse = toRaw(data.value) as ApiResponse

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
        method: "GET"
      }
    )
  )
  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data.projects as Project[]
}

export const sendMessage = async (contactMessage: ContactMessage): Promise<ContactMessageResponse | null> => {
  const apiUrl: string = getApiUrl()
  let contactMessageResponse: ContactMessageResponse | null = null

  await useFetch(
    `${apiUrl}/contact`,
    {
      method: "POST",
      body: contactMessage,
      onResponse({ request, response, options }) {
        response = toRaw(response)

        if (response.status == 200) {
          const responseData: { errors: any, message: string } = toRaw(response._data)

          contactMessageResponse = {
            success: true,
            message: responseData.message
          }
        }
      },
      onResponseError({ request, response, options }) {
        response = toRaw(response)

        if (response.status == 422 || response.status == 500) {
          const responseData: { message: string } = toRaw(response._data)

          contactMessageResponse = {
            success: false,
            message: responseData.message
          }
        }
      }
    }
  )
  return contactMessageResponse
}

