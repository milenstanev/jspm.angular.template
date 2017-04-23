const bs = require('browser-sync').create();
const exec  = require('child_process').exec;
const jspm = require('jspm');

const ENTRY_POINT = '.';
const SRC = `${ENTRY_POINT}/src`;
const SERVER_CONFIG = {
  server: {
    baseDir: `${ENTRY_POINT}/`
  }
  , open: false
};

function startBs(res) {
  bs.init(SERVER_CONFIG);
  bs.watch([SRC], bs.reload);
}

function onBsError(error) {
  throw new Error(error)
}

jspm.setPackagePath(`${ENTRY_POINT}/`);
jspm.install(true, { lock: true })
  .then(startBs, onBsError);

/*exec('~/node_modules/bin/jspm update', (error, stdout, stderr) => {
 console.log('stdout: ' + stdout);
 console.log('stderr: ' + stderr);
 if (error !== null) {
 console.log('exec error: ' + error);
 }
 });*/
