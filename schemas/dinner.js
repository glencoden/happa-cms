export default {
    title: 'Dinner',
    name: 'dinner',
    type: 'document',
    fields: [
        {
            title: 'Titel',
            name: 'title',
            type: 'localizedString',
        },
        {
            title: 'Beschreibung',
            name: 'description',
            type: 'localizedBlock',
        },
        {
            title: 'Banner Bild',
            name: 'banner',
            type: 'image',
        },
    ],
}