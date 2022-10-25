import supportedLanguages from './locale/supportedLanguages'

export default {
    title: 'Localized Rich Text',
    name: 'localizedBlock',
    type: 'object',
    fields: supportedLanguages.map((locale) => ({
        title: locale.title,
        name: locale.id,
        type: 'array',
        of: [
            { type: 'block' },
        ],
    })),
}