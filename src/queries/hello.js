import { GraphQLString } from 'graphql'
import { HelloType } from 'types'

export default {
  type: HelloType,
  args: {
    name: { type: GraphQLString }
  },
  resolve: async (parent, args) => {
    return { hello: 'world' }
  }
}
