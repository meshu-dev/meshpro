import { toRaw } from 'vue'
import type { About, ApiResponse, Auth, ContactMessage, ContactMessageResponse, Intro, IntroSite, Project } from '~/types'
import { getPortfolioApiUrl, getPortfolioApiEmail, getPortfolioApiPassword } from '~/utils/common'

export const login = async (): Promise<any> => {
  const email: string = getPortfolioApiEmail()
  const password: string = getPortfolioApiPassword()

  const apiUrl: string = getPortfolioApiUrl()
  const { data } = await useAsyncData(
    'login',
    () => $fetch(
      `${apiUrl}/auth/login`,
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
        },
        method: "POST",
        body: JSON.stringify({ email, password })
      }
    )
  )

  const apiData: ApiResponse = toRaw(data.value) as ApiResponse

  return {
    token: apiData.data.token,
  } as Auth
}

export const getIntroText = async (token: string): Promise<Intro> => {
  const apiUrl: string = getPortfolioApiUrl()
  const { data } = await useAsyncData(
    'intro',
    () => $fetch(
      `${apiUrl}/portfolio/intro`,
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
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

export const getAboutData = async (token: string): Promise<About> => {
  const apiUrl: string = getPortfolioApiUrl()
  const { data, pending, error, refresh } = await useAsyncData(
    'about',
    () => $fetch(
      `${apiUrl}/portfolio/about`,
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        method: "GET"
      }
    )
  )
  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data as About
}

export const getProjects = async (token: string): Promise<Project[]> => {
  const apiUrl: string = getPortfolioApiUrl()
  const { data } = await useAsyncData(
    'projects',
    () => $fetch(
      `${apiUrl}/portfolio/projects`,
      {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${token}`, 
        },
        method: "GET"
      }
    )
  )
  const apiData: ApiResponse = toRaw(data.value) as ApiResponse
  return apiData.data as Project[]
}

export const sendMessage = async (contactMessage: ContactMessage): Promise<ContactMessageResponse | null> => {
  const apiUrl: string = getPortfolioApiUrl()
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

