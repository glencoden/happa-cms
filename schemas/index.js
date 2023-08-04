import localizedString from './objects/localizedString'
import localizedBlock from './objects/localizedBlock'
import { homeBanner, homeDinnerSection, homeLunchSection } from './documents/pages/home'
import { aboutBanner, aboutNina, aboutSophia, aboutCarousel, aboutHappaForHome } from './documents/pages/about'
import { lunchMenu, lunchDescription } from './documents/pages/lunch'
import { dinnerBanner, dinnerEvent, dinnerEvents } from './documents/pages/dinner'
import { eventsBanner, eventPublic, eventsPublic, eventsPrivate } from './documents/pages/events'
import { voucher } from './documents/pages/voucher'
import { partnerBanner, partnerCarouselItem, partnerCarousel } from './documents/pages/partner'

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
    dinnerBanner,
    dinnerEvent,
    dinnerEvents,
    eventsBanner,
    eventPublic,
    eventsPublic,
    eventsPrivate,
    voucher,
    partnerBanner,
    partnerCarouselItem,
    partnerCarousel,
]

export const schemaTypes = [
    ...objectTypes,
    ...documentTypes,
]
