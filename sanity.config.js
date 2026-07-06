import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemas'
import { deskStructure } from './deskStructure'
import { deployTool } from './plugins/deploy-tool'

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
        const tools = import.meta.env.DEV
            ? prev
            : prev.filter((tool) => tool.name !== 'vision')

        return [...tools, deployTool()]
    },
    schema: {
        types: schemaTypes,
    },
})
