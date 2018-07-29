const ora = require('ora');
const rm = require('rimraf');
const path = require('path');
const chalk = require('chalk');
const webpack = require('webpack');

const webpackConfig = process.env.BUILD_ENV === 'prod'
    ? require('./webpack.conf.prod')
    : require('./webpack.conf.server');
const rmFileName = process.env.BUILD_ENV === 'prod' ? '../dist' : '../dist/*server.*';
const spinner = ora('building for production...');
spinner.start();

rm(path.join(__dirname, rmFileName), (err) => {
    if (err) {
        throw err;
    }
    webpack(webpackConfig, function (err, stats) {
        spinner.stop();
        if (err) {
            throw err;
        }
        process.stdout.write(stats.toString({
            colors: true,
            modules: false,
            children: false,
            chunks: false,
            chunkModules: false
        }) + '\n\n');
        /* eslint-disable no-console */
        console.log(chalk.cyan('  Build complete.\n'));
    });
});