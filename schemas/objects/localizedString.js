import supportedLanguages from '../enums/supportedLanguages'

export default {
    title: 'Localized String',
    name: 'localizedString',
    type: 'object',
    fields: supportedLanguages.map((locale) => ({
        title: locale.title,
        name: locale.id,
        type: 'string',
    })),
}