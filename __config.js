System.config({
  defaultJSExtensions: true,
  transpiler: "plugin-babel",
  babelOptions: {
    "optional": [
      "runtime",
      "optimisation.modules.system"
    ]
  },
  paths: {
    "github:*": "jspm_packages/github/*",
    "npm:*": "jspm_packages/npm/*"
  },

  meta: {
    "*.js": {
      "babelOptions": {
        "es2017": true,
        "react": true,
        "stage1": true
      }
    }
  },

  map: {
    "angular-ui/ui-router": "github:angular-ui/ui-router@0.4.2",
    "angular/bower-angular": "github:angular/bower-angular@1.6.4",
    "babel": "npm:babel-core@5.8.38",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "fs": "github:jspm/nodelibs-fs@0.1.2",
    "jquery": "npm:jquery@3.2.1",
    "json": "github:systemjs/plugin-json@0.3.0",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.21",
    "plugin-babel-runtime": "npm:babel-runtime@5.8.38",
    "systemjs-babel-build": "npm:systemjs-plugin-babel@0.0.21/systemjs-babel-browser.js"
  }
});
