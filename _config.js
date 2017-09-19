System.config({
  baseURL: "/",
  defaultJSExtensions: true,
  transpiler: "babel",
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

  map: {
    "angular-core": "github:milenstanev/mstanev.angular.1.x.x.core@master",
    "babel": "npm:babel-core@5.8.38",
    "babel-plugin-transform-decorators": "npm:babel-plugin-transform-decorators@6.24.1",
    "babel-plugin-transform-decorators-legacy": "npm:babel-plugin-transform-decorators-legacy@1.3.4",
    "babel-preset-es2015": "npm:babel-preset-es2015@6.24.1",
    "babel-preset-es2017": "npm:babel-preset-es2017@6.24.1",
    "babel-runtime": "npm:babel-runtime@5.8.38",
    "core-js": "npm:core-js@1.2.7",
    "css": "github:systemjs/plugin-css@0.1.36",
    "json": "github:systemjs/plugin-json@0.3.0",
    "plugin-babel": "npm:systemjs-plugin-babel@0.0.25",
    "text": "github:systemjs/plugin-text@0.0.11",
    "github:angular/bower-angular-animate@1.6.6": {
      "angular": "github:angular/bower-angular@1.6.6"
    },
    "github:angular/bower-angular-sanitize@1.6.6": {
      "angular": "github:angular/bower-angular@1.6.6"
    },
    "github:jirikavi/AngularJS-Toaster@2.2.0": {
      "css": "github:systemjs/plugin-css@0.1.36"
    },
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.4.1"
    },
    "github:jspm/nodelibs-buffer@0.1.1": {
      "buffer": "npm:buffer@5.0.7"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.10"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:milenstanev/mstanev.angular.1.x.x.core@master": {
      "angular": "github:angular/bower-angular@1.6.6",
      "angular-animate": "github:angular/bower-angular-animate@1.6.6",
      "angular-sanitize": "github:angular/bower-angular-sanitize@1.6.6",
      "angular-strap": "npm:angular-strap@2.3.12",
      "angular-ui-router": "npm:@uirouter/angularjs@1.0.6",
      "jirikavi/AngularJS-Toaster": "github:jirikavi/AngularJS-Toaster@2.2.0",
      "json": "github:systemjs/plugin-json@0.3.0"
    },
    "npm:@uirouter/angularjs@1.0.6": {
      "@uirouter/core": "npm:@uirouter/core@5.0.6",
      "angular": "npm:angular@1.6.6",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:@uirouter/core@5.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:angular-strap@2.3.12": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "npm:util@0.10.3"
    },
    "npm:babel-code-frame@6.26.0": {
      "chalk": "npm:chalk@1.1.3",
      "esutils": "npm:esutils@2.0.2",
      "js-tokens": "npm:js-tokens@3.0.2"
    },
    "npm:babel-helper-bindify-decorators@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-call-delegate@6.24.1": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-define-map@6.26.0": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "lodash": "npm:lodash@4.17.4"
    },
    "npm:babel-helper-explode-class@6.24.1": {
      "babel-helper-bindify-decorators": "npm:babel-helper-bindify-decorators@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-function-name@6.24.1": {
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-get-function-arity@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-hoist-variables@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-optimise-call-expression@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-regex@6.26.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "lodash": "npm:lodash@4.17.4"
    },
    "npm:babel-helper-remap-async-to-generator@6.24.1": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-helper-replace-supers@6.24.1": {
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
      "babel-messages": "npm:babel-messages@6.23.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-messages@6.23.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:babel-plugin-check-es2015-constants@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-async-to-generator@6.24.1": {
      "babel-helper-remap-async-to-generator": "npm:babel-helper-remap-async-to-generator@6.24.1",
      "babel-plugin-syntax-async-functions": "npm:babel-plugin-syntax-async-functions@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-decorators-legacy@1.3.4": {
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-plugin-transform-decorators@6.24.1": {
      "babel-helper-explode-class": "npm:babel-helper-explode-class@6.24.1",
      "babel-plugin-syntax-decorators": "npm:babel-plugin-syntax-decorators@6.13.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-block-scoping@6.26.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "lodash": "npm:lodash@4.17.4"
    },
    "npm:babel-plugin-transform-es2015-classes@6.24.1": {
      "babel-helper-define-map": "npm:babel-helper-define-map@6.26.0",
      "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
      "babel-helper-optimise-call-expression": "npm:babel-helper-optimise-call-expression@6.24.1",
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.24.1",
      "babel-messages": "npm:babel-messages@6.23.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-computed-properties@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-destructuring@6.23.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-duplicate-keys@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-for-of@6.23.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-function-name@6.24.1": {
      "babel-helper-function-name": "npm:babel-helper-function-name@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-literals@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-modules-amd@6.24.1": {
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.26.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-modules-commonjs@6.26.0": {
      "babel-plugin-transform-strict-mode": "npm:babel-plugin-transform-strict-mode@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1": {
      "babel-helper-hoist-variables": "npm:babel-helper-hoist-variables@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-modules-umd@6.24.1": {
      "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:babel-plugin-transform-es2015-object-super@6.24.1": {
      "babel-helper-replace-supers": "npm:babel-helper-replace-supers@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-parameters@6.24.1": {
      "babel-helper-call-delegate": "npm:babel-helper-call-delegate@6.24.1",
      "babel-helper-get-function-arity": "npm:babel-helper-get-function-arity@6.24.1",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-template": "npm:babel-template@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-shorthand-properties@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-spread@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-sticky-regex@6.24.1": {
      "babel-helper-regex": "npm:babel-helper-regex@6.26.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-template-literals@6.22.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0"
    },
    "npm:babel-plugin-transform-es2015-unicode-regex@6.24.1": {
      "babel-helper-regex": "npm:babel-helper-regex@6.26.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "regexpu-core": "npm:regexpu-core@2.0.0"
    },
    "npm:babel-plugin-transform-regenerator@6.26.0": {
      "regenerator-transform": "npm:regenerator-transform@0.10.1"
    },
    "npm:babel-plugin-transform-strict-mode@6.24.1": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0"
    },
    "npm:babel-preset-es2015@6.24.1": {
      "babel-plugin-check-es2015-constants": "npm:babel-plugin-check-es2015-constants@6.22.0",
      "babel-plugin-transform-es2015-arrow-functions": "npm:babel-plugin-transform-es2015-arrow-functions@6.22.0",
      "babel-plugin-transform-es2015-block-scoped-functions": "npm:babel-plugin-transform-es2015-block-scoped-functions@6.22.0",
      "babel-plugin-transform-es2015-block-scoping": "npm:babel-plugin-transform-es2015-block-scoping@6.26.0",
      "babel-plugin-transform-es2015-classes": "npm:babel-plugin-transform-es2015-classes@6.24.1",
      "babel-plugin-transform-es2015-computed-properties": "npm:babel-plugin-transform-es2015-computed-properties@6.24.1",
      "babel-plugin-transform-es2015-destructuring": "npm:babel-plugin-transform-es2015-destructuring@6.23.0",
      "babel-plugin-transform-es2015-duplicate-keys": "npm:babel-plugin-transform-es2015-duplicate-keys@6.24.1",
      "babel-plugin-transform-es2015-for-of": "npm:babel-plugin-transform-es2015-for-of@6.23.0",
      "babel-plugin-transform-es2015-function-name": "npm:babel-plugin-transform-es2015-function-name@6.24.1",
      "babel-plugin-transform-es2015-literals": "npm:babel-plugin-transform-es2015-literals@6.22.0",
      "babel-plugin-transform-es2015-modules-amd": "npm:babel-plugin-transform-es2015-modules-amd@6.24.1",
      "babel-plugin-transform-es2015-modules-commonjs": "npm:babel-plugin-transform-es2015-modules-commonjs@6.26.0",
      "babel-plugin-transform-es2015-modules-systemjs": "npm:babel-plugin-transform-es2015-modules-systemjs@6.24.1",
      "babel-plugin-transform-es2015-modules-umd": "npm:babel-plugin-transform-es2015-modules-umd@6.24.1",
      "babel-plugin-transform-es2015-object-super": "npm:babel-plugin-transform-es2015-object-super@6.24.1",
      "babel-plugin-transform-es2015-parameters": "npm:babel-plugin-transform-es2015-parameters@6.24.1",
      "babel-plugin-transform-es2015-shorthand-properties": "npm:babel-plugin-transform-es2015-shorthand-properties@6.24.1",
      "babel-plugin-transform-es2015-spread": "npm:babel-plugin-transform-es2015-spread@6.22.0",
      "babel-plugin-transform-es2015-sticky-regex": "npm:babel-plugin-transform-es2015-sticky-regex@6.24.1",
      "babel-plugin-transform-es2015-template-literals": "npm:babel-plugin-transform-es2015-template-literals@6.22.0",
      "babel-plugin-transform-es2015-typeof-symbol": "npm:babel-plugin-transform-es2015-typeof-symbol@6.23.0",
      "babel-plugin-transform-es2015-unicode-regex": "npm:babel-plugin-transform-es2015-unicode-regex@6.24.1",
      "babel-plugin-transform-regenerator": "npm:babel-plugin-transform-regenerator@6.26.0"
    },
    "npm:babel-preset-es2017@6.24.1": {
      "babel-plugin-syntax-trailing-function-commas": "npm:babel-plugin-syntax-trailing-function-commas@6.22.0",
      "babel-plugin-transform-async-to-generator": "npm:babel-plugin-transform-async-to-generator@6.24.1"
    },
    "npm:babel-runtime@5.8.38": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-runtime@6.26.0": {
      "core-js": "npm:core-js@2.5.1",
      "regenerator-runtime": "npm:regenerator-runtime@0.11.0"
    },
    "npm:babel-template@6.26.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-traverse": "npm:babel-traverse@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "babylon": "npm:babylon@6.18.0",
      "lodash": "npm:lodash@4.17.4"
    },
    "npm:babel-traverse@6.26.0": {
      "babel-code-frame": "npm:babel-code-frame@6.26.0",
      "babel-messages": "npm:babel-messages@6.23.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "babylon": "npm:babylon@6.18.0",
      "debug": "npm:debug@2.6.8",
      "globals": "npm:globals@9.18.0",
      "invariant": "npm:invariant@2.2.2",
      "lodash": "npm:lodash@4.17.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:babel-types@6.26.0": {
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "esutils": "npm:esutils@2.0.2",
      "lodash": "npm:lodash@4.17.4",
      "to-fast-properties": "npm:to-fast-properties@1.0.3"
    },
    "npm:babylon@6.18.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@5.0.7": {
      "base64-js": "npm:base64-js@1.2.1",
      "ieee754": "npm:ieee754@1.1.8"
    },
    "npm:chalk@1.1.3": {
      "ansi-styles": "npm:ansi-styles@2.2.1",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.5",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.1",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:core-js@1.2.7": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-js@2.5.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:core-util-is@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:debug@2.6.8": {
      "ms": "npm:ms@2.0.0"
    },
    "npm:globals@9.18.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:invariant@2.2.2": {
      "loose-envify": "npm:loose-envify@1.3.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:loose-envify@1.3.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "js-tokens": "npm:js-tokens@3.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.10": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:readable-stream@1.1.14": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1",
      "core-util-is": "npm:core-util-is@1.0.2",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:regenerator-runtime@0.11.0": {
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:regenerator-transform@0.10.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "babel-runtime": "npm:babel-runtime@6.26.0",
      "babel-types": "npm:babel-types@6.26.0",
      "private": "npm:private@0.1.7",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:regexpu-core@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "regenerate": "npm:regenerate@1.3.3",
      "regjsgen": "npm:regjsgen@0.2.0",
      "regjsparser": "npm:regjsparser@0.1.5",
      "systemjs-json": "github:systemjs/plugin-json@0.1.2"
    },
    "npm:regjsparser@0.1.5": {
      "jsesc": "npm:jsesc@0.5.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.1.14"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.1"
    },
    "npm:strip-ansi@3.0.1": {
      "ansi-regex": "npm:ansi-regex@2.1.1"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    }
  }
});
