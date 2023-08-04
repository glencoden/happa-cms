export const dataProtection = {
    title: 'Datenschutz',
    name: 'dataProtection',
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