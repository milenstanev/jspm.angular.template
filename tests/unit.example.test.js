const assert = require('assert');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');

function read(relPath) {
  return fs.readFileSync(path.join(root, relPath), 'utf8');
}

function has(source, value, msg) {
  assert.ok(source.includes(value), msg);
}

const packageJson = JSON.parse(read('package.json'));
assert.strictEqual(
  packageJson.jspm.dependencies.testModule,
  'milenstanev/jspm.angular.test-module@master',
  'jspm dependency "testModule" must be installed in angular.template'
);

const appHome = read(path.join('src', 'home', 'app.home.js'));
has(appHome, "angular.module('app.home', [])", 'app.home module must exist');
has(appHome, "export default 'app.home';", 'app.home must export module name');

const index = read(path.join('src', 'index.js'));
has(index, '.module(\'app\'', 'root app module must be declared');
has(index, 'appHome', 'root app module must include appHome feature');

console.log('angular.template unit example passed');
