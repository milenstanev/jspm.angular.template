const jspm = require('jspm');
const process = require('process')
const makeBuild = require('./lib/builde.js');

/**
 * Define baseUrl
 * . -> build, run as npm script file
 * .. -> debug, run as node file
 * @type {string}
 */
let baseUrl = '';

const appName = process.argv[2]; // required
baseUrl = process.argv[3] || baseUrl;

jspm.setPackagePath(baseUrl);
const jspmLoader = new jspm.Loader();


jspmLoader.import(`${baseUrl}/builder.json!`).then(
  builderConfig => makeBuild(
    appName,
    baseUrl,
    builderConfig
  )
);
