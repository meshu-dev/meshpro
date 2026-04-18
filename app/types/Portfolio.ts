export type PortfolioResponse = {
  data:  {
    intro: Intro
    about: About
    projects: Project[]
  }
}

export type Repository = {
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
  image_url: string
}

export type About = {
  image_url: string
  text: string
  technologies: string[]
}

export type Project = {
  name: string
  description: string
  url: string
  image_url: string
  repositories: Repository[]
  technologies: string[]
}
