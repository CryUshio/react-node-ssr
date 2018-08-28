module.exports = function(type) {
    return {
        "presets": [
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
                "style": type === 'server' ? false : true,
                "libraryName": "antd"
            }],
            "syntax-dynamic-import",
            "react-html-attrs",
            "jsx-control-statements",
            "transform-runtime",
            "transform-decorators-legacy"
        ]
    }
}