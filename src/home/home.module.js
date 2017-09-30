import { angular, CoreModule } from 'milenstanev/mstanev.angular.1.x.x.core';

import {
  HomeComponent
} from './home.component.js';

export const appHome = angular
  .module('app.home', [
    CoreModule
  ])
  .config(($stateProvider) => {
    $stateProvider
      .state('home', {
        url: '/home',
        component: 'appHome',
        resolve: {
          title: () => 'Home Page Title',
          user: () => {
            return {
              name: 'User name'
            };
          }
        }
      });
  })
  .factory('testSvc', ($timeout) => {
    let map = new Map();
    map.set('data', new Set());

    return {
      map,
      getData: () => {
        $timeout(() => {
          map.get('data').add({title: 'added'});
        }, 2000);

        return new Promise((resolve) => {
          resolve({data: [
            {title: '1'},
            {title: '2'},
            {title: '3'},
            {title: '4'}
          ]});
        });
      },
      clear: () => map.get('data').clear()
    };
  })
  .component('appHome', HomeComponent)
  .name;

