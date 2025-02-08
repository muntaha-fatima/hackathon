import { type SchemaTypeDefinition } from 'sanity'
import product from './product'

import {blockContentType} from './blockContentType'
import {categoryType} from './categoryType'
import {postType} from './postType'
import {authorType} from './authorType'
import orders from './orders'
// import homepage from './homepage'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, authorType,categoryType,blockContentType,  postType,orders],
  // homepage,
}
