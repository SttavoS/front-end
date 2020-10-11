const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', 'whatwg-fetch', './assets/js/script.js'],
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'main.js'
    }
}