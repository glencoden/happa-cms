import articleBanner from '../blueprints/articleBanner'
import articleDefault from '../blueprints/articleDefault'

export const homeBanner = {
    title: 'Home Banner',
    name: 'homeBanner',
    ...articleBanner,
}

export const homeLunchSection = {
    title: 'Home Mittagstisch Beschreibung',
    name: 'homeLunchSection',
    ...articleDefault,
}

export const homeDinnerSection = {
    title: 'Home Dinnerevents Beschreibung',
    name: 'homeDinnerSection',
    ...articleDefault,
}

export const homeCarousel = {
    title: 'Home Karussell',
    name: 'homeCarousel',
    type: 'document',
    fields: [
        {
            title: 'Beschreibung',
            name: 'description',
            type: 'localizedBlock',
        },
        {
            title: 'Bilder',
            name: 'images',
            type: 'array',
            of: [
                { type: 'image' },
            ],
        },
    ],
    preview: {
        prepare: () => ({
            title: 'Karussell',
        }),
    },
}