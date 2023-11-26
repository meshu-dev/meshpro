import { apiToken } from './api/auth'
import { getTypes } from './api/types'
import { getProjects } from './api/projects'
import { getAbout } from './api/about'

export const getProjectListProps = async () => {
  const token = await apiToken()
  const types = await getTypes(token)
  const projects = await getProjects(token)

  return {
    types: types.data,
    projects: projects.data
  }
}

export const getAboutProps = async () => {
  const aboutHtml = await getAbout()

  return {
    about: aboutHtml,
    techList: ''
  }
}
