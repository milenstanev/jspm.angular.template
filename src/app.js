import angular from 'angular/bower-angular'
import 'angular-ui/ui-router';

import home from './app.home.js';

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

