const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    host: 'https://flask.io/'
  }
})
