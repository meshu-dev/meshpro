import { ConfigEnum } from "~/enums/config"

export const getEnvVariable = (name: string): string => {
  return toRaw(useRuntimeConfig().public[name]) as string
}

export const getPortfolioApiUrl = (): string => {
  return getEnvVariable(ConfigEnum.PortfolioApiUrl)
}

export const getHyperApiUrl = (): string => {
  return getEnvVariable(ConfigEnum.HyperApiUrl)
}

export const getBlogUrl = (): string => {
  return getEnvVariable(ConfigEnum.BlogUrl)
}
