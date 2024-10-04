export const deskStructure = (S) =>
    S.list()
        .title('Unterseite')
        .items([
            S.listItem()
                .title('Home')
                .child(
                    S.list()
                        .title('Element')
                        .items([
                            S.listItem()
                                .title('Banner')
                                .child(S.document().schemaType('homeBanner').documentId('homeBanner')),
                            S.listItem()
                                .title('Mittagstisch Beschreibung')
                                .child(S.document().schemaType('homeLunchSection').documentId('homeLunchSection')),
                            S.listItem()
                                .title('Dinnerevents Beschreibung')
                                .child(S.document().schemaType('homeDinnerSection').documentId('homeDinnerSection')),
                            S.listItem()
                                .title('Karussell')
                                .child(S.document().schemaType('homeCarousel').documentId('homeCarousel')),
                        ]),
                ),
            S.listItem()
                .title('Über uns')
                .child(
                    S.list()
                        .title('Element')
                        .items([
                            S.listItem()
                                .title('Banner')
                                .child(S.document().schemaType('aboutBanner').documentId('aboutBanner')),
                            S.listItem()
                                .title('Über Nina')
                                .child(S.document().schemaType('aboutNina').documentId('aboutNina')),
                            S.listItem()
                                .title('Über Sophia')
                                .child(S.document().schemaType('aboutSophia').documentId('aboutSophia')),
                            S.listItem()
                                .title('Karussell')
                                .child(S.document().schemaType('aboutCarousel').documentId('aboutCarousel')),
                            S.listItem()
                                .title('Happa für Zuhause')
                                .child(S.document().schemaType('aboutHappaForHome').documentId('aboutHappaForHome')),
                        ]),
                ),
            S.listItem()
                .title('Mittag')
                .child(
                    S.list()
                        .title('Element')
                        .items([
                            S.listItem()
                                .title('Tageskarte')
                                .child(S.document().schemaType('lunchMenu').documentId('lunchMenu')),
                            S.listItem()
                                .title('Mittagstisch Beschreibung')
                                .child(S.document().schemaType('lunchDescription').documentId('lunchDescription')),
                        ]),
                ),
            S.listItem()
                .title('Dinner')
                .child(
                    S.list()
                        .title('Element')
                        .items([
                            S.listItem()
                                .title('Banner')
                                .child(S.document().schemaType('dinnerBanner').documentId('dinnerBanner')),
                            S.listItem()
                                .title('Karussell')
                                .child(S.document().schemaType('dinnerCarousel').documentId('dinnerCarousel')),
                            ...S.documentTypeListItems().filter(listItem => ['dinnerEvents'].includes(listItem.getId()))
                        ]),
                ),
            S.listItem()
                .title('Events')
                .child(
                    S.list()
                        .title('Element')
                        .items([
                            S.listItem()
                                .title('Banner')
                                .child(S.document().schemaType('eventsBanner').documentId('eventsBanner')),
                            ...S.documentTypeListItems().filter(listItem => ['eventsPublic'].includes(listItem.getId())),
                            S.listItem()
                                .title('Private Events')
                                .child(S.document().schemaType('eventsPrivate').documentId('eventsPrivate')),
                        ]),
                ),
            S.listItem()
                .title('Private Booking')
                .child(
                    S.list()
                        .title('Element')
                        .items([
                            S.listItem()
                                .title('Banner')
                                .child(S.document().schemaType('privateBookingBanner').documentId('privateBookingBanner')),
                            S.listItem()
                                .title('Karussell')
                                .child(S.document().schemaType('privateBookingCarousel').documentId('privateBookingCarousel')),
                        ]),
                ),
            S.listItem()
                .title('Gutscheine')
                .child(S.document().schemaType('voucher').documentId('voucher')),
            S.listItem()
                .title('Partner')
                .child(
                    S.list()
                        .title('Element')
                        .items([
                            S.listItem()
                                .title('Banner')
                                .child(S.document().schemaType('partnerBanner').documentId('partnerBanner')),
                            ...S.documentTypeListItems().filter(listItem => ['partners'].includes(listItem.getId())),
                        ]),
                ),
            S.listItem()
                .title('Presse')
                .child(S.document().schemaType('press').documentId('press')),
            S.listItem()
                .title('Impressum')
                .child(S.document().schemaType('imprint').documentId('imprint')),
            S.listItem()
                .title('Datenschutz')
                .child(S.document().schemaType('dataProtection').documentId('dataProtection')),
        ])
