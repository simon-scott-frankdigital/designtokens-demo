/* eslint-disable @typescript-eslint/no-var-requires */
// We register the TypeScript evaluator in gatsby-config so we don't need to do
// it in any other .js file. It automatically reads TypeScript config from
// tsconfig.json.

const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'

require('ts-node').register({
  compilerOptions: {
    lib: ['es2019.array', 'dom'],
    module: 'commonjs',
    target: 'es2017',
  },
  project: `${__dirname}/tsconfig.json`,
  require: ['tsconfig-paths/register'],
})
require('dotenv').config({
  path: `.env.${activeEnv}`,
})

// Use a TypeScript version of gatsby-config.js.

module.exports = require('./gatsby-config-ts')
