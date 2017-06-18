import {
  angular
} from 'angular-core';

import home from './home/app.home.js';

/**
 * @desc Description of app
 */
const app = angular.module('app', [
  'ui.router',
  home
]);

app.config(($stateProvider, $urlRouterProvider) => {
  $stateProvider
    .state('home', {
      url: '/home',
      template: `<${home}></${home}>`
    });

  return $urlRouterProvider.otherwise('/home');
});

angular.bootstrap(document.body, [app.name]);

export default app;
