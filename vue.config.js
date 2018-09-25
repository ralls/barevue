const fs = require('fs')
module.exports = {
    lintOnSave: true,
    css: {
        extract: false,
        loaderOptions: {
            sass: {
                data: fs.readFileSync('src/assets/sass/frontend.scss', 'utf-8'),
                filename: '[name].[ext]'
            }
        }
    }
}
