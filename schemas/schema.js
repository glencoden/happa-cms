import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'
import localizedString from './localizedString'
import localizedBlock from './localizedBlock'
import menu from './menu'
import dinner from './dinner'

export default createSchema({
    name: 'default',
    types: schemaTypes.concat([
        localizedString,
        localizedBlock,
        menu,
        dinner
    ]),
})
