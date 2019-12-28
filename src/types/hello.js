import { GraphQLObjectType, GraphQLString } from 'graphql'

const HelloType = new GraphQLObjectType({
  name: 'Hello',
  fields: () => ({
    hello: {
      type: GraphQLString
    }
  })
})

export default HelloType
