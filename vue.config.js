// vue.config.js
module.exports = {
    publicPath: '',
    indexPath: "index.html",
    outputDir: "www",
    assetsDir: '',
    css: {
     loaderOptions: {
       // pass options to sass-loader
       // @/ is an alias to src/
       // by default the `sass` option will apply to both syntaxes
       // because `scss` syntax is also processed by sass-loader underlyingly
       // but when configuring the `data` option
       // `scss` syntax requires an semicolon at the end of a statement, while `sass` syntax requires none
       // in that case, we can target the `scss` syntax separately using the `scss` option
       scss: {
         prependData: `@import "~@/assets/scss/main.scss";`
       },
     }
   }
}
