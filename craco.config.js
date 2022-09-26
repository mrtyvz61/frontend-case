const path = require(`path`);

module.exports = {
	webpack: {
		alias: {
			'@components': path.resolve(__dirname, './src/components/'),
			'@context': path.resolve(__dirname, './src/context/'),
			'@hooks': path.resolve(__dirname, './src/hooks/'),
			'@layouts': path.resolve(__dirname, './src/layouts/'),
			'@pages': path.resolve(__dirname, './src/pages/'),
			'@constants': path.resolve(__dirname, './src/constants/'),
			'@utils': path.resolve(__dirname, './src/utils/'),
		},
	},
};
