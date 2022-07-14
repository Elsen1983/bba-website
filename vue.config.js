const { defineConfig } = require('@vue/cli-service')
module.exports ={
  transpileDependencies: true,
  pages:{
    'index': {
      // entry for the page
      entry: './src/pages/Home/main.js',
      // the source template
      template: 'public/index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Ballincollig Business Association - Home',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    'about': {
      // entry for the page
      entry: './src/pages/About/main.js',
      // the source template
      template: 'public/index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Ballincollig Business Association - About',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'about']
    }
  }
  
}
