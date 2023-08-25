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
    fields: [
        ...articleCard.fields,
        {
            title: 'Link Url',
            name: 'buttonLink',
            type: 'string',
        },
    ]
}