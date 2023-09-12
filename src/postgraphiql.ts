import {
  PostGraphileOptions,
  makePluginHook,
  makeExtendSchemaPlugin,
  gql,
} from 'postgraphile'
import PgPubsub from '@graphile/pg-pubsub'
const { postgraphile } = require('postgraphile')
const { DATABASE, PG_USER, PASSWORD, HOST, PG_PORT } = process.env
import ConnectionFilterPlugin from 'postgraphile-plugin-connection-filter'

const pluginHook = makePluginHook([PgPubsub])

const DATABASE_USE = {
  database: 'wellvi',
  user: 'postgres',
  password: 'Elang0putih!',
  host: HOST && HOST,
  port: PG_PORT && PG_PORT,
}

const SCHEMA = 'public'

const OPTIONS: PostGraphileOptions = {
  pluginHook,
  appendPlugins: [
    require('@graphile-contrib/pg-simplify-inflector'),
    require('@graphile/subscriptions-lds').default,
  ],
  watchPg: true,
  graphiql: true,
  enhanceGraphiql: true,
  subscriptions: true,
  dynamicJson: true,
  setofFunctionsContainNulls: true,
  ignoreRBAC: false,
  showErrorStack: 'json',
  extendedErrors: ['hint', 'detail', 'recode'],
  allowExplain: true,
  legacyRelations: 'omit',
  sortExport: true,
  legacyJsonUuid: true,
  retryOnInitFail: true,
}

export const middleware = postgraphile(DATABASE_USE, SCHEMA, OPTIONS)
