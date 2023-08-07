export const imprint = {
    title: 'Impressum',
    name: 'imprint',
    type: 'document',
    fields: [
        {
            title: 'Titel',
            name: 'title',
            type: 'localizedString',
        },
        {
            title: 'Text',
            name: 'text',
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