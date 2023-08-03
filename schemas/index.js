import localizedString from './objects/localizedString'
import localizedBlock from './objects/localizedBlock'
import lunchMenu from './documents/lunchMenu'
import homeBanner from './documents/homeBanner'
import homeLunchSection from './documents/homeLunchSection'
import homeDinnerSection from './documents/homeDinnerSection'

const objectTypes = [
    localizedString,
    localizedBlock,
]

const documentTypes = [
    homeBanner,
    homeLunchSection,
    homeDinnerSection,
    lunchMenu,
]

export const schemaTypes = [
    ...objectTypes,
    ...documentTypes,
]
