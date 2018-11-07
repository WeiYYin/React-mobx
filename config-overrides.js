const {
    injectBabelPlugin
} = require('react-app-rewired');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, '.', dir)
}
const getStyleLoaders = (cssOptions, preProcessor) => {
    const loaders = [
        require.resolve('style-loader'),
        {
            loader: require.resolve('css-loader'),
            options: cssOptions,
        },
        {
            // Options for PostCSS as we reference these options twice
            // Adds vendor prefixing based on your specified browser support in
            // package.json
            loader: require.resolve('postcss-loader'),
            options: {
                // Necessary for external CSS imports to work
                // https://github.com/facebook/create-react-app/issues/2677
                ident: 'postcss',
                plugins: () => [
                    require('postcss-flexbugs-fixes'),
                    require('postcss-preset-env')({
                        autoprefixer: {
                            flexbox: 'no-2009',
                        },
                        stage: 3,
                    }),
                ],
            },
        },
    ];
    if (preProcessor) {
        loaders.push(require.resolve(preProcessor));
    }
    return loaders;
};
/* config-overrides.js */
module.exports = function override(config, env) {
    let list = config.module.rules;
    let index = null;
    let item = null;
    for (let i = 0; i < list.length; i++) {
        if (!!list[i].oneOf && list[i].oneOf.length > 0) {
            index = i;item = list[i].oneOf;
            break;
        }
    }
    if (!!item && item.length > 0 && !!item[3]) {
        config.module.rules[index].oneOf[3].test = /\.(css|less)$/;
        config.module.rules[index].oneOf[3].use = getStyleLoaders({importLoaders: 1,},'less-loader');
        let le = config.module.rules[index].oneOf.length-1;
        config.module.rules[index].oneOf[le].exclude = [/\.(js|mjs|jsx)$/, /\.html$/, /\.json$/, /\.(css|less)$/];
    }
    config.resolve.alias = {
        '@': resolve('src')
    }
    config = injectBabelPlugin(["@babel/plugin-proposal-decorators", {
        "legacy": true
    }], config);
    config = injectBabelPlugin(['import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css'
    }], config);

    return config;
}