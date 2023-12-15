import type { AuthHeader, LoginDetails } from '@/types'

export const getAuthHeader = (token: string): AuthHeader => {
  return {
    'Authorization': `Bearer ${token}`
  }
}

export const getUrl = (path: string): string => {
  return String(`${process.env.API_URL}/${path}`)
}

export const getLoginDetails = (): LoginDetails => {
  const apiEmail: string    = String(process.env.API_EMAIL)
  const apiPassword: string = String(process.env.API_PASSWORD)

  return {
    "email": apiEmail,
    "password": apiPassword
  }
}