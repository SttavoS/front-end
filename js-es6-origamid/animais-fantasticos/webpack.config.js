const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', 'whatwg-fetch', './src/js/script.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    }
}