const webpack = require('webpack');
const path = require('path');

// common files
const extractCommons = new webpack.optimize.CommonsChunkPlugin({
  // ?	
	name: 'commons',
	// actual file
  filename: 'commons.js'
});

// require extract text
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// we name the after exact css file 
const extractCSS = new ExtractTextPlugin('[name].bundle.css');

const config = {
  context: path.resolve(__dirname, 'src'),
	entry: {
		app: './app.js',
		admin: './admin.js'
	},
  output: {
    path: path.resolve(__dirname, 'dist'),
		publicPath: '/dist/',
    filename: '[name].bundle.js'
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
			loader: extractCSS.extract(['stsyle-loader', 'css-loader', 'sass-loader'])
		},

		{
			test: /\.(png|jpg)$/,
			use: [{
				loader: 'url-loader',
				options: { limit: 10000 }
			}]
		}

		]
  },

	plugins: [
		extractCommons,
		extractCSS,
		new webpack.NamedModulesPlugin()
	]
}

// es5 syntax export constant
module.exports = config;
