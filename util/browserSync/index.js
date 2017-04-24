const browserSync = require('browser-sync').create();
const jspm = require('jspm');
const process = require('process');

const ENTRY_POINT = '.';
const SRC = `${ENTRY_POINT}/src`;
const SERVER_CONFIG = {
  server: {
    baseDir: `${ENTRY_POINT}/`
  }
  , open: process.env.npm_config_watch
};

jspm.setPackagePath(`${ENTRY_POINT}/`);
jspm.install(true, { lock: true })
  .then(startBs, onBsError);

function startBs(res) {
  browserSync.init(SERVER_CONFIG);

  if(process.env.npm_config_watch) {
    browserSync.watch([SRC], browserSync.reload);
  }
}

function onBsError(error) {
  throw new Error(error)
}
