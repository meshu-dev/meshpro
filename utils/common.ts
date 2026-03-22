import { useRuntimeConfig } from "nuxt/app"
import { toRaw } from "vue"
import { ConfigEnum } from "~/enums/config"

export const getEnvVariable = (name: string): string => {
  const value = useRuntimeConfig().public[name] || useRuntimeConfig()[name]
  return toRaw(value) as string
}

export const getPortfolioApiUrl = (): string => {
  return getEnvVariable(ConfigEnum.PortfolioApiUrl)
}

export const getPortfolioApiEmail = (): string => {
  return getEnvVariable(ConfigEnum.PortfolioApiEmail)
}

export const getPortfolioApiPassword = (): string => {
  return getEnvVariable(ConfigEnum.PortfolioApiPassword)
}
