type TNavItems = {
  title: string
  href: string
}

type TSkills = {
  title: string
  description: string
  skills: string[]
}

type TProject = {
  image: import('astro').ImageMetadata
  link: string
  heading: string
  subheading: string
  description: string
  keywords: string[]
}
