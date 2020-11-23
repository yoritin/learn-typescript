const path = require('path');
console.log(path.resolve(__dirname, 'fafa', 'foo'));

module.exports = {
  entry: './dist/main.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devtool: 'inline-source-map'
}
