import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
    api: {
        projectId: 'hwz0ma01',
        dataset: 'production',
    },
    studioHost: 'happa',
    deployment: {
        appId: '3cb8a2647a0aa088b051596c',
    },
})