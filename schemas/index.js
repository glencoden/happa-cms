import localizedString from './objects/localizedString'
import localizedBlock from './objects/localizedBlock'
import { homeBanner, homeDinnerSection, homeLunchSection } from './documents/pages/home'
import { aboutBanner, aboutNina, aboutSophia, aboutCarousel, aboutHappaForHome } from './documents/pages/about'
import { lunchMenu, lunchDescription } from './documents/pages/lunch'
import { dinnerBanner, dinnerEvents } from './documents/pages/dinner'
import { eventsBanner, eventsPublic, eventsPrivate } from './documents/pages/events'
import { voucher } from './documents/pages/voucher'
import { partnerBanner, partners } from './documents/pages/partner'
import { press } from './documents/pages/press'
import { imprint } from './documents/pages/imprint'
import { dataProtection } from './documents/pages/dataProtection'

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
    dinnerEvents,
    eventsBanner,
    eventsPublic,
    eventsPrivate,
    voucher,
    partnerBanner,
    partners,
    press,
    imprint,
    dataProtection,
]

export const schemaTypes = [
    ...objectTypes,
    ...documentTypes,
]
