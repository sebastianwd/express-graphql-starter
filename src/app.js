import 'dotenv/config'
//  https://stackoverflow.com/a/54490329
import 'core-js/stable'
import 'regenerator-runtime/runtime'
//  -----
import express from 'express'
import bodyparser from 'body-parser'
import cors from 'cors'
import expressPlayground from 'graphql-playground-middleware-express'
import graphqlHTTP from 'express-graphql'
import schema from './schema'

const app = express()
const PORT = process.env.PORT || 3000

app.use(
  '/graphql',
  cors(),
  bodyparser.json(),
  graphqlHTTP({
    schema,
    graphiql: false
  })
)

app.get('/playground', expressPlayground({ endpoint: '/graphql' }))

console.log(process.env.HELLO)
app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`))
