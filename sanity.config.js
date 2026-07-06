import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { deskStructure } from './deskStructure'

export default defineConfig({
    title: 'happa-cms',
    projectId: 'hwz0ma01',
    dataset: 'production',
    plugins: [
        structureTool({
            structure: deskStructure,
        }),
        visionTool(),
    ],
    tools: (prev) => {
        // 👇 Uses environment variables set by Vite in development mode
        if (import.meta.env.DEV) {
            return prev
        }
        return prev.filter((tool) => tool.name !== 'vision')
    },
    schema: {
        types: schemaTypes,
    },
})
