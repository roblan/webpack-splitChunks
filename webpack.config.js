module.exports = {
    mode: 'production',
    optimization: {
        splitChunks: {
            minSize: 0,
        },
        minimizer: [],
    },
    entry: {
        a: './src/a.js',
        b: './src/b.js',
    },
};
