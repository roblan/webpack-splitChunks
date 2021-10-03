module.exports = ['a', 'b'].map(file => ({
	entry: {
		[file]: `./src/${file}.js`,
	},
	output: {
		chunkFilename: `${file}_[name].js`,
		library: `dynamic_shared_test_${file}`,
	},
	mode: 'production',
	optimization: {
		splitChunks: {
			minSize: 0,
		},
		minimizer: [],
	},
}));
