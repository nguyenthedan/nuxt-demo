export default {
  target: 'static',
  build: {
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.md$/,
        use: [{
          loader: 'frontmatter-markdown-loader'
        }]
      })
    }
  },
  router: {
    base: 'nuxt-demo'
  }
}
