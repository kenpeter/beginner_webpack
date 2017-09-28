// webpack install locally
const webpack = require('webpack');
// physical path
const path = require('path');

// config obj
const config = {
  // Context is like the path in output
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
    },

		{
			test: /\.scss$/,
			use: [
				'style-loader',
				'css-loader',
				'sass-loader'
			]
		},

		{
			test: /\.(png|jpg)$/,
			use: [{
				loader: 'url-loader',
				options: { limit: 10000 }
			}]
		}

		]
  }
}

// es5 syntax export constant
module.exports = config;
