const path = require('path')
const config = require('../portal.config')
const loaders = require('./webpack.loaders')
const plugins = require('./webpack.plugins')
console.log(path.join(config.root, config.paths.src, 'assets/styles'))
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin')
const webpackConf = {
	entry: path.join(__dirname, '..', config.paths.src, 'index.js'),
	output: {
		publicPath: '/',
		filename: 'portal.main.bundle.js',
		path: path.join(config.root, config.paths.dist),
		clean: true,
	},
	resolve: {
		extensions: ['*', '.js', '.jsx'],
		alias: {
			'@components': path.join(config.root, config.paths.src, 'components'),
			'@layout': path.join(config.root, config.paths.src, 'components', 'layout'),
			'@styles': path.join(config.root, config.paths.src, 'assets', 'styles'),
			'@constants': path.join(config.root, config.paths.src, 'constants'),
			'@assets': path.join(config.root, config.paths.src, 'assets'),
			'@navigation': path.join(config.root, config.paths.src, 'navigation'),
			'@helpers': path.join(config.root, config.paths.src, 'helpers'),
			'@services': path.join(config.root, config.paths.src, 'services'),
			'@common': path.join(config.root, config.paths.src, 'components', 'common'),
			'@hooks': path.join(config.root, config.paths.src, 'hooks'),
			'@utils': path.join(config.root, config.paths.src, 'utils'),
			'@actions': path.join(config.root, config.paths.src, 'store', 'actions'),
			'@reducers': path.join(config.root, config.paths.src, 'store', 'reducers'),
			'@selectors': path.join(config.root, config.paths.src, 'store', 'selectors'),
		},
	},
	//resolve: { extensions: ['*', '.js', '.jsx'] },
	plugins: plugins,
	module: {
		rules: loaders,
	},
}
// speed mesure plugin
const smp = new SpeedMeasurePlugin()

module.exports = smp.wrap(webpackConf)
