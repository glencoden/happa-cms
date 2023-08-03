import localizedString from './objects/localizedString'
import localizedBlock from './objects/localizedBlock'
import { homeBanner, homeDinnerSection, homeLunchSection } from './documents/pages/home'
import { aboutBanner, aboutNina, aboutSophia, aboutCarousel, aboutHappaForHome } from './documents/pages/about'
import { lunchMenu, lunchDescription } from './documents/pages/lunch'

const objectTypes = [
    localizedString,
    localizedBlock,
]

const documentTypes = [
    homeBanner,
    homeLunchSection,
    homeDinnerSection,
    aboutBanner,
    aboutNina,
    aboutSophia,
    aboutCarousel,
    aboutHappaForHome,
    lunchMenu,
    lunchDescription,
]

export const schemaTypes = [
    ...objectTypes,
    ...documentTypes,
]
