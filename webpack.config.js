// webpack install locally
const webpack = require('webpack');
// physical path
const path = require('path');

// config obj
const config = {
	// ./src/app.js
	// context is like full path
  context: path.resolve(__dirname, 'src'),
  // entry, relatived path
	entry: './app.js',
	// input, output
  output: {
		// ./dist/bundle.js
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },

	// module means loader
  module: {
    rules: [{
			// encouter .js
      test: /\.js$/,
			// use include, ./src, and use babel-loader here
      include: path.resolve(__dirname, 'src'),
			// use???
			// use is you can give it options
      use: [{
				// babel loader
        loader: 'babel-loader',
				// es6 syntax, modules false????
        options: {
          presets: [
            ['es2015', { modules: false }]
          ]
        }
      }]
    }]
  }
}

// es5 syntax export constant
module.exports = config;
