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

export interface User {
  id: number,
  name: string,
  email: string
}

export type Auth = {
  token: string,
  user: User
}

export interface Type {
  id: number,
  name: string
}

export interface GitRepository {
  id: number,
  name: string,
  url: string
}

export interface Technology {
  id: number,
  name: string
}

export interface Project {
  id: number,
  type: Type,
  name: string,
  description: string,
  url: string,
  imageUrl: string,
  repositories: GitRepository[]
  technologies: Technology[]
}

