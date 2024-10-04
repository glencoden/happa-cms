export const privateBookingBanner = {
    title: 'Private Booking Banner',
    name: 'privateBookingBanner',
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

export const privateBookingCarousel = {
    title: 'Private Booking Karussell',
    name: 'privateBookingCarousel',
    type: 'document',
    fields: [
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