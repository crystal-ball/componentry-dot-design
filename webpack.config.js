'use strict'

const path = require('path')
const webpackBase = require('@crystal-ball/webpack-base')

/*
 * 📦 Single webpack configuration file handles different environment build targets
 * by using webpack-base to merge configurations common to all environments with
 * configurations unique to targeted environment.
 *
 * 📝 https://github.com/crystal-ball/webpack-base
 */
module.exports = () => {
  /*
   * Generate the base configuration object by passing the environment flags and
   * optional options object available for customizing the standard project
   * conventions.
   */
  const { configs } = webpackBase({
    envVars: { PACKAGE_VERSION: '0.0.0' },
  })

  // Ensure that when componentry is npm-linked only one version of React is
  // used in the bundle or it will blow up
  configs.resolve.alias['react-dom'] = path.resolve('node_modules/react-dom')
  configs.resolve.alias.react = path.resolve('node_modules/react')

  /*
   * Handle non-standard, advanced project customization by directly updating
   * the generated base configs.
   */

  // During development use the RHL patched version of react-dom
  if (process.env.NODE_ENV === 'development') {
    configs.resolve.alias['react-dom'] = '@hot-loader/react-dom'
  }

  return configs
}
