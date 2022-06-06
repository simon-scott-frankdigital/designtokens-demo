import Footer from '../components/Footer'
import * as Sections from '../sections'

export type Components = {
  [sectionName: string]: React.ElementType
}

const { Hero } = Sections

export const SectionComponents: Components = {
  ContentfulSectionHero: Hero,
  ContentfulFooter: Footer,
}
