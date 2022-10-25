import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import menu from './menu'
import dayMenu from './day-menu'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        menu,
        dayMenu,
    ]),
})
