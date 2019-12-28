import { GraphQLObjectType, GraphQLSchema } from 'graphql'
import { HelloQuery } from 'queries'

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    hello: HelloQuery
  }
})

export default new GraphQLSchema({
  query: RootQuery
})
