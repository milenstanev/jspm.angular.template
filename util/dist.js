"use strict";
const fs = require('fs');
const Builder = require('systemjs-builder');

const pjson = require('../package.json');

let builderConfigMeta = {
  "angular-core": {
    build: false
  }
};
/*for(let key in pjson.jspm.dependencies) {
  builderConfigMeta[key] = {
    build: false
  };
}*/

/**
 * Define baseUrl
 * . -> build, run as npm script file
 * .. -> debug, run as node file
 * @type {string}
 */
const baseUrl = '.';
/**
 * Configure builder paths
 */
const builder = new Builder(`${baseUrl}/`, `${baseUrl}/config.js`);

builder.config({
  meta: builderConfigMeta
});

builder
  .buildStatic(
    `${baseUrl}/index.js`,
    `${baseUrl}/${pjson.name}.js`,
    {
      inject: true,
      minify: true,
      mangle: false,
      sourceMaps: true,
      format: 'umd',
      runtime: false
    }
  ).then(function() {
  console.log('Build complete\n');
})
  .catch(function(err) {
    console.log('Build error\n');
    console.log(err);
  });
