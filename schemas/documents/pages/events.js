import articleBanner from '../blueprints/articleBanner'

export const eventsBanner = {
    title: 'Events Banner',
    name: 'eventsBanner',
    ...articleBanner,
}

export const eventsPublic = {
    title: 'Public Events',
    name: 'eventsPublic',
    type: 'document',
    fields: [
        {
            title: 'Titel',
            name: 'title',
            type: 'localizedString',
        },
        {
            title: 'Datum',
            name: 'date',
            type: 'datetime',
        },
        {
            title: 'Beschreibung',
            name: 'description',
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
        {
            title: 'Bild',
            name: 'image',
            type: 'image',
        },
    ],
    preview: {
        select: {
            title: 'title',
            subtitle: 'date',
        },
        prepare: selection => ({
            title: selection.title?.de,
            subtitle: selection.subtitle?.de,
        }),
    },
}

export const eventsPrivate = {
    title: 'Private Events',
    name: 'eventsPrivate',
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
            title: 'Button Text',
            name: 'buttonText',
            type: 'localizedString',
        },
        {
            title: 'Button Link',
            name: 'buttonLink',
            type: 'string',
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