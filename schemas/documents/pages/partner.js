import articleBanner from '../blueprints/articleBanner'
import articleCard from '../blueprints/articleCard'

export const partnerBanner = {
    title: 'Partner Banner',
    name: 'partnerBanner',
    ...articleBanner,
}

export const partners = {
    title: 'Partner',
    name: 'partners',
    ...articleCard,
}

// export const partnerCarousel = {
//     title: 'Partner Karussell',
//     name: 'partnerCarousel',
//     type: 'document',
//     fields: [
//         {
//             name: 'Partner',
//             type: 'array',
//             of: [
//                 { type: 'reference', to: [ { type: 'partnerCarouselItem' } ] },
//             ],
//         },
//     ],
//     preview: {
//         prepare: () => ({
//             title: 'Liste',
//         }),
//     },
// }