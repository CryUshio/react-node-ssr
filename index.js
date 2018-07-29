require("babel-register")({
    presets: [
        "es2015",
        "stage-0",
        "react"
    ],
    "plugins": [
        ["transform-runtime", {
            "helpers": false, 
            "polyfill": false,
            "regenerator": true,
            "moduleName": "babel-runtime"
        }],
        ["import", {
            "style": true,
            "libraryName": "antd"
        }],
        "syntax-dynamic-import",
        "react-html-attrs",
        "jsx-control-statements",
        "transform-runtime",
        "transform-decorators-legacy",
        "react-hot-loader/babel"
    ]
});

require('css-modules-require-hook')({
    extensions: ['.less'],
    preprocessCss: (data, filename) =>
        require('node-less').renderSync({
            data,
            file: filename
        }).css,
    camelCase: true,
    generateScopedName: '[name]__[local]__[hash:base64:8]'
})

// Image required hook
require('asset-require-hook')({
    extensions: ['jpg', 'png', 'gif', 'webp'],
    limit: 1024
})
require("./server/server");