import articleBanner from '../blueprints/articleBanner'
import articleCard from '../blueprints/articleCard'
import articleDefault from '../blueprints/articleDefault'

export const aboutBanner = {
    title: 'Über uns Banner',
    name: 'aboutBanner',
    ...articleBanner,
}

export const aboutNina = {
    title: 'Über Nina',
    name: 'aboutNina',
    ...articleCard,
}

export const aboutSophia = {
    title: 'Über Sophia',
    name: 'aboutSophia',
    ...articleCard,
}

export const aboutCarousel = {
    title: 'Über uns Karussell',
    name: 'aboutCarousel',
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

export const aboutHappaForHome = {
    title: 'Happa für Zuhause',
    name: 'aboutHappaForHome',
    ...articleDefault,
}