const Builder = require('systemjs-builder');
const _ = require('underscore');

/**
 * Define baseUrl
 * . -> build, run as npm script file
 * .. -> debug, run as node file
 * @type {string}
 */
const buildConfig = {
  inject: true,
  minify: true,
  mangle: false,
  sourceMaps: true,
  format: 'umd',
  runtime: false
};
const baseConfig = {
  meta: {
    'angular': {
      build: false
    },
    'angular-ui/ui-router': {
      build: false
    }
  }
};

function makeBuild(
  appName,
  baseUrl = baseUrl,
  config = baseConfig
) {
  const jspmBuilder = new Builder(`${baseUrl}/`, `${baseUrl}/config.js`);
  let sourcePath = `${baseUrl}/src/${appName}.js`;
  let destinationPath = `${baseUrl}/dist/${appName}.dist.js`;

  // Extend default config with assigned one
  _.extend(config.meta, baseConfig.meta);

  jspmBuilder.config(config);

  jspmBuilder
    .buildStatic(sourcePath, destinationPath, buildConfig)
      .then(res => console.log('Build complete\n'))
      .catch(err => console.log('Build error\n', err)
    );
}

module.exports = makeBuild;
