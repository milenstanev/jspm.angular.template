import { angular, CoreModule } from 'milenstanev/mstanev.angular.1.x.x.core';
//import { appLazyLoadRouterModule, futureRoutesCollection } from 'milenstanev/jspm.angular.lazyload-router';

//import { futureRoutes } from './futureRoutes';
import { appHome } from './home/home.module';

export const Module = angular
  .module('app', [
    CoreModule
    //, appLazyLoadRouterModule
    , appHome
  ])
  .config(($stateProvider, $urlRouterProvider) => {
    $stateProvider
      .state('404', {
        url: '/404',
        component: 'page404'
      });

    return $urlRouterProvider.otherwise('/404');
  })
  .component('page404', {template: '404'})
  .component('layout', {template: '<div ui-view></div>'})
  .component('app', {template: '<layout></layout>'})
  .name;
