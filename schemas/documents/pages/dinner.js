import articleBanner from '../blueprints/articleBanner'

export const dinnerBanner = {
    title: 'Dinner Banner',
    name: 'dinnerBanner',
    ...articleBanner,
}

export const dinnerCarousel = {
    title: 'Dinner Karussell',
    name: 'dinnerCarousel',
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

export const dinnerEvents = {
    title: 'Dinnerevents',
    name: 'dinnerEvents',
    type: 'document',
    fields: [
        {
            title: 'Titel',
            name: 'title',
            type: 'localizedString',
        },
        {
            title: 'Karte',
            name: 'menu',
            type: 'localizedBlock',
        },
        {
            title: 'Button Text',
            name: 'buttonText',
            type: 'localizedString',
        },
        {
            title: 'Button Link',
            name: 'buttonLink',
            type: 'string',
        },
    ],
    preview: {
        select: {
            title: 'title',
        },
        prepare: selection => ({
            title: selection.title?.de,
        }),
    },
}