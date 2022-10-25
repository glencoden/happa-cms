export default {
    title: 'Tageskarte',
    name: 'menu',
    type: 'document',
    fields: [
        {
            title: 'Beschreibung für Interne',
            name: 'description',
            type: 'string',
        },
        {
            title: 'Titel',
            name: 'title',
            type: 'localizedString',
        },
        {
            title: 'Karte',
            name: 'detail',
            type: 'localizedBlock',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'description',
        },
        prepare: selection => ({
            title: selection.title?.de,
            subtitle: selection.subtitle,
        }),
    },
}