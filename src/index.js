import AngularCoreModule from 'angular-core';

import appHome from './home/app.home';

export const Module = angular
  .module('app', [
    AngularCoreModule,
    appHome
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('home', {
        url: '/home',
        component: 'appHome'
      });

    return $urlRouterProvider.otherwise('/home');
  });

angular.bootstrap(document.body, [Module.name]);
