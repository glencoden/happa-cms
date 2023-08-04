import articleCard from '../blueprints/articleCard'

export const lunchMenu = {
    title: 'Tageskarte',
    name: 'lunchMenu',
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

export const lunchDescription = {
    title: 'Mittagstisch Beschreibung',
    name: 'lunchDescription',
    ...articleCard,
}