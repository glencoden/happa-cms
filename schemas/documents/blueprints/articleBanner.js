export default {
    type: 'document',
    fields: [
        {
            title: 'Titel',
            name: 'title',
            type: 'localizedString',
        },
        {
            title: 'Untertitel',
            name: 'subtitle',
            type: 'localizedString',
        },
        {
            title: 'Beschreibung',
            name: 'description',
            type: 'localizedBlock',
        },
        {
            title: 'Bild',
            name: 'image',
            type: 'image',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'subtitle',
        },
        prepare: selection => ({
            title: selection.title?.de,
            subtitle: selection.subtitle?.de,
        }),
    },
}