import { RocketIcon } from '@sanity/icons/Rocket'
import { DeployTool } from './DeployTool'

export const deployTool = () => ({
    name: 'deploy',
    title: 'Deploy',
    icon: RocketIcon,
    component: DeployTool,
})
