export type LoginDetails = { email: string, password: string }

export type AuthHeader = { Authorization: string }

export type GitRepositoryRef = { label: string, url: string }

export type StatusMsgType = 'success' | 'info' | 'warn' | 'error'
export type StatusMsg = { type: StatusMsgType, text: string }

export type ContactMessage = { token: string, name: string, email: string, message: string }

export type ApiResponse = {
  data: any,
  links: {
    first: string,
    last: string,
    next: string | null,
    prev: string | null
  },
  meta: {
    current_page: number,
    from: number,
    to: number,
    total: number
  }
}

export type ApiValidationError = {
  errors: any
  message: string
}

export type ContactMessageResponse = {
  success: boolean
  message: string
}

export interface User {
  id: number
  name: string
  email: string
}

export type Auth = {
  token: string
  user: User
}

export interface Type {
  id: number
  name: string
}

export type GitRepository = {
  name: string
  url: string
}

export type Intro = {
  image: string
  line1: string
  line2: string
  sites: IntroSite[]
}

export type IntroSite = {
  name: string
  url: string
  image: string
}

export type About = {
  image: string
  text: string
  skills: Skill[]
}

export type Skill = {
  name: string
  technologies: Technology[]
}

export type Technology = {
  name: string
}

export type Project = {
  name: string
  description: string
  url: string
  image: string
  repositories: GitRepository[]
  technologies: Technology[]
}
